const path = require('path');
const url = require('url');
const { app, BrowserWindow, Notification, nativeImage } = require('electron');

let win;

const createWindow = () => {
  win = new BrowserWindow({ width: 800, height: 600 });

  // 加载应用的 index.html。
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // 打开开发者工具。
  win.webContents.openDevTools();

  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null;
  });

  app.setName('Electron Demo App');
  let notify = new Notification({
    title: 'Hello',
    body: '我是个可爱的小通知2',
    icon: nativeImage.createEmpty()
  });
  notify.show();
};

app.on('ready', createWindow);

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  // 在这文件，你可以续写应用剩下主进程代码。
  // 也可以拆分成几个文件，然后用 require 导入。
  if (win === null) {
    createWindow();
  }
});
