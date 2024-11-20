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


# Chunks and devtools

- Chunk is used to copy the name of specified file name in `HtmlWebpackPlugin`.
```js
module.exports = {
  mode: "development",  
  entry: {
    popup: path.resolve('src/popup/popup.tsx')
  },
  module: {  
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve('src/manifest.json'), to: path.resolve('dist/') },
        { from: path.resolve('src/assets/icon-16.png'), to: path.resolve('dist/assets/') },
        { from: path.resolve('src/assets/icon-32.png'), to: path.resolve('dist/assets/') },
        { from: path.resolve('src/assets/icon-48.png'), to: path.resolve('dist/assets/') },
        { from: path.resolve('src/assets/icon-128.png'), to: path.resolve('dist/assets/') },
      ],
    }),
    new HtmlWebpackPlugin({
      title: "Tube Mellow",
      filename: 'popup.html',
      chunks: ['popup']  // add chunk property and then popup value in the array
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: { 
    filename: '[name].js' // rename the index.js to [name].js
  }
}
```

### You see an error in extension of Uncaught EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' ....

- To solve this issue, we have to use `devtool` property with value `cheap-module-source-map` in `webpack.config.js`
- It copy the original lines from the files.

```js
module.exports = {
  mode: "development",  
  devtool: "cheap-module-source-map",  // <-- Here
  entry: {
    popup: path.resolve('src/popup/popup.tsx')
  },
  // ...
}
```

## Working with react and react-dom

- Paste the below code in the `popup.tsx` file.

```tsx
import React from 'react';
import {createRoot} from 'react-dom/client'

const test = (
  <div>
    <h1>Hello World</h1>
  </div>
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(test)
```

# Styling

- Run this command
  - ```bash
    npm i style-loader css-loader -D
    ```

1. Create a `popup.css` file in the `/src/popup/` folder and paste the below code.
   1. ```css
      body{
        width: 300px;
        height: 700px;
        background-color: #161a30;
      }
      ```
   2. `import` the `popup.css` file into the `popup.tsx` file.

2. Modify the `webpack.config.js` for loading `style-loader` and `css-loader`
   1. ```js
      // ...
       module: {  
        rules: [
          {
            use: "ts-loader",
            test: /\.tsx$/,
            exclude: /node_modules/,
          },
          {
            use: ['style-loader', 'css-loader'],   // <---- Here add these
            test: /\.css$/i,
          }
        ]
      },
      // ...
      ```
3. Now we'll use [**TailwindCSS**](https://tailwindcss.com/docs/installation/using-postcss), in that we use `PostCSS`.
   1. ```bash
      npm install -D tailwindcss postcss autoprefixer
      npx tailwindcss init
      ```
   2. Follow the steps from the docs, create a `postcss.config.js` file and paste the code from the link.
4. Now we'do sme modification in the folder.
   1. Create a `static` folder in `/src/` folder, move `manifest` and `icons` files in it.
   2. Move `popup.css` file into the `/src/assets/` folder.
   3. Now just only `static` path into the `CopyPlugin` as shown below.
      1. ```js
          plugins: [
            new CopyPlugin({
              patterns: [
                { from: path.resolve('src/static'), to: path.resolve('dist/') },
              ],
            }),
          ]
         ```
5. Now we need to add `postcss-loader` and update `webpack.config.js`:
   1. ```bash
      npm i -D postcss-loader
      ```
   2. ```js
      // ...
      const tailwindcss = require('tailwindcss');
      const autoprefixer = require('autoprefixer');
      // ...
      module: {
          rules: [
            {
              use: "ts-loader",
              test: /\.tsx$/,
              exclude: /node_modules/,
            },
            {
              use: ['style-loader', 'css-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions:{
                      ident: 'postcss',
                      plugins: [tailwindcss, autoprefixer],
                    }
                  }
                }
              ],
              test: /\.css$/i,
            }
          ]
        },
      ```

6. Now add below code in `tailwind.css` or `popup.css` and write **css** classes into `popup.tsx`
   1. ```css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```
   2. ```ts
      const test = (
        <div className="p-3 flex flex-col gap-3">
          <h1 className="text-2xl text-white">Hello World</h1>
          <p className="text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure animi culpa odio beatae est inventore, ratione impedit molestiae eligendi quam, optio voluptatem quo nihil rem qui, id earum alias?</p>
        </div>
      )
      ```

# Options chrome settings

