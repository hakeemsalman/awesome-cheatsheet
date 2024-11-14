# React chrome extension

> > I learned this tutorial from this [playlist](https://youtube.com/playlist?list=PLBS1L3Ug2VVods9GnWbJc__STt9VnrJ9Z&si=2WiLdq1GYvUvB_u-) 

1. Create a `manifest.json` file and copy and paste this code.
   1. ```json
      {
        "manifest_version": 3,                    // REQUIRED
        "name": "Hello Extensions",               // REQUIRED
        "description": "Base Level Extension",    
        "version": "1.0",                         // REQUIRED
        "icons": {
          "16": "assets/icon-16.png",   // Favicon on the extension's pages and context menu.
          "32": "assets/icon-32.png",   // Windows computers often require this size.
          "48": "assets/icon-48.png",   // Displays on the Extensions page.
          "128": "assets/icon-128.png"  // Displays on installation and in the Chrome Web Store.
        }
      }
      ```
2. Type these commands in the *root* folder for installation:
   1.  **dependencies**: `react`, `react-dom`, `typescript`, `ts-loader`
   2.  **devDependencies**: `webpack`, `webpack-clie`
   3. ```bash
      npm init -y
      npm i react react-dom typescript ts-loader --save
      npm i webpack webpack-cli --save-dev
      ```
3. Create a [`webpack.config.js`](https://webpack.js.org/concepts) file in the *root* folder.
   1. ```js
      module.exports = {
        mode: "development",    // <---By setting the mode parameter to either development, production or none, you can enable webpack's built-in optimizations that correspond to each environment. The default value is production.
        entry: "/src/test.tsx", // <-- An entry point indicates which module webpack should use to begin building out its internal 
        module: {               // <-- Loaders(module) allow webpack to process other types of files and convert them into valid modules that can be consumed by your application.

        },
        output: {     // <-- The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to ./dist/main.js
          filename: "index.js"
        }
      }
      ```
4. Create `src/test.tsx` in the *root* folder and write the just `Hello world` code in it.
   1. ```js
      import React from 'react'

      const test = <h1>Hello World</h1>
      ```
5. Now update the `webpack.config.js` with the code.
   1. ```js
      module.exports = {
        mode: "development",  
        entry: "/src/test.tsx",   
        module: {  
          rules: [
            {
              use: "ts-loader",
              test: /\.tsx$/,
              exclude: /node_modules/,
            }
          ]
        },
        resolve: {
          extensions: ['.tsx', '.ts', '.js']
        },
        output: { 
          filename: "index.js"
        }
      }
      ```
   2. Here `rules` says that, everything `*.tsx` files have to compile excluding `node_modules` using `ts-loader`.
      1. At a high level, **loaders** have two properties in your webpack configuration:
         1. The `test` property identifies which file or files should be transformed.
         2. The `use` property indicates which loader should be used to do the transforming.
   3. `resolve` : Attempt to resolve these extensions in order. If multiple files share the same name but have different extensions, webpack will resolve the one with the extension listed first in the array and skip the rest.
6. Create `tsconfig.json` file and paste the below code.
   1. ```json
      {
        "compilerOptions": {
            "jsx": "react",
            "module": "es6",
            "target": "es6",
            "moduleResolution": "node",
            "esModuleInterop": true,
        },
        "include": ["src/**/*.ts", "src/**/*.tsx"],
        "exclude": ["node_modules", "build"],
      }
      ```
## So upto this, it's create a `dist/index.js` file from the `tsx` file in `dist` folder
----

# Watch webpack

1. Now modify the `package.json` for auto updates files using webpack.
   1. ```json
      {
        "name": "tubemellow",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
          "watch": "webpack --watch --progress --config webpack.config.js"
        },
        "author": "Hakeem Salman",
        "license": "ISC",
        "dependencies": {
          "react": "^18.3.1",
          "react-dom": "^18.3.1",
          "ts-loader": "^9.5.1",
          "typescript": "^5.6.3"
        },
        "devDependencies": {
          "webpack": "^5.96.1",
          "webpack-cli": "^5.1.4"
        }
      }
      ``` 
2. Now move our `manifest.json` from `/` into `/src/` folder.
3. Here we can't track out **manifest** file into `dist` folder, so we have to use `copy-webpack-plugin`
   1. ```bash
      npm i copy-webpack-plugin -D
      ```
4. Import `copy-webpack-plugin` and `path` modules into `webpack.config.js` file
   1. ```js
      import path from "path"
      import CopyPlugin from "copy-webpack-plugin"
      // module.exports = {
      //...
      ```
5. Add plugins code from the below. Please go for [CopyPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/#getting-started) for more information
   1. ```js
      //....
      entry: "",
      plugins: [
        new CopyPlugin({
          patterns: [
            { from: path.resolve('src/manifest.json'), to: path.resolve('dist/') },
          ],
        }),
      ],
      // ...
      ```
6. Now copy the images into **dist** folder using same above *copy* method.
   1. ```js
      // ...
          patterns: [
            { from: path.resolve('src/manifest.json'), to: path.resolve('dist/') },
            { from: path.resolve('src/assets/icon-16.png'), to: path.resolve('dist/assets/') },
          ],
      // ...


# Action

1. Now add [`action`](https://developer.chrome.com/docs/extensions/reference/api/action#manifest) property from the below code in `manifest.json`. 
2. [Action](https://developer.chrome.com/docs/extensions/reference/api/action#manifest): action api uses only `.html` file for UI, but `react` is in `.js`.
   1. So we use [`HtmlWebpackPlugin`](https://webpack.js.org/plugins/html-webpack-plugin/#basic-usage), it compiles the `.js` into `.html` file.

```json
{
  "manifest_version": 3,
  "name" : "Hello",
  "description": "",
  "version": "0.0.1",
  "action":{
    "default_title" : "Hello",
    "default_popup": "popup.html"
  }
  //...
}
```

3. Install the HtmlWebpackPlugin
   1. ```bash
      npm install --save-dev html-webpack-plugin
      ```
4. Now **rename** and **move** the `test.tsx` file into the `src/popup/popup.tsx` folder
5. Paste the below code in `webpack.config.js`
   1. ```js
      const HtmlWebpackPlugin = require('html-webpack-plugin');
      // ...

      entry: { // convert into object and a popup property and it's url
        popup: path.resolve('src/popup/popup.tsx'),
      }

      // ...
      plugins: [
        new HtmlWebpackPlugin({
          title: "Tube Mellow",
          filename: 'popup.html'   // just write the filename no need write to dist
        })
      ],
      ```

## Now add dist folder into the chrome extension for testing purpose.

---


