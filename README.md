# @neworbit/stylelint-config

NewOrbit standard config for stylelint

## Usage
### Installation

 > Ensure you have set up npm to [assocaite @neworbit packages with myget](https://github.com/NewOrbit/development-guidelines/blob/master/how-to/npm/associate-%40neworbit-packages-with-myget.md)

`npm install @neworbit/stylelint-config --save-dev`

### Setup

 - Install peer dependencies
 `npm install stylelint stylelint-scss stylelint-order --save-dev`
 - Add `.stylelintrc.json` file with the following contents:

 ```json
{
    "extends": "@neworbit/stylelint-config"
}
 ```

 - Add an npm script to run linter

 ```json
     "lint:sass": "stylelint \"**/*.scss\""
 ```

### Integrate with webpack

You may want to integrate with webpack so that you get linting warnings on build.  You may also want to consider failing on production build so linting errors block a pull request.

`npm install stylelint-webpack-plugin --save-dev`

```js
const StyleLintPlugin = require('stylelint-webpack-plugin');

const config = { /* webpack config */ };

let styleLintOptions = {
    files: "**/*.scss"
};

if (process.env.NODE_ENV === "production") {
    styleLintOptions.failOnError = true;
}

config.plugins.push(new StyleLintPlugin(styleLintOptions));

```

## Publishing a new version

 > Ensure you have set up npm to [assocaite @neworbit packages with myget](https://github.com/NewOrbit/development-guidelines/blob/master/how-to/npm/associate-%40neworbit-packages-with-myget.md)

 - Update version in `package.json`
 - Run `npm publish`