using System;
using Microsoft.AspNetCore.Hosting;

namespace FirstWebApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseStartup<Startup>()
                //设置要监视的URL地址，可以监听多个端口
                .UseUrls("http://localhost:10000", "http://localhost:9999", "http://*:10001")
                .Build();
            host.Run();
            Console.WriteLine("Server started...");
        }
    }
}
