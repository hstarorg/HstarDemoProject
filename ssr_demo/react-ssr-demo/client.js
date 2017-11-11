import 'babel-polyfill';

import { createApp, createAppStore } from './src';

import { render } from 'react-dom';

const store = createAppStore();
const App = createApp(store);

render(App, document.getElementById('app'));
