# React SSR Demo

```bash
npm i

# Client development
npm run dev

# Server Side Render Development
# Build client
npm run build
# Run server
npm run dev:server
```

**默认打开 http://localhost:7771/ **

# 注意事项：

1、在使用SSR时，入口HTML模板，必须没有多余空行。

```html
<div id="app">
  <!--appContent-->
</div>
```

Should be:

```html
<div id="app"><!--appContent--></div>
```

2、在渲染SSR模板时，请使用 `ReactDOM.hydrate` 来代替 `ReactDOM.render`。

```js
import { hydrate, render } from 'react-dom';
const h = window.__INITIAL_STATE__ ? hydrate : render;
h(App, document.getElementById('app'));
``` 
