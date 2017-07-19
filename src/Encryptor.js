const tar = require('tar-fs')
const crypto = require('crypto')
const fs = require('fs')

export default class Encryptor {
    constructor() {
        this.key = 'AndrésMontoya'
        this.encrypt = crypto.createCipher('aes-256-ctr', this.key)
        this.decrypt = crypto.createDecipher('aes-256-ctr', this.key)
    }
    Encrypt() {
        tar.pack(`${__dirname}/files`).pipe(this.encrypt).pipe(fs.createWriteStream('files.tar'))
    }
    Decrypt() {
        fs.createReadStream('files.tar').pipe(this.decrypt).pipe(tar.extract('./nice'))
    }
}