using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServicelifttimeDemo.Services
{
  public class Service3
  {
    private int value = 0;

    public int GetValue()
    {
      this.value++;
      return this.value;
    }
  }
}
