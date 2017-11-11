const path = require('path');
const Koa = require('koa');
const React = require('react');
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');

const 

const app = new Koa();

app.use(handleRequest);

function handleRequest(context) {
  const store = createStore();
  // const html = renderToString()
};

app.listen(7771, err => {
  console.log(err, 'started');
});
