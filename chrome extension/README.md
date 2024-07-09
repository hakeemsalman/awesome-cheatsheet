# Chrome extension development

## Getting started

1. Run the below code
    ```bash
    $ mkdir hello-extension
    $ cd hello-extension
    ```
2. Create a new file in this directory called `manifest.json`. 
   1. This JSON file describes the extension's capabilities and configuration.
   2. For example, most manifest files contain an *`action`* key which declares the image Chrome should use as the extension's action icon and the HTML page to show in a popup when the extension's action icon is clicked.
3. Paste the below code in `manifest.json`

    ```js
    {
      "manifest_version": 3,
      "name": "Hello Extensions",
      "description": "Base Level Extension",
      "version": "1.0",
      "action": {
        "default_popup": "hello.html",
        "default_icon": "hello_extensions.png"
      }
    }
    ```
4. Add the Icon in the directory [DOWNLOAD ICON](https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/gmKIT88Ha1z8VBMJFOOH.png)
5. Create a `hello.html` file in the same directory
    
    ```html
    <html>
      <body>
        <h1>Hello Extensions</h1>
      </body>
    </html>
    ```

## Load an unpacked extension
**To load an unpacked extension in developer mode:**
1. Go to the Extensions page by entering `chrome://extensions` in a new tab. (By design `chrome://` URLs are not linkable.)
   - Alternatively, click the Extensions menu puzzle button and select **Manage Extensions** at the bottom of the menu.
   - Or, click the Chrome menu, hover over **More Tools**, then select **Extensions**.
2. Enable Developer Mode by clicking the toggle switch next to **Developer mode**.
3. Click the **Load unpacked** button and select the extension directory.
4. Pin the extension and click on the **icon**.

## Reload the extension

- Go back to the code and change the `name:` of the extension to **Hello Extensions of the world!** in the `manifest.json`.
- Go to the Extensions page and click the refresh icon next to the **on**/**off** toggle.
- You will see the changes in the description.

### When to reload the extension

The following table shows which components need to be reloaded to see changes:


|Extension component | Requires extension reload |
|---|---|
| The manifest	| Yes |
| Service worker	| Yes |
| Content scripts	| Yes  (plus the host page) |
| The popup	| No |
| Options page	| No |
| Other extension HTML pages	| No |


## Find console logs and errors

### Console logs

1. During development, you can debug your code by adding a script tag in `hello.html`.
 
    ```diff
    <html>
      <body>
        <h1>Hello Extensions</h1>
    +    <script src="popup.js"></script>
      </body>
    </html>
    ```
2. Create a popup.js file and add the following code:
    
    ```js
    console.log("This is a popup!")
    ```
3. To see this message logged in the Console:

    1. Open the popup.
    2. Right-click the popup.
    3. Select Inspect.
    4. Navigate to **console panel**.

### Error logs

- Now let's break the extension. We can do so by removing the **closing quote** in `popup.js`:

- Go to the Extensions page and open the popup. An **Errors** button will appear.
- Click the Errors button to learn more about the error:

## Structure an extension project

- The only prerequisite is to place the `manifest.json` file in the extension's root directory

```bash
project_name/
├── manifest.json
├── content_scripts/ (optional)
│   └── my_extension.js (example)
├── background.js (optional)
├── popup/ (optional)
│   ├── popup.html
│   ├── popup.css
│   └── popup.js
├── options/ (optional)  
│   ├── options.html
│   ├── options.css
│   └── options.js
├── assets/ (optional)
│   └── icon.png (example)
├── lib/ (optional)
│   └── external_library.js (example)
└── README.md (optional)
```

## Use TypeScript

If you are developing using a code editor such as VSCode or Atom, you can use the npm package [chrome-types](https://www.npmjs.com/package/chrome-types) to take advantage of auto-completion for the [Chrome API](https://developer.chrome.com/docs/extensions/reference). This npm package is updated automatically when the Chromium source code changes.

## Icons

- We recommend using PNG files, but other file formats are allowed, except for SVG files.
- Create an `images` folder and place the icons inside

```js
{
  "icons": {
    "16": "images/icon-16.png",   // Favicon on the extension's pages and context menu.
    "32": "images/icon-32.png",   // Windows computers often require this size.
    "48": "images/icon-48.png",   // Displays on the Extensions page.
    "128": "images/icon-128.png"  // Displays on installation and in the Chrome Web Store.
  }
}
```


## Declare the content script

- Extensions can run scripts that read and modify the content of a page. These are called content scripts. They live in an isolated world, meaning they can make changes to their JavaScript environment without conflicting with their host page or other extensions' content scripts.
- Add the following code to the `manifest.json` to register a content script called `content.js`.

```js
{
  "content_scripts": [
    {
      "js": ["scripts/content.js"],
      "matches": [
        "https://developer.chrome.com/docs/extensions/*",
        "https://developer.chrome.com/docs/webstore/*"
      ]
    }
  ]
}
```

