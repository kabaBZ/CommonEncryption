import hashlib
import hmac

def md5Encrypt(data):
    # 创建md5对象
    md5_hash = hashlib.md5()
    # 更新哈希对象，这里可以多次调用update()
    md5_hash.update(data.encode('utf-8'))
    # 获取16进制格式的哈希值
    hex_dig = md5_hash.hexdigest()
    return hex_dig

def sha1Encrypt(data):
    # 创建sha1对象
    sha1_hash = hashlib.sha1()
    # 更新哈希对象，这里可以多次调用update()
    sha1_hash.update(data.encode('utf-8'))
    # 获取16进制格式的哈希值
    hex_dig = sha1_hash.hexdigest()
    return hex_dig

def Hmacsha1Encrypt(data, key):
    # 创建hmac对象，这里使用的是sha1算法
    hmacsha1 = hmac.new(key, data.encode('utf-8'), hashlib.sha1)
    # 获取16进制格式的HMAC值
    hex_digest = hmacsha1.hexdigest()
    return hex_digest
