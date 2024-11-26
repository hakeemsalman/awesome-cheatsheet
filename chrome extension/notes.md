# Chorme API's Meth0ds

- [Chorme API's Meth0ds](#chorme-apis-meth0ds)
  - [Manifest](#manifest)
    - [activeTab](#activetab)
    - [Scripting](#scripting)
  - [runtime](#runtime)
    - [runtime.onInstalled()](#runtimeoninstalled)
  - [action](#action)
    - [action.setBadgeText()](#actionsetbadgetext)
  - [tabs](#tabs)
    - [tabs.query()](#tabsquery)
  - [Content scripts](#content-scripts)


## Manifest

### activeTab

- The `activeTab` permission grants the extension *temporary ability* to execute code on the active tab.
- It also allows access to sensitive properties of the current tab
  - This permission is enabled when the user invokes the extension, by clicking on the extension action.
- **it does not trigger** a [permission warning](https://developer.chrome.com/docs/extensions/develop/concepts/permission-warnings#permissions_with_warnings).
```json
{
  //...
  "permissions": ["activeTab"],
  //...
}
```

### Scripting

- Scripting API does not trigger a [permission warning](https://developer.chrome.com/docs/extensions/develop/concepts/permission-warnings#permissions_with_warnings).
## runtime

### runtime.onInstalled()

- This method allows the extension to set an initial state or complete some tasks on installation. 


## action

### action.setBadgeText()

- The [action's badge](https://developer.chrome.com/docs/extensions/reference/api/action#badge) is a colored banner on top of the extension action (toolbar icon).


```js
chrome.action.setBadgeText({
    text: "OFF",
});
```

## tabs

### tabs.query()

- n Chrome extensions, the `chrome.tabs.query` API doesn't return a promise, so the `await` keyword has no effect on it.
- Instead, it uses a callback-based pattern.

```js
const tabs = await new Promise((resolve, reject) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (chrome.runtime.lastError) {
      return reject(chrome.runtime.lastError);
    }
    resolve(tabs);
  });
});
```

## Content scripts

- Content Script Lifecycle
  - The content script runs every time a matching page loads or the user navigates to it.