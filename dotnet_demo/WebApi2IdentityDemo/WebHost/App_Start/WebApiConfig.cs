using System.Web.Http;
using WebHost.Models;

namespace WebHost
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.SuppressHostPrincipal();

            config.Filters.Add(new CustomAuthenticationFilter());
        }
    }
}
