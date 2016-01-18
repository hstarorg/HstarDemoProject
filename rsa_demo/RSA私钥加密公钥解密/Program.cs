using System;
using System.Text;
using RSA私钥加密公钥解密.Common;

namespace RSA私钥加密公钥解密
{
    class Program
    {
       private readonly static RsaHelper RsaHelper = new RsaHelper();
        static void Main(string[] args)
        {
            //私钥
            var privateKey = @"<RSAKeyValue><Modulus>2l3VY7cAyC6V/nI/5/ysy/vays9y4EumCRDF6+0u7px5Er10n05JAaWJB4f1dPzzSjZfLFENj8cnYHkR0+3EWOZzhegWgvL9ADDuTX0mqFTUnZnEzfPOAy65mpFf9VDkPu62jjA0gsrcjWxlvZTgwnglIEjefuPnM3pCu1pJMFc=</Modulus><Exponent>AQAB</Exponent><P>/gNvoe30rY5/T6YChUyj+eV5kIjfwMZoYPDrxsG9WVk5qYXCXA19dOF13qlfEdUflIz0aFI+jU0Tc+qNqKFOTw==</P><Q>3BMHQa/ulOZ2OQy4r7waGPlyCdQWVX8CKdu7oEeDY4SKXBoX7bYD5/mKrDbwKxZ7AIB4woTyZKJYfSejdgvDeQ==</Q><DP>mVxZudqBL4gpNV11iCWNmwMBMlJxRWKFAoJy172BJMDKH5+yiQFcDYVSNOztiUazmmy/43xEZ+txIzsp6/X34Q==</DP><DQ>JVgxRgtFsAy/iQTInkGMKCrEGDjeJVntEw9Pcm5QNGX8WI6w+syFMyscRgb4kEc7TiV+2HtY6ozF+U7tpQ1v+Q==</DQ><InverseQ>8XZBDYGcQQ3z84Da0o7+cUWIieCA+GFDB7hpH8PW8UGbOmFrLxkC+WKkZEjlvLR5EDggkKfSoQ1v0oWlN7N/bQ==</InverseQ><D>    BR3lGH9lnaCMfo2Ey9XS4rtrEWIyXz5xNzh/usXbBK0BSpwf4HUVfDFkeEW0+GHOUvMv4GT3JrhURuFvYSzqyIi59tZ0USGc08saDOpzBlXiAPgVdyxyEp7nYtH00tRpISDXGa4RAHyTErmyG7d56iOwdCUEUiI/sRruL+myVdE=</D></RSAKeyValue>";
            //公钥
            var publicKey = @"<RSAKeyValue><Modulus>sbZLsASOp6LzeiCqD9wFHu70J0/tzamMtEiahk3+LubFrio+o8KbwUn9ew6ARgFz1X80I7Zd8Tcpp//O3O6sw86JZQR9XVwHYOaJcKdLQFFRFgyrgoGhRo7Kp602MU7zqk39SdPJiEH9054JMNVrjQXQA1IgbE5YKTvZPn3yC+M=</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>";
            Console.WriteLine("请输入要加密的字符串：");
            var sourceText = Console.ReadLine();
           // var cipherText = RsaHelper.Encrypt(sourceText, privateKey);
            var cipherText = "Ss5X3eGlimQ5ZIPSYo1wNQQ2gUIkLnM+OrFcpf0+Pa+f7xshGdTQtjNPWvKuu6bkteaBuHEPVjHe9hKi5/7RTS2+9UCqxJrcw4xX3TNDaDqa9DjRhOqdL72Scgc+iASCwC7YEBtDEm2YieIOVCur5UItUB4IwFNIsdCSO/v4Las=";
            cipherText = Encoding.ASCII.GetString(Convert.FromBase64String(cipherText));
            Console.WriteLine("加密后的字符串是：{0}", cipherText);
            Console.WriteLine(Environment.NewLine);
            Console.WriteLine("解密之后的字符串是：{0}", RsaHelper.Decrypt(cipherText, publicKey));
            Console.ReadKey();
        }
    }
}
