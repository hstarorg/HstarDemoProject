using System.Security.Cryptography;
using System.Text;

namespace RSA私钥加密公钥解密.Common
{
    public class RsaHelper
    {
        #region 私有函数
        private string EncryptString(string source, BigInteger d, BigInteger n)
        {
            int len = source.Length;
            int len1 = 0;
            if ((len % 128) == 0)
                len1 = len / 128;
            else
                len1 = len / 128 + 1;
            string temp = "";
            for (int i = 0; i < len1; i++)
            {
                var blockLen = 0;
                blockLen = len >= 128 ? 128 : len;
                var block = source.Substring(i * 128, blockLen);
                byte[] oText = Encoding.Default.GetBytes(block);
                var biText = new BigInteger(oText);
                var biEnText = biText.modPow(d, n);
                string temp1 = biEnText.ToHexString();
                temp += temp1;
                len -= blockLen;
            }
            return temp;
        }

        private string DecryptString(string source, BigInteger e, BigInteger n)
        {
            int len = source.Length;
            int len1 = 0;
            if ((len % 256) == 0)
                len1 = len / 256;
            else
                len1 = len / 256 + 1;
            string temp = "";
            for (int i = 0; i < len1; i++)
            {
                var blockLen = 0;
                blockLen = len >= 256 ? 256 : len;
                var block = source.Substring(i * 256, blockLen);
                var biText = new BigInteger(block, 16);
                var biEnText = biText.modPow(e, n);
                string temp1 = System.Text.Encoding.Default.GetString(biEnText.getBytes());
                temp += temp1;
                len -= blockLen;
            }
            return temp;
        }

        #endregion

        /// <summary>
        /// 私钥加密（加密过程,其中biD、biN是RSACryptoServiceProvider生成的D、Modulus ）
        /// </summary>
        /// <param name="source">要加密的字符串</param>
        /// <param name="privateKey">私钥</param>
        /// <returns></returns>
        public string Encrypt(string source, string privateKey)
        {
            var rsa = new RSACryptoServiceProvider();
            rsa.FromXmlString(privateKey);
            var rsaParameters = rsa.ExportParameters(true);
            var biN = new BigInteger(rsaParameters.Modulus);
            var biD = new BigInteger(rsaParameters.D);
            return EncryptString(source, biD, biN);
        }

        /// <summary>
        ///   解密过程,其中biE、biN是RSACryptoServiceProvider生成的Exponent、Modulus 
        /// </summary>
        /// <param name="source">加密后的字符串（密文）</param>
        /// <param name="publicKey">公钥</param>
        /// <returns></returns>
        public string Decrypt(string source, string publicKey)
        {
            var rsa = new RSACryptoServiceProvider();
            rsa.FromXmlString(publicKey);
            var rsaParameters = rsa.ExportParameters(false);
            var biN = new BigInteger(rsaParameters.Modulus);
            var biE = new BigInteger(rsaParameters.Exponent);
            return DecryptString(source, biE, biN);
        }
    }
}
