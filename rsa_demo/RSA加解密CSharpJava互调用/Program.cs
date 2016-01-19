using RSA加解密CSharpJava互调用.Common;
using System;

namespace RSA加解密CSharpJava互调用
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            var rsaHelper = new RsaHelper();
            var keys = rsaHelper.GenerateRsaKeys();

            Console.WriteLine("测试公钥加密，私钥解密>>>>>>>>>>>>>>>");
            Console.WriteLine("请输入要加密的字符串：");
            var text = Console.ReadLine();
            var encryptedStr = rsaHelper.EncryptByPublicKey(text, keys.Item1);
            Console.WriteLine("公钥加密后密文是：{0}{1}", encryptedStr, Environment.NewLine);
            var source = rsaHelper.DecryptByPrivateKey(encryptedStr, keys.Item2);
            Console.WriteLine("通过私钥解密后的原文是：{0}", source);

            Console.WriteLine("{0}{1}", Environment.NewLine, Environment.NewLine);

            Console.WriteLine("测试私钥加密，公钥解密>>>>>>>>>>>>>>>");
            Console.WriteLine("请输入要加密的字符串：");
            text = Console.ReadLine();
            encryptedStr = rsaHelper.EncryptByPrivateKey(text, keys.Item2);
            Console.WriteLine("私钥加密后密文是：{0}{1}", encryptedStr, Environment.NewLine);
            source = rsaHelper.DecryptByPublibKey(encryptedStr, keys.Item1);
            Console.WriteLine("通过公钥解密后的原文是：{0}", source);

            Console.WriteLine("{0}{1}", Environment.NewLine, Environment.NewLine);

            //测试公钥解密指定的ssh RSA
            Console.WriteLine("测试公钥解密（针对SSH生成的RSA密钥）>>>>>>>>>>>>>>>");
            source = @"i0s9lv0QuefmmXWkWxqIwJMcK1/uOjTTIpc0K2YWAwFGuMSbQ651Zfl4i7MY/Qi/vG8+J7SRyb3UWiS5CNP3M3MI2tC6l2CVAGv0godSMaeWbMqj9g17KwJr9r3EYtPvc8lRi8ec3qS8plkoPUCoz3PtsK LZ9hBlAXKD3f8qGDI=";
            var pubKey = @"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCxtkuwBI6novN6IKoP3AUe7vQnT +3NqYy0SJqGTf4u5sWuKj6jwpvBSf17DoBGAXPVfzQjtl3xNymn/87c7qzDzollBH1dXAdg5olwp0tAUVEWDKuCgaFGjsqnrTYxTvOqTf1J08mIQf3Tngkw1WuNBdADUiBsTlgpO9k+ffIL4wIDAQAB";
            var result = rsaHelper.DecryptByPublicKeyOnly(source, pubKey);
            Console.WriteLine(result);

            Console.ReadKey();
        }
    }
}