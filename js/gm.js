const sm2 = require('sm-crypto').sm2;
const sm3 = require('sm-crypto').sm3;
const sm4 = require('sm-crypto').sm4;

function sm4Encrypt(info, key, options={}) {
    var result = sm4.encrypt(
        info, key, options
    )
    return result
}


key = "D3CD18A35052492AA729A0D40AFEEBF4"

strData = "123456789"

console.log(sm4Encrypt(strData, key))