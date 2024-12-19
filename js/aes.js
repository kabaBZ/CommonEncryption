var CryptoJS = require('crypto-js')

function decryptAES(data, key) {
    key = CryptoJS.enc.Utf8.parse(key);
    iv = CryptoJS.enc.Utf8.parse("0123456789ABCDEF");  // 偏移量默认值
    end = CryptoJS.AES.decrypt(decodeURIComponent(data), key, {
        'iv': iv,
        'mode': CryptoJS.mode.CBC,
        'padding': CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return end
}

function encryptAES(data, key) {
    key = CryptoJS.enc.Utf8.parse(key);
    z = CryptoJS.enc.Utf8.parse("0123456789ABCDEF");  // 偏移量默认值
    end = CryptoJS.AES.encrypt(decodeURIComponent(data), key, {
        'iv': z,
        'mode': CryptoJS.mode.ECB,
        'padding': CryptoJS.pad.Pkcs7
    }).toString();
    return end
}

enc_data = 'O7w4RavfTzKZlk1TlMydpXwVQlJVkTUY{"gxztDm":"0","fpbbDm":"-1","kprqQ":"2024-12-01","kprqZ":"2024-12-09","fpztDm":["0","7"],"fplxDm":["81","82","85","86","03","01","04","08","10","61","51","83","87","14","8208"],"xfsbh":"","xfmc":"","qdfphm":"","fpdm":"","fphm":"","fxdjDm":["01","02","03"],"ywlx":["16","12","99"],"ycfpbsDm":["00","03","04","08","09","02","99"],"znxbz":"N","znxzmbh":"","gxrqQ":"","gxrqZ":"","gfsbhArr":[],"bddkjtsbz":"","pageNumber":1,"pageSize":20}'
key = '2e759aacb3d69c1296e119d885ef97c4'
// raw_data = 'W.10001.c#saf-captcha-waf#19x5u7lo'

console.log(encryptAES(enc_data, key))

