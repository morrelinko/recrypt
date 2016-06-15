# ReCrypt

## Usage

```js
let ReCrypt = require('recrypt');
let crypt = new ReCrypt();

crypt.setPrivateKey({
    path: /path/to/private.pem
});

let encrypted = crypt.encrypt('somedata');
let unencrypted = crypt.decrypt(encrypted);
```

## API

#### crypt.setPrivateKey(path)
 
Sets private key details

#### crypt.setPublicKey(opt}

Sets public key details

#### crypt.encrypt(data)

Encryption

#### crypt.decrypt(data)

Decryption
