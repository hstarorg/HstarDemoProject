using System;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Generators;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.X509;
using RSA加解密CSharpJava互调用.Common;

namespace RSA加解密CSharpJava互调用
{
    class Program
    {
        static void Main(string[] args)
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
            Console.ReadKey();

            Console.WriteLine("测试私钥加密，公钥解密>>>>>>>>>>>>>>>");
            Console.WriteLine("请输入要加密的字符串：");
            text = Console.ReadLine();
            encryptedStr = rsaHelper.EncryptByPrivateKey(text, keys.Item2);
            Console.WriteLine("私钥加密后密文是：{0}{1}", encryptedStr, Environment.NewLine);
            source = rsaHelper.DecryptByPublibKey(encryptedStr, keys.Item1);
            Console.WriteLine("通过公钥解密后的原文是：{0}", source);

            Console.ReadKey();
        }
    }
}
