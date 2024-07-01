# OpenJS Course


## Objectives

- Rapidly build command line tools.
- Rapidly mock RESTful JSON APIs.
- Rapidly prototype real-time services.
- Discover and use ecosystem utilities.

## Installing Node usng fnm

```bash
# fnm installation command and link for github fnm is https://github.com/Schniz/fnm.
$ curl -fsSL ht‌tps://fnm.vercel.app/install | bash

# check fnm version
$ fnm --version

# If encountered error, "a command 'fnm' not found"
$ export PATH="$HOME/.local/share/fnm:$PATH"

# Nodejs installation command lts(Long Term Support)
$ fnm install --lts

# Installs latest version
$ fnm install --latest

# check node version
$ node -v
```


## .nvmrc File

To "pin" a specific Node.js version for your project, you need to create a `.nvmrc` file in the root of your project directory.

1. Open a text editor in the root of your project directory.
2. Create a new file and save it as `.nvmrc` (including the leading dot).
3. In the `.nvmrc` file, specify the Node version you want to use for your project. You can find the desired version by visiting the official Node.js website and looking for the Long-Term Stable (LTS) or the latest version. For example, you can simply write v18.16.0 in the `.nvmrc` file.
4. Save the `.nvmrc` file and close the text editor.
5. Once you have created the `.nvmrc` file with the desired Node version, you can use the following command to install and set that specific Node version for your project:

```
$ fnm use --version-file-strategy local
```

This command will read the `.nvmrc` file in your project directory and install the specified Node version, ensuring that it is used for your project.

> > Remember to always commit and share the `.nvmrc` file with your project collaborators, so everyone is using the same Node version.

```console
Q. What is the recommended approach to installing Node?
A. Version managers provide cross-platform consistency and industry standard conventions. They also tend to keep up with the latest releases whereas OS package managers can lag behind.


Q.Aside from the Node binary, what else does a Node installation provide?
A. Node comes with the npm package manager for installing ecosystem dependencies.
```


## Mocking the Services

Creating web services with mock data locally is valuable when we can't access the real services due to them being unavailable, slow, or having permission issues. Shared staging environments can cause problems because other developers might change the state unexpectedly. Ideally, we would run production-like services on our own machines, but this isn't always possible. Mocking web services is also useful for quick prototyping, especially when we can define the data model ourselves.

### Learning Objectives

By the end of this chapter, you should be able to:

- Create a local file server with minimal effort.
- Create a very basic mock service with just Node.js core.
- Discuss how to rapidly scaffold a Fastify service for more involved mock services.

### Starting a node project

To start a Node project, you need to create a `package.json` file, which is essential for managing the project's dependencies and metadata. You can create this file by running the command 

```sh
$ npm init
```
in your terminal. This command will prompt you to enter details such as the project name, version, description, entry point, author, and license. For example:

- Name: my-node-project
- Version: 1.0.0
- Description: A sample Node.js project
- Entry point: index.js
- Author: John Doe
- License: MIT

After you provide the required information, `npm init` will generate a `package.json` file with these details. This file is crucial for managing dependencies, scripts, and other configurations in your Node.js project. Creating a `package.json` file using `npm init` is the first step in setting up a new Node.js project effectively.


### Quick File server

To serve files from a folder, you can use the `serve` package. Follow these steps:

1. **Install the `serve` package**:
  
```bash
$ npm install serve
```

2. **Create a new folder named `static`** in your project directory:
  
```bash
$ mkdir static
```

These steps set up the environment to serve static files from the `static` folder using the `serve` package.


To continue setting up your quick file server, follow these steps to create the necessary files inside the `static` folder:

