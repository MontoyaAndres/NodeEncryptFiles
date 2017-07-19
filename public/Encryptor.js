'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tar = require('tar-fs');
var crypto = require('crypto');
var fs = require('fs');

var Encryptor = function () {
    function Encryptor() {
        _classCallCheck(this, Encryptor);

        this.key = 'AndrésMontoya';
        this.encrypt = crypto.createCipher('aes-256-ctr', this.key);
        this.decrypt = crypto.createDecipher('aes-256-ctr', this.key);
    }

    _createClass(Encryptor, [{
        key: 'Encrypt',
        value: function Encrypt() {
            tar.pack(__dirname + '/files').pipe(this.encrypt).pipe(fs.createWriteStream('files.tar'));
        }
    }, {
        key: 'Decrypt',
        value: function Decrypt() {
            fs.createReadStream('files.tar').pipe(this.decrypt).pipe(tar.extract('./nice'));
        }
    }]);

    return Encryptor;
}();

exports.default = Encryptor;