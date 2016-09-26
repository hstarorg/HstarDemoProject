# angular2-package-test

该项目用于将 ``Angular2 umd`` 版本进行打包，并使用 ``webpack`` 打包具体项目来进行使用。

```bash
# 将angular2合并为一个umd包，在浏览器中直接引入
$ npm run build 
```

```bash
# 使用webpack测试打包的umd包
$ npm run dev
```

**注意：Webpack需要如下配置**

```
externals: {
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/compiler': 'ng.compiler',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
  '@angular/http': 'ng.http',
  '@angular/forms': 'ng.forms',
  '@angular/router': 'ng.router'
}
``` 