using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace FirstWebApp
{
  public class Startup
  {
    public void Configure(IApplicationBuilder app)
    {
      app.Run(context => {
        Console.WriteLine($"Current Request Path: {context.Request.Path}");
        return context.Response.WriteAsync("Hello, what are you  want to do?");
      });
    }
  }
}