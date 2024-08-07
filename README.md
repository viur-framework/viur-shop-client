<div align="center">
    <h1>ViUR Shop JS Client (WIP)</h1>
    <a href="https://www.npmjs.com/package/@viur/viur-shop-client">
        <img alt="Badge showing current NPM version" title="PyPI" src="https://img.shields.io/npm/v/@viur/viur-shop-client">
    </a>
    <a href="LICENSE">
        <img src="https://img.shields.io/github/license/viur-framework/viur-shop-client" alt="Badge displaying the license" title="License badge">
    </a>
    <br>
    On the way to becoming a JS Client for the <a href="https://www.viur.dev">ViUR</a> <a href="https://github.com/viur-framework/viur-shop">shop backend plugin</a>.
</div>

## Usage

```javascript
// Client use

const sc = new ViURShopClient();

sc.cart_list()
    .then(payload => {
        for (let root_node of payload) {
            console.debug(root_node);
            // [...]
        }
    });
```


## Installation
Download node at [nodejs.org](https://nodejs.org) and install it, if you haven't already.

```sh
npm install @viur/viur-shop-client --save
```

This package is provided in these module formats:

- CommonJS



## Documentation

You can find documentation currently only in the code (WIP).
We're following [JSDoc](https://jsdoc.app/).


## License
[MIT](LICENSE)
