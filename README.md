# neworbit-stylelint-config

NewOrbit standard config for stylelint

## Usage
### Installation

`npm install neworbit-stylelint-config --save-dev`

### Setup

 - Install peer dependencies
 `npm install stylelint stylelint-scss stylelint-order stylelint-no-unsupported-browser-features --save-dev`
 - Add `.stylelintrc.json` file with the following contents:

 ```json
{
    "extends": "neworbit-stylelint-config"
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

## Visual Studio Code
To make life better in Visual Studio Code when using stylelint install:
[VSCode Stylelint Plugin](https://github.com/shinnn/vscode-stylelint)

## License

Made with :sparkling_heart: by [NewOrbit](https://www.neworbit.co.uk/) in Oxfordshire, and licensed under the [MIT License](LICENSE)
