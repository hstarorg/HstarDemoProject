using Microsoft.AspNetCore.Mvc;
using ServicelifttimeDemo.Business;
using ServicelifttimeDemo.Services;

namespace ServicelifttimeDemo.Controllers
{
  [Route("")]
  public class DefaultController : Controller
  {
    private readonly Service1 s1;
    private readonly Service2 s2;
    private readonly Service3 s3;
    private readonly DefaultBusiness defaultBiz;

    public DefaultController(Service1 s1, Service2 s2, Service3 s3, DefaultBusiness defaultBiz)
    {
      this.s1 = s1;
      this.s2 = s2;
      this.s3 = s3;
      this.defaultBiz = defaultBiz;

    }

    [Route("singleton")]
    public IActionResult SingletonTest()
    {
      this.defaultBiz.GetS1Value();
      return Json(new
      {
        s1 = s1.GetValue()
      });
    }

    [Route("scoped")]
    public IActionResult ScopedTest()
    {
      this.defaultBiz.GetS2Value();
      return Json(new
      {
        s2 = s2.GetValue()
      });
    }

    [Route("transient")]
    public IActionResult TransientTest()
    {
      this.defaultBiz.GetS3Value();
      return Json(new
      {
        s3 = s3.GetValue()
      });
    }
  }
}
