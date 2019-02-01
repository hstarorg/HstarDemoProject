using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using ServicelifttimeDemo.Services;

namespace ServicelifttimeDemo
{
  public class Startup
  {
    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddMvc();
      services.AddSingleton<Service1>();
      services.AddScoped<Service2>();
      services.AddTransient<Service3>();
      services.AddTransient<Business.DefaultBusiness>();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, Service1 s1)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      //app.Run(async (context) =>
      //{
      //  await context.Response.WriteAsync("Hello World!" + s1.GetValue().ToString());
      //});

      app.UseMvc();
    }
  }
}
