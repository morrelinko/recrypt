'use strict';

let fs = require('fs');
let NodeRsa = require('node-rsa');
let base64 = require('base64url');

function ReCrypt(opts) {
  opts = Object.assign({
    privateKey: null,
    publicKey: null
  }, opts);

  this.privateKey = null;
  this.publicKey = null;

  if (opts.privateKey) {
    this.setPrivateKey(opts.privateKey.path);
  }

  if (opts.publicKey) {
    this.setPublicKey(opts.publicKey.path);
  }
}

/**
 *
 * @param path
 */
ReCrypt.prototype.setPublicKey = function (path) {
  this.publicKey = {path};
};

/**
 *
 * @param path
 */
ReCrypt.prototype.setPrivateKey = function (path) {
  this.privateKey = {path};
};

/**
 *
 * @param unencrypted
 * @returns {Promise}
 */
ReCrypt.prototype.encrypt = function (unencrypted) {
  return new Promise((resolve, reject) => {
    fs.readFile(this.privateKey.path, function (err, keyData) {
      if (err) {
        return reject(err);
      }

      try {
        let key = new NodeRsa(keyData);
        resolve(base64.encode(key.encrypt(unencrypted, 'base64')));
      } catch (e) {
        reject(e);
      }
    });
  });
};

/**
 *
 * @param encrypted
 * @returns {Promise}
 */
ReCrypt.prototype.decrypt = function (encrypted) {
  return new Promise((resolve, reject) => {
    fs.readFile(this.privateKey.path, function (err, keyData) {
      if (err) {
        return reject(err);
      }

      try {
        let key = new NodeRsa(keyData);
        resolve(key.decrypt(base64.decode(encrypted)));
      } catch (e) {
        reject(e);
      }
    });
  });
};

module.exports = ReCrypt;
