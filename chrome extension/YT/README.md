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
          "16": "images/icon-16.png",   // Favicon on the extension's pages and context menu.
          "32": "images/icon-32.png",   // Windows computers often require this size.
          "48": "images/icon-48.png",   // Displays on the Extensions page.
          "128": "images/icon-128.png"  // Displays on installation and in the Chrome Web Store.
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
      
      ``` 


