require('babel-register');
const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const React = require('react');
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');
const { createApp, createAppStore } = require('./src');

const app = new Koa();

app.use(handleRequest);

const indexContent = fs.readFileSync(path.join(__dirname, 'src/index-server.html'), 'utf8');


async function handleRequest(context) {
  let html = await renderToHtml();
  context.body = html;
};

async function renderToHtml() {
  const store = createAppStore({});
  const App = createApp(store);
  const initialState = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
  const appString = renderToString(App);
  return indexContent.replace(/<!--appContent-->/g, appString)
    .replace(/<!--appState-->/g, `<script>window.__INITIAL_STATE__ = ${initialState}</script>`);
}

app.listen(7772, err => {
  console.log(err, 'started');
});
