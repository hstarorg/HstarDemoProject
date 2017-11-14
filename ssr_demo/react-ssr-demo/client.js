import 'babel-polyfill';

import { createApp, createAppStore } from './src';
import { hydrate, render } from 'react-dom';

const store = createAppStore();
const App = createApp(store);
const h = window.__INITIAL_STATE__ ? hydrate : render;
h(App, document.getElementById('app'));
