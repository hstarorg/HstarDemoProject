using ServicelifttimeDemo.Services;

namespace ServicelifttimeDemo.Business
{
  public class DefaultBusiness
  {
    private readonly Service1 s1;
    private readonly Service2 s2;
    private readonly Service3 s3;

    public DefaultBusiness(Service1 s1, Service2 s2, Service3 s3)
    {
      this.s1 = s1;
      this.s2 = s2;
      this.s3 = s3;
    }

    public int GetS1Value()
    {
      return this.s1.GetValue();
    }

    public int GetS2Value()
    {
      return this.s2.GetValue();
    }

    public int GetS3Value()
    {
      return this.s3.GetValue();
    }
  }
}
