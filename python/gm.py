#!/usr/bin/env python
# -*- coding:utf-8 -*-
from gmssl import sm4, func

def encryptSM4(data, encrypt_key):
    """
    国密sm4加密
    :param encrypt_key: sm4加密key(十六进制字符)
    :param value: 待加密的字符串
    :return: sm4加密后的十六进制字符
    """
    gmsm4 = sm4.CryptSM4()
    key_bytes = bytes.fromhex(encrypt_key)
    gmsm4.set_key(key_bytes, sm4.SM4_ENCRYPT)  # 设置密钥，将十六进制字符Key转为十六进制字节
    data = data.encode() if isinstance(data, str) else data
    encrypt_value = gmsm4.crypt_ecb(data)  # ecb模式开始加密，encode():普通字符转为字节
    return encrypt_value.hex()  # 返回十六进制字符

def decryptSM4(data, decrypt_key):
    """
    国密sm4解密
    :param decrypt_key:sm4加密key(十六进制字符)
    :param encrypt_value: 待解密的十六进制字符
    :return: 原字符串
    """
    gmsm4 = sm4.CryptSM4()
    gmsm4.set_key(bytes.fromhex(decrypt_key), sm4.SM4_DECRYPT)  # 设置密钥，将十六进制字符Key转为十六进制字节
    decrypt_value = gmsm4.crypt_ecb(bytes.fromhex(data))  # ecb模式开始解密。bytes.fromhex():十六进制字符转为十六进制字节
    return decrypt_value.decode()


if __name__ == '__main__':
    key = "D3CD18A35052492AA729A0D40AFEEBF4"    # 密钥
    strData = "123456789"   # 明文
    print("原字符", strData)
    encData = encryptSM4(strData, key)  # 加密后的数据
    print("sm4加密结果", encData)

    decData = decryptSM4(encData, key)
    print("sm4解密结果", decData)  # 解密后的数据
    
