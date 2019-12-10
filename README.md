stylelint-config-vtech
======================

The stylelint config used for front-end projects at V-Technologies.

Setup
-----

Install the package:

```sh
npm install --save-dev stylelint stylelint-config-vtech
```

Configure stylelint by adding `.stylelintrc` at the root of your project:

```json
{
    "extends": "stylelint-config-vtech"
}
```


Use with webpack

```sh
npm install --save-dev stylelint-webpack-plugin
```

Then add in your webpack.config.js

```js
const StylelintPlugin = require('stylelint-webpack-plugin');

plugins: [
    new StylelintPlugin()
]
```