1. IF right-click, we need options setting page, so first create a `options/options.tsx` file in **options** folder and paste the below code.
    1. ```tsx
      import React from 'react';
      import {createRoot} from 'react-dom/client'
      import "../assets/popup.css";

      const options = (
        <div className="p-3 flex flex-col gap-3">
          <h1 className="text-2xl text-white">Options</h1>
        </div>
      )

      const container = document.createElement('div')
      document.body.appendChild(container)
      const root = createRoot(container)
      root.render(test)
      ```
    2. Now update the webpack by adding `option` in `webpack.config.js`
      1. ```js
          module.exports = {
            mode: "development",
            devtool: "cheap-module-source-map",
            entry: {
              popup: path.resolve('src/popup/popup.tsx'),
              options: path.resolve('src/options/options.tsx')  // <---- here
            },
            //...
          }
         ```
    3. Now we have to convert the `options.tsx` to `options.html` using HtmlCopyPlugin
       1. ```js
          plugins: [
              new CopyPlugin({
                patterns: [
                  { from: path.resolve('src/static'), to: path.resolve('dist/') },
                ],
              }),
              new HtmlWebpackPlugin({
                title: "Tube Mellow",
                filename: 'popup.html',
                chunks: ['popup']
              }),
              new HtmlWebpackPlugin({
                title: "Tube Mellow",
                filename: 'options.html',
                chunks: ['options']
              })
            ],
          ```
    4. But above one *in-efficient* code. So paste the code from the below.
       1. ```js
          const HtmlPlugin = require('html-webpack-plugin');
          const path = require('path')
          const CopyPlugin = require("copy-webpack-plugin");
          const tailwindcss = require('tailwindcss')
          const autoprefixer = require('autoprefixer')

          module.exports = {
            mode: "development",
            devtool: "cheap-module-source-map",
            entry: {
              popup: path.resolve('src/popup/popup.tsx'),
              options: path.resolve('src/options/options.tsx')
            },
            module: {
              rules: [
                {
                  use: "ts-loader",
                  test: /\.tsx$/,
                  exclude: /node_modules/,
                },
                {
                  use: ['style-loader', 'css-loader',
                    {
                      loader: 'postcss-loader',
                      options: {
                        postcssOptions:{
                          ident: 'postcss',
                          plugins: [tailwindcss, autoprefixer],
                        }
                      }
                    }
                  ],
                  test: /\.css$/i,
                }
              ]
            },
            plugins: [
              new CopyPlugin({
                patterns: [
                  { from: path.resolve('src/static'), to: path.resolve('dist/') },
                ],
              }),
              ...getHtmlPlugins(
                ['popup', 'options']
              )
            ],
            resolve: {
              extensions: ['.tsx', '.ts', '.js']
            },
            output: {
              path: path.resolve(__dirname, 'dist'),
              filename: '[name].js',
            },
          }

          function getHtmlPlugins(chunks) {
              return chunks.map((chunk) => new HtmlPlugin({
                title: "Tube Mellow",
                filename: `${chunk}.html`,
                chunks: [chunk]
              }))
          }
          ```
      5. Now add `"options_page": "options.html",` in manifest.json
      6. Now we have optimize the the `popup.tsx` and `options.tsx` due to both are taking heavy react files. So we use `SplitChunkPlugin` from webpack.
         1. ```js
            module.exports = {
              //...
              optimization: {
                splitChunks: {
                  // include all types of chunks
                  chunks: 'all',
                },
              },
            };
            ```

# Service worker background

1. For more info please follow this [Link](https://developer.chrome.com/docs/extensions/develop/migrate/to-service-workers#update-bg-field)
2. Now add this code into `manifest.json` file.
   1. ```js
      {
        ...
        "background": {
          "service_worker": "background.js",
          "type": "module"
        }
        ...
      }
      ```
3. Create a `background.tsx` file in `static` folder, and now modify the `webpack.config.js` for locating `background.tsx` file to generate a copy.
   1. ```js
      module.exports = {
        // ...
        entry: {
          //..
          background: path.resolve('src/background/background.tsx')
        },
        // ...
      }
      ```
4. Now we have to add some `listeners` into background.tsx, inspect page of the extension.
   1. ```tsx
      chrome.runtime.onInstalled.addListener(() => {
        console.log('You have run the chrome extension')
      })
      ```
5. Now you'll encounter some issue, like this `TS2304: Cannot find name 'chrome'.`. So install `types` to get rid off.
   1. ```sh
      $ npm i -D @types/react @types/react-dom @types/chrome
      ```

# Permissions

- Follow this [Link](https://developer.chrome.com/docs/extensions/develop/concepts/declare-permissions#manifest) for more info.

1. Now we want to add **Permissions** in the `manifest.json` to work on the *bookmarks*.
   1. ```js
      {
      //..
      "permissions" : [
          "tabs",
          "bookmarks"
        ],
      //..
      }
      ```
2. Now write the code to trigger the function on the bookmark of the page.
   1. ```ts
      chrome.bookmarks.onCreated.addListener(() => {
        console.log('You have just bookmarked the page.')
      })
      ```

# Content scripts

- [Content scripts](https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts?hl=en) are files that run in the context of web pages.
- Using the standard Document Object Model (DOM), they are able to read details of the web pages the browser visits, make changes to them, and pass information to their parent extension.

1. Now create a `contentScript.ts` file in the `src/contentScript/contentScript.ts` folder and add path into `webpack.config.js`
   1. ```js
      window.onload = ()=>{
        console.log('I am from content script')
        // this log appear in the window console, not in chrome extensin console.
      }
      ```
2. Now modify the `manifest.json` file to access the page and mofify it.
   1. ```json
      {
        // ...
        "content_scripts": [
          {
            "matches": ["https://*.google.com/*"],
            "js": ["content-script.js"]
          },
        ]
        // ...
      }
      ```

3. Now go to [google.com](https://www.google.com), and inspect page, you'll see the log in the console.

# Optimization for production

1. Create two new files with name of `webpack.dev.js` for **development** and `webpack.prod.js` for production use.
2. Rename the `webpack.config.js` to `webpack.common.config.js` for common plugins and also modify `package.json` file
   1. ```json
       "scripts": {
          "dev": "webpack --watch --progress --config webpack.dev.js",
          "build": "webpack --progress --config webpack.prod.js"
          // remove the --watch in production environment
        },
      ```
3. Now we have to install `webpack-merge` as a devDependency and use it in both files.
   1. ```bash
      $ npm i -D webpack-merge
      ```
4. Now modify the both files.
   1. ```js
      // webpack.dev.js
      const {merge} = require('webpack-merge')
      const common = require('./webpack.common.config.js')

      module.exports = merge(common, {
        mode: "development",
        devtool: "cheap-module-source-map",
      })


      // webpack.prod.js
      const {merge} = require('webpack-merge')
      const common = require('./webpack.common.config.js')

      module.exports = merge(common, {
        mode: "production"
      })
      ```

# Tabs


