using System;
using System.Text;
using Org.BouncyCastle.Asn1;
using Org.BouncyCastle.Asn1.X509;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Engines;
using Org.BouncyCastle.Crypto.Generators;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Math;
using Org.BouncyCastle.Pkcs;
using Org.BouncyCastle.Security;
using Org.BouncyCastle.X509;

namespace RSA加解密CSharpJava互调用.Common
{
    public class RsaHelper
    {
        /// <summary>
        /// 生成公钥和私钥（Item1 = 公钥，Item2 = 私钥）
        /// </summary>
        /// <returns></returns>
        public Tuple<string, string> GenerateRsaKeys()
        {
            var rsaKeyPairGenerator = new RsaKeyPairGenerator();
            var rsaKeyGenerationParameters = new RsaKeyGenerationParameters(BigInteger.ValueOf(3), new SecureRandom(), 1028, 25);
            rsaKeyPairGenerator.Init(rsaKeyGenerationParameters);
            var keyPair = rsaKeyPairGenerator.GenerateKeyPair();
            var publicKey = keyPair.Public;//公钥  
            var privateKey = keyPair.Private;//私钥  

            var subjectPublicKeyInfo = SubjectPublicKeyInfoFactory.CreateSubjectPublicKeyInfo(publicKey);
            var privateKeyInfo = PrivateKeyInfoFactory.CreatePrivateKeyInfo(privateKey);
            var asn1ObjectPublic = subjectPublicKeyInfo.ToAsn1Object();
            byte[] publicInfoByte = asn1ObjectPublic.GetEncoded();
            var asn1ObjectPrivate = privateKeyInfo.ToAsn1Object();
            byte[] privateInfoByte = asn1ObjectPrivate.GetEncoded();

            //这里可以将密钥对保存到本地
            return new Tuple<string, string>(Convert.ToBase64String(publicInfoByte), Convert.ToBase64String(privateInfoByte));
        }

        #region 私钥加密，公钥解密

        /// <summary>
        /// 私钥加密（必须用公钥解密）
        /// </summary>
        /// <param name="source">要加密的字符串（原文）</param>
        /// <param name="privateKey">私钥</param>
        /// <returns></returns>
        public string EncryptByPrivateKey(string source, string privateKey)
        {
            var privateInfoByte = Convert.FromBase64String(privateKey);
            AsymmetricKeyParameter priKey = PrivateKeyFactory.CreateKey(privateInfoByte);
            IAsymmetricBlockCipher cipher = new RsaEngine();
            cipher.Init(true, priKey);
            byte[] sourceData = Encoding.UTF8.GetBytes(source);
            sourceData = cipher.ProcessBlock(sourceData, 0, sourceData.Length);
            return Convert.ToBase64String(sourceData);
        }

        /// <summary>
        /// 公钥解密（key公钥解密）- 必须对应私钥加密
        /// </summary>
        /// <param name="source">加密后的数据（密文）</param>
        /// <param name="publicKey">公钥</param>
        /// <returns></returns>
        public string DecryptByPublibKey(string source, string publicKey)
        {
            var publicInfoByte = Convert.FromBase64String(publicKey);
            Asn1Object pubKeyObj = Asn1Object.FromByteArray(publicInfoByte);//这里也可以从流中读取，从本地导入  
            AsymmetricKeyParameter pubKey = PublicKeyFactory.CreateKey(SubjectPublicKeyInfo.GetInstance(pubKeyObj));
            //开始解密
            IAsymmetricBlockCipher cipher = new RsaEngine();
            cipher.Init(false, pubKey);
            //解密已加密的数据
            byte[] encryptedData = Convert.FromBase64String(source);
            encryptedData = cipher.ProcessBlock(encryptedData, 0, encryptedData.Length);
            return Encoding.UTF8.GetString(encryptedData, 0, encryptedData.Length);
        }

        #endregion

        #region 公钥加密，私钥解密

        /// <summary>
        /// 公钥加密 （需私钥解密）
        /// </summary>
        /// <param name="source">要加密的文本</param>
        /// <param name="publicKey">公钥</param>
        /// <returns></returns>
        public string EncryptByPublicKey(string source, string publicKey)
        {
            var publicInfoByte = Convert.FromBase64String(publicKey);
            Asn1Object pubKeyObj = Asn1Object.FromByteArray(publicInfoByte);//这里也可以从流中读取，从本地导入  
            AsymmetricKeyParameter pubKey = PublicKeyFactory.CreateKey(SubjectPublicKeyInfo.GetInstance(pubKeyObj));
            IAsymmetricBlockCipher cipher = new RsaEngine();
            cipher.Init(true, pubKey);//true表示加密  
            byte[] encryptData = Encoding.UTF8.GetBytes(source);
            encryptData = cipher.ProcessBlock(encryptData, 0, encryptData.Length);
            return Convert.ToBase64String(encryptData);
        }

        /// <summary>
        /// 私钥解密（需公钥加密）
        /// </summary>
        /// <param name="source">加密后的文本（密文）</param>
        /// <param name="privateKey">私钥</param>
        /// <returns></returns>
        public string DecryptByPrivateKey(string source, string privateKey)
        {
            var privateInfoByte = Convert.FromBase64String(privateKey);
            AsymmetricKeyParameter priKey = PrivateKeyFactory.CreateKey(privateInfoByte);
            IAsymmetricBlockCipher cipher = new RsaEngine();
            cipher.Init(false, priKey);//false表示解密 
            //解密数据
            var encryptData = Convert.FromBase64String(source);
            var decryptData = cipher.ProcessBlock(encryptData, 0, encryptData.Length);
            return Encoding.UTF8.GetString(decryptData);
        }

        #endregion
    }
}
