require('babel-register');
const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const React = require('react');
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');
const { Helmet } = require('react-helmet');
const staticCache = require('koa-static-cache');
const { createApp, createAppStore } = require('./src');

const app = new Koa();

app.use(staticCache(path.join(__dirname, 'dist/assets'), { prefix: '/assets', dynamic: true }));
app.use(handleRequest);

const indexContent = fs.readFileSync(path.join(__dirname, 'dist/index.html'), 'utf8');

async function handleRequest(context) {
  let html = await renderToHtml();
  context.body = html;
};

async function renderToHtml() {
  const store = createAppStore({});
  const App = createApp(store);
  const initialState = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
  const appString = renderToString(App);
  const helmet = Helmet.renderStatic();
  // console.log(helmet.bodyAttributes.toString(), helmet)
  return indexContent.replace(/<!--appContent-->/g, appString)
    .replace(/<!--appState-->/g, `<script>window.__INITIAL_STATE__ = ${initialState}</script>`);
}

app.listen(7772, err => {
  console.log(err, 'started');
});
