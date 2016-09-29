using System.Web.Http;
using WebHost.Models;

namespace WebHost.Controllers
{
    public class ApiControllerBase: ApiController
    {
        public SystemUser SystemUser
        {
            get
            {
                return this.User.Identity as SystemUser;
            }
        }
    }
}