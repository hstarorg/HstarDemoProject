const Koa = require('Koa');
const helmet = require('koa-helmet');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const static = require('koa-static');
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');
const session = require('koa-session');
const logger = require('koa-logger');
const responseTime = require('koa-response-time');
const error = require('koa-error');

const app = new Koa();

const router1 = new Router({
  prefix: ''
});


router1.get('/:id', async ctx => {
  ctx.body = {
    a: 1,
    b: 'ssss'
  }; // `我是首页, params: ${ctx.params.id}`;
});

const router2 = new Router({
  prefix: '/users'
});
app.use(error());
app.use(responseTime());
app.use(logger());
app.use(conditional());
// add etags
app.use(etag());
// 设置安全header
app.use(helmet());
app.use(static(__dirname));
app.use(bodyParser());
// session config
const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
};
app.use(session(CONFIG, app));

app.use(router1.routes());

app.use(router2.routes());

app.use((ctx) => {
  ctx.throw(404, 'not found.');
});

app.listen(3000);
