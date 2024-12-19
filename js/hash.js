var CryptoJS = require('crypto-js')
// 定义密钥和消息
var secretKey = '2e759aacb3d69c1296e119d885ef97c4&';
var message = 'O7w4RavfTzKZlk1TlMydpXwVQlJVkTUY{"gxztDm":"0","fpbbDm":"-1","kprqQ":"2024-12-01","kprqZ":"2024-12-09","fpztDm":["0","7"],"fplxDm":["81","82","85","86","03","01","04","08","10","61","51","83","87","14","8208"],"xfsbh":"","xfmc":"","qdfphm":"","fpdm":"","fphm":"","fxdjDm":["01","02","03"],"ywlx":["16","12","99"],"ycfpbsDm":["00","03","04","08","09","02","99"],"znxbz":"N","znxzmbh":"","gxrqQ":"","gxrqZ":"","gfsbhArr":[],"bddkjtsbz":"","pageNumber":1,"pageSize":20}';

function HmacSHA1_encrypt(data, key) {
    // 使用 HMAC-SHA1 算法生成摘要
    var hash = CryptoJS.HmacSHA1(data, key);

    // 将摘要转换为 Base64 编码的字符串
    var hashInBase64 = hash.toString(CryptoJS.enc.Base64);
    return hashInBase64
}

function md5Encrypt(data) {
    var md5 = crypto.createHash('md5');
    var result = md5.update(data).digest('hex');
    return result
}


function sha1Encrypt(data) {
    var sha1 = crypto.createHash('sha1');
    var result = sha1.update(data).digest('hex');
    return result
}




console.log(HmacSHA1_encrypt(message, secretKey))