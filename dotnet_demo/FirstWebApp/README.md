# FirstConsoleApp

使用 ``dotnet core`` 1.0.0 编写的简易Web应用程序。

# 开始步骤

在 [https://www.microsoft.com/net/core#windows](https://www.microsoft.com/net/core#windows) 下载最新版的 ``the .NET Core SDK for Windows``，并安装。

当在控制台输入 ``dotnet --version`` 输出了 ``dotnet`` 的版本号，表示安装成功。

进行当前目录，使用 ``dotnet new`` 创建项目模板。

使用 ``dotnet restore`` 安装依赖（就算没有依赖，也需要执行这一步，会产生一个project.lock.json）

使用 ``dotnet run`` 启动程序。