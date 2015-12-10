# Thrift入门Demo

##文件说明

thrift.exe Thrift的Windows编译文件，用于通过接口定义文件生成服务端\客户端代码

thrift.js  Thrift的浏览器端js文件

1.thrift  Thrift的接口定义文件

server.js  node服务端代码，使用node server启动，监听7410（Socket请求）和7411（Http请求）

node_client node程序远程调用server方法示例

http_client.html  客户端代码，通过http远程调用方法示例

gen-js/gen-nodejs Thrift生成的代码

## 如何使用

下载好代码后，使用``npm i``安装依赖

然后执行node server 启动服务端

接下来执行node node_client 测试node RPC

打开http_client.html来测试浏览器RPC
