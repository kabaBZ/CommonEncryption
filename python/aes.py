from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad


def encryptAES(data, key):
    key = key.encode('utf-8') if isinstance(key, str) else key
    data = data.encode('utf-8') if isinstance(data, str) else data
    # AES.MODE_ECB 表示模式是ECB模式
    #创建一个aes对象
    aes = AES.new(
        key, 
        AES.MODE_ECB,
        iv=b'0123456789ABCDEF'
    )
    en_text = aes.encrypt(pad(data, AES.block_size)) #加密明文
    return en_text.decode()

def decryptAES(en_text, key):
    key = key.encode('utf-8') if isinstance(key, str) else key
    data = data.encode('utf-8') if isinstance(data, str) else data
    # AES.MODE_ECB 表示模式是ECB模式
    #创建一个aes对象
    aes = AES.new(
        key, 
        AES.MODE_ECB,
        iv=b'0123456789ABCDEF'
    ) 
    den_text = unpad(aes.decrypt(en_text), AES.block_size) # 解密密文
    return den_text.decode()