1. **Create the `index.html` file**:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>My App</title>
       <script type="module" src="app.js"></script>
       <style>
         body { background: #fad8d8; }
       </style>
     </head>
     <body>
       <nav>
         <button id="fetch">Fetch Products</button>
       </nav>
       <hr>
       <div id="products"></div>
       <template id="item">
         <style>
           details { font-size: 1.5em; }
           summary { cursor: pointer; }
           p { text-indent: 1.5rem; }
         </style>
         <details>
           <summary>
             <strong><slot name="name"></slot></strong> - <em><slot name="rrp"></slot></em>
           </summary>
           <p><slot name="info"></slot></p>
         </details>
       </template>
     </body>
   </html>
   ```

2. **Create the `app.js` file**:

   ```javascript
   const mockData = [
     {id: 'A1', name: 'Vacuum Cleaner', rrp: '99.99', info: 'The most powerful vacuum in the world.'},
     {id: 'A2', name: 'Leaf Blower', rrp: '303.33', info: 'This product will blow your socks off.'},
     {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Deliciously overpriced chocolate.'}
   ];

   const populateProducts = () => {
     const products = document.querySelector('#products');
     products.innerHTML = '';
     for (const product of mockData) {
       const item = document.createElement('product-item');
       for (const key of ['name', 'rrp', 'info']) {
         const span = document.createElement('span');
         span.slot = key;
         span.textContent = product[key];
         item.appendChild(span);
       }
       products.appendChild(item);
     }
   };

   document.querySelector('#fetch').addEventListener('click', async () => {
     await populateProducts();
   });

   customElements.define('product-item', class Item extends HTMLElement {
     constructor() {
       super();
       const itemTmpl = document.querySelector('#item').content.cloneNode(true);
       this.attachShadow({mode: 'open'}).appendChild(itemTmpl);
     }
   });
   ```

Once you have created these files, you can use the `serve` package to serve your files:

3. **Run the `serve` command**:

   ```sh
   npx serve -p 5050 static
   ```

This command will start a local server and serve the contents of the `static` folder. Once you have your `serve` package running, follow these steps to test and interact with your web page:

1. **Open your browser** and navigate to `http://localhost:5050`. You should see a web page with a "Fetch Products" button.


1. **Click the Fetch Products Button** to populate the web page with some data.

1. **Expand the Sections** by clicking on them. Once all the sections are expanded, it should look like the image below:

Here is the expected content:
- **Vacuum Cleaner - 99.99**: The suckiest vacuum in the world.
- **Leaf Blower - 303.33**: This product will blow your socks off.
- **Chocolate Bar - 22.40**: Delicious overpriced chocolate.

The data generating this information is embedded in the client-side code within `app.js`.

**Summary:** In this section, we installed the serve package and created a static folder to store our web application files. We placed an index.html file and an app.js file in the static folder, which contain the necessary HTML and JavaScript code for our simple web application.

By running the serve command with the appropriate options, we started a file server that hosts our static folder on port 5050. This allows us to access our web application in the browser by visiting http://localhost:5050.

### Creating NPM shell commands

To simplify the execution of frequently used shell commands, you can create custom Node Package Manager (NPM) shell commands by defining them in the `scripts` object within your `package.json` file. Here's how to do it:

1. **Open your `package.json` file** and add the following lines to the `scripts` object:

   ```json
   "scripts": {
     "static": "serve -p 5050 static",
     "test": "echo \"Error: no test specified\" && exit 1"
   }
   ```

   In this example, two commands are defined:
   - **static**: Runs `serve -p 5050 static`, which starts a file server on port 5050.
   - **test**: Echoes an error message.

2. **Run the custom command** using `npm run` followed by the script name. For example, to start the file server, use:

   ```bash
   $ npm run static
   ```

   This command will execute the `static` script, starting the file server on port 5050.

By creating these custom NPM shell commands, you can avoid the repetitiveness of typing long and complex commands. This practice enhances your workflow, making it easier and quicker to perform common tasks. As you progress, you can add more custom commands to further streamline your development process.

### Mocking Web Services

The top of the `app.js` file in the prior section contained the following data array:

```js
const mockData = [
  {id: 'A1', name: 'Vacuum Cleaner', rrp: '99.99', info: 'The most powerful vacuum in the world.'},
  {id: 'A2', name: 'Leaf Blower', rrp: '303.33', info: 'This product will blow your socks off.'},
  {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Deliciously overpriced chocolate.'}
]
```

This array represents mock data, with a structure similar to what we would expect from a real-world production service that our frontend application would integrate with.

> Including mock data directly in the client-side code can make it complex and does not reflect real-world behavior, as there's no remote fetching. This approach complicates the transition from local development to live environments, requiring conditional logic to switch between mock data and remote fetching. A better solution is to use a locally running mock service for the mock data. This way, the only change needed when deploying to staging or production is the URL to fetch from, rather than modifying large sections of code.


#### Modifying the mock service

let's modify the `static/app.js` as follows:

```diff
+ const API = "http://localhost:3000/"

const data = [
  {id: 'A1', name: 'Vacuum Cleaner', rrp: '99.99', info: 'The most powerful vacuum in the world.'},
  {id: 'A2', name: 'Leaf Blower', rrp: '303.33', info: 'This product will blow your socks off.'},
  {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Deliciously overpriced chocolate.'}
  {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Deliciously overpriced chocolate.'}
]

const populateProducts = async () => {
    const products = document.querySelector('#products')
    products.innerHTML = ''
+    const res = await fetch(API)
+    const data = await res.json()
    for (const product of data) {
      const item = document.createElement('product-item')
      for (const key of ['name', 'rrp', 'info']) {
        const span = document.createElement('span')
        span.slot = key
        span.textContent = product[key]
        item.appendChild(span)
      }
      products.appendChild(item)
    }
  }

  document.querySelector('#fetch').addEventListener('click', async () => {
    await populateProducts()
  })

 

  customElements.define('product-item', class Item extends HTMLElement {
    constructor() {
      super()
      const itemTmpl = document.querySelector('#item').content
      this.attachShadow({mode: 'open'}).appendChild(itemTmpl.cloneNode(true))
    }
  })
```


The API constant is set to `http://localhost:3000/`, pointing to our local mock web service. This URL can be replaced with the appropriate host for different environments. For instance, a build *pipeline* could substitute this URL with a *production* domain, directing to the actual *production* service that the mock web service simulates.


#### Creating our Mock services

Let's create a file called `server.mjs` at the top level of our project (**next** to the `static` folder, **not inside** it) and place the following code in it:

```js
// server.mjs

'use strict';
import { createServer } from "node:http";

const data = JSON.stringify([
  {
    id: "A1",
    name: "Vacuum Cleaner",
    rrp: "99.99",
    info: "The most powerful vacuum in the world.",
  },
  {
    id: "A2",
    name: "Leaf Blower",
    rrp: "303.33",
    info: "This product will blow your socks off.",
  },
  {
    id: "B1",
    name: "Chocolate Bar",
    rrp: "22.40",
    info: "Delicious overpriced chocolate.",
  },
]);

const server = await createServer((req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Set Content-Type header to JSON
  res.writeHead(200, { "Content-Type": "application/json" });
  // Send data
  res.end(data);
});

server.listen(3000);
console.log("Server listening on port http://localhost:3000/")
```

#### Testing the Mock service

1. **Setup**:
   - The mock data array from `app.js` is moved to `server.mjs` as a JSON string.
   - Use `createServer` from Node.js's `http` module to create an HTTP server.

2. **Starting the Server**:
   - The server listens on port 3000 using `server.listen(3000)`.
   - The `createServer` function takes a request handler with `req` (request) and `res` (response) arguments.

3. **Handling Requests and Responses**:
   - The `req` object is used to interact with the [incoming HTTP request](https://nodejs.org/dist/latest-v18.x/docs/api/http.html#class-httpincomingmessage).
   - The `res` object is used to specify the outgoing response.
   - `res.setHeader` sets the `Access-Control-Allow-Origin` header to `*` to allow cross-domain requests.
   - `res.setHeader` also sets the `Content-Type` header to `application/json`.
   - `res.end(data)` sends the JSON data as the response body and ends the connection.

4. **CORS Handling**:
   - The `Access-Control-Allow-Origin` header is set to `*` to allow all domains, suitable for local development.

5. **Limitations**:
   - The server does not have routing capabilities; it returns the same response for all routes and methods.
   - This setup is simple and quick for basic scenarios, but more complex service APIs with routing and multiple HTTP methods will be covered later.


Here's a summary of the final steps to run the project:

1. **Project Structure**:
   - The project folder should have the following structure:
     ```
     ├── package-lock.json
     ├── package.json
     ├── server.mjs
     └── static
         ├── app.js
         └── index.html
     ```

2. **Starting the Services**:
   - Open two terminal windows and navigate to your project directory.
   - In the first terminal, start the mock service by running: 
     ```bash
     $ node server.mjs
     ```
   - In the second terminal, serve the files using the NPM shell command: 
     ```bash
     $ npm run static
     ```

3. **Testing the Setup**:
   - Navigate to `http://localhost:5050` in your browser.
   - Click the "Fetch Products" button to see the data fetched from the mock service and displayed on the web page.

## Mocking GET Routes


1. First, let's remove the `server.mjs` file we created earlier:
   
    ```sh
    $ rm server.mjs
    ```
1. Next, modify the `static/index.html` file to the following:
    - The `Fetch Products` button has been replaced with a selector element for choosing the category.

    ```html
    <html>
      <head>
        <title>My App</title>
        <script type="module" src="app.js"></script>
        <style>body { background: #fad8d8 }</style>
      </head>
      <body>
        <nav>
          <select id="category">
            <option value="" hidden>Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="confectionery">Confectionery</option>
          </select>
        </nav>
        <hr>
        <div id="products"></div>
        <template id="item">
          <style>
            details { font-size: 1.5em; }
            summary { cursor: pointer; }
            p { text-indent: 1.5rem; }
          </style>
          <details>
            <summary>
              <strong>
              <slot name="name"></slot></strong> - 
              <em><slot name="rrp"></slot></em>
            </summary>
            <p><slot name="info"></slot></p>
          </details>
        </template>
      </body>
    </html>
    ```

1. Next, modify the `static/app.js` file to the following:

    ```js
    const API = 'http://localhost:3000'

    const populateProducts = async (category) => {
      const products = document.querySelector('#products')
      products.innerHTML = ''
      const res = await fetch(`${API}/${category}`)
      const data = await res.json()

      for (const product of data) {
        const item = document.createElement('product-item')
        for (const key of ['name', 'rrp', 'info']) {
          const span = document.createElement('span')
          span.slot = key
          span.textContent = product[key]
          item.appendChild(span)
        }
        products.appendChild(item)
      }
    }

    const category = document.querySelector('#category')

    category.addEventListener('input', async ({ target }) => {
      await populateProducts(target.value)
    })


    customElements.define('product-item', class Item extends HTMLElement {
      constructor() {
        super()
        const itemTmpl = document.querySelector('#item').content
        this.attachShadow({mode: 'open'}).appendChild(itemTmpl.cloneNode(true))
      }
    })
    ```

In the updated code, an input event listener on the select element replaces the button-click event listener. The `populateProducts` function now takes a category argument and fetches data from a specific category endpoint using:

```js
const res = await fetch(`${API}/${category}`)
```

When a category is selected, `populateProducts` is called with the selected value, making a GET request to the specified category endpoint. The mock service must support the following routes:

- `GET http://localhost:5050/electronics`
- `GET http://localhost:5050/confectionery`


To create a mock service using the [Fastify](https://www.fastify.io/) framework, it is a Node.js web framework that is built for rapid implementation and high performance. follow these steps:

1. **Create and Navigate to mock-srv Directory**:
   ```bash
   $ mkdir mock-srv
   $ cd mock-srv
   ```

1. **Install Fastify and its CLI**:
   ```bash
   $ npm add fastify fastify-cli
   ```

1. **Generate Fastify Project Scaffold**:
   ```bash
   $ npx fastify generate . --esm
   ```

After running these commands, the `mock-srv` directory will contain the following structure:

```
mock-srv/
├── README.md
├── app.js
├── package.json
├── plugins
│   ├── README.md
│   ├── sensible.js
│   └── support.js
├── routes
│   ├── README.md
│   ├── example
│   │   └── index.js
│   └── root.js
└── test
    ├── helper.js
    ├── plugins
    │   └── support.test.js
    └── routes
        ├── example.test.js
        └── root.test.js
```

To set up and start the Fastify server for our mock service, follow these steps:

1. **Navigate to the Project Directory and Install Dependencies**:
   ```bash
   $ cd mock-srv
   $ npm install
   ```

1. **Start the Fastify Server**:
   ```bash
   $ npm start
   ```

    This will run Fastify as if it were in a ‘production’ environment. If your system is not respecting relative imports, you will see the following error upon starting the server:

    > Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@fastify/autoload'

    This problem would require you to use an ‘absolute’ route for the modules you are trying to import into our files. In this case, import Autoload from ‘@fastify/autoload cannot be used and we would have to make a slight modification to the mock-srv/app.js file:

    ```diff
    - import AutoLoad from '@fastify/autoload'
    // Relative import path "@fastify/autoload" not prefixed with /, ./ or ../
    + import {fastifyAutoload as AutoLoad} from './node_modules/@fastify/autoload/index.js'
    ```

1. **Verify Server Startup**:
   After running `npm start`, you should see output similar to:
   ```
   > mock-srv@1.0.0 start
   > fastify start -l info app.js

   {"level":30,"time":1683644957813,"pid":16532,"hostname":"My_Comp_Name","msg":"Server listening at http://127.0.0.1:3000"}
   ```

1. **Stopping the Server**:
   To stop the server, press `Ctrl + C` in the terminal where the server is running. This sends an abort signal to terminate the process.

These steps ensure that the Fastify server is set up, running, and accessible at `http://localhost:3000`. This setup allows you to proceed with defining routes and testing your mock service locally.


To prepare our Fastify server for our mock web service, follow these steps:

1. **Install the fastify-cors Plugin**:
   Use npm to install the `fastify-cors` plugin, which will handle Cross-Origin Resource Sharing (CORS) for us:
   ```bash
   $ npm install @fastify/cors
   ```

1. **Update the app.js File**:
   Replace the contents of `mock-srv/app.js` with the following code:
   ```javascript
    import path from 'node:path'
    import { fileURLToPath } from 'node:url'
    import AutoLoad from '@fastify/autoload'
    import cors from '@fastify/cors'

    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    // Pass --options via CLI arguments in command to enable these options.
    export const options = {}

    export default async function (fastify, opts) {
      // Place here your custom code!
      fastify.register(cors)
      // Do not touch the following lines

      // This loads all plugins defined in plugins
      // those should be support plugins that are reused
      // through your application
      fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'plugins'),
        options: Object.assign({}, opts)
      })

      // This loads all plugins defined in routes
      // define your routes in one of these
      fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'routes'),
        options: Object.assign({}, opts)
      })
    }
   ```
   In this updated code:
   - We import necessary modules including `path` and `fileURLToPath` for file operations.
   - We import `AutoLoad` from `@fastify/autoload` to automate loading of plugins and routes.
   - We import and register `cors` from `@fastify/cors` to enable CORS support across all routes.
   - `AutoLoad` is used to load plugins from the `plugins` directory and routes from the `routes` directory.

1. **Understanding CORS Integration**:
   By registering `fastify.register(cors)`, Fastify will automatically add the necessary `Access-Control-Allow-Origin` headers to all responses, allowing cross-origin requests from our client application served on `http://localhost:5050`.

This setup ensures that our Fastify server is configured with CORS support and ready to handle requests for our mock web service.


To set up our Fastify server with two routes, `confectionery` and `electronics`, follow these steps:

1. **Create Route Directories**:
   Navigate to the `routes` directory in your `mock-srv` folder and create two subdirectories:
   ```bash
   $ cd mock-srv/routes
   $ mkdir confectionery
   $ mkdir electronics
   ```

1. **Create Route Handlers**:
   Inside the `confectionery` directory, create an `index.mjs` file with the following content:
   ```javascript
   "use strict";
   const data = [
     {
       id: "B1",
       name: "Chocolate Bar",
       rrp: "22.40",
       info: "Delicious overpriced chocolate.",
     },
   ];

   export default async function (fastify) {
     fastify.get("/", async function (request, reply) {
       return data;
     });
   }
   ```
   In this file:
   - We define a `data` array containing mock data representing confectionery items.
   - We export an async function that registers a `GET` route using `fastify.get("/")`.
   - When this route is accessed (`GET /confectionery`), it responds with the `data` array as a JSON response.

1. **Understanding Fastify Routing**:
   - Fastify divides services into plugins, where each plugin is a module exporting a function that accepts a Fastify instance.
   - Routes are set up using `fastify.get`, `fastify.post`, etc., methods, where the first argument is the route path and the second is the route handler function.
   - The route path in Fastify is relative to the directory structure. For instance, `fastify.get("/", ...)` in the `index.mjs` file of the `confectionery` directory corresponds to the route `GET /confectionery`.

1. **Folder Name as Path Prefix**:
   - The name of the folder (`confectionery` in this case) sets the initial part of the route path. If the folder name changes, the top-level route also changes accordingly without needing code modifications.

This setup allows our Fastify server to handle requests to `GET /confectionery` and respond with mock confectionery data. Similar steps can be followed for the `electronics` route with appropriate mock data and path configuration.


### Creating first route

To set up the Fastify server to handle mock data for the `electronics` route, follow these steps:

1. **Create the `electronics` Route**:
   Create the `mock-srv/routes/electronics/index.js` file with the following content:
   ```javascript
   "use strict";
   const data = [
     {
       id: "A1",
       name: "Vacuum Cleaner",
       rrp: "99.99",
       info: "The suckiest vacuum in the world.",
     },
     {
       id: "A2",
       name: "Leaf Blower",
       rrp: "303.33",
       info: "This product will blow your socks off.",
     },
   ];

   export default async function (fastify) {
     fastify.get("/", async function (request, reply) {
       return data;
     });
   }
   ```

2. **Pattern for Creating Routes**:
   You can create a new route by following this pattern:
   - Create a folder in `routes` with the desired name.
   - Add an `index.js` file inside this folder.
   - The folder name determines the top-level path of the route.
   - The `index.js` file should export an async function that registers a `GET` route returning the mock data.

   Example template:
   ```javascript
   "use strict";

   export default async function (fastify) {
     fastify.get("/", async function (request, reply) {
       return {DATA HERE};
     });
   }
   ```

3. **Understanding Fastify Request and Reply Objects**:
   - The `request` and `reply` objects passed to the route handler function in Fastify have higher-level APIs compared to the `req` and `res` objects in Node's `http.createServer`.
   - For more information on their APIs, refer to the [Fastify Request documentation](https://www.fastify.io/docs/v3.9.x/Request/) and [Fastify Reply documentation](https://www.fastify.io/docs/v3.9.x/Reply/).

4. **Running the Project**:
   - **First Terminal**:
     Navigate to the project folder and run the static server:
     ```bash
     $ cd .. && npm run static
     ```
   - **Second Terminal**:
     With the current working directory set to the `mock-srv` folder, run the Fastify server in development mode:
     ```bash
     $ npm run dev
     ```

Following these steps, you will have a mock service set up with routes for `confectionery` and `electronics`, and both your static files and Fastify server will be running, allowing you to fetch and display the mock data in your web application.

- Open [http://localhost:5050](http://localhost:5050) in your browser.
- The web page will display a category selector.
- Select a category from the dropdown menu.
- The mock data for the selected category will be fetched from the corresponding endpoint:
  - [http://localhost:3000/electronics](http://localhost:3000/electronics)
  - [http://localhost:3000/confectionery](http://localhost:3000/confectionery)
- The fetched data will be displayed on the web page.


## Creating POST Routes 


