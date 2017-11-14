const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const staticCache = require('koa-static-cache');
const { createBundleRenderer } = require('vue-server-renderer');

const app = new Koa();

function createRenderer(bundle, options) {
  // https://github.com/vuejs/vue/blob/dev/packages/vue-server-renderer/README.md#why-use-bundlerenderer
  return createBundleRenderer(bundle, Object.assign(options, {
    // for component caching
    // cache: LRU({
    //   max: 1000,
    //   maxAge: 1000 * 60 * 15
    // }),
    // this is only needed when vue-server-renderer is npm-linked
    basedir: path.resolve(__dirname, 'dist'),
    // recommended for performance
    runInNewContext: false
  }))
}

let renderer;
const template = fs.readFileSync(path.join(__dirname, 'src/index.template.html'), 'utf-8');
const bundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
renderer = createRenderer(bundle, {
  template,
  clientManifest
})
app.use(staticCache(path.join(__dirname, 'dist/static'), { prefix: '/static', dynamic: true }));
app.use(handleRequest);

async function handleRequest(ctx) {
  try {
    const html = await renderToHtml(ctx.url);
    ctx.body = html;
  } catch (err) {
    console.log(err);
    if (err.code) {
      ctx.throw(err.code, err);
    }
    ctx.throw(err);
  }

}

async function renderToHtml(url) {
  const context = {
    title: 'Vue SSR Demo', // default title
    url
  };
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      if (err) { return reject(err) }
      resolve(html);
    });
  });
}

app.listen(7772, err => {
  console.log(err, 'started');
});
