# SoftXCrypt

## Usage

```js
let crypt = new Crypt();
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
