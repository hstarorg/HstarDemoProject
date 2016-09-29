using System.Web.Http;

namespace WebHost.Controllers
{
    [RoutePrefix("api/v1")]
    public class HomeController : ApiControllerBase
    {
        [Route("home")]
        [Authorize]
        [HttpGet]
        public object Get()
        {
            return new { Id = "1", Name = "哈哈哈哈哈", this.SystemUser.UserId, UserName = this.SystemUser.Name };
        }
    }
}
