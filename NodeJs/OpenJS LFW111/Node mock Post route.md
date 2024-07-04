# MOCK service - POST

## Creating POST Routes (1)

- Handling `POST` Routes for adding new items to a **category**
- Let's update the `static/index.html` file to include a form element for adding new items.
- we have added a form element `<form id="add">` with input fields for `name`, `rrp`, and `info`. The form is initially hidden `display: none;`. It will be displayed when a category is selected.

```html
<html>
  <head>
    <title>My App</title>
    <script type="module" src="app.js"></script>
    <style>
      body {
        background: #fad8d8;
      }
      #add {
        margin-top: 1em;
        width: 20rem;
        display: none;
      }
      #add input {
        margin-bottom: 0.5em;
      }
      [name="name"],
      [name="rrp"] {
        width: calc(10rem - 2px);
      }
      [name="info"] {
        width: 20rem;
      }
      #add button {
        font-weight: bold;
        width: 5em;
        float: right;
      }
    </style>
  </head>
  <body>
    <nav>
      <select id="category">
        <option value="" hidden>Select Category</option>
        <option value="electronics">Electronics</option>
        <option value="confectionery">Confectionery</option>
      </select>
    </nav>
    <hr />
    <div id="products"></div>
    <form id="add">
      <input name="name" placeholder="name" required />
      <input name="rrp" placeholder="rrp" type="number" step="0.01" required />
      <input name="info" placeholder="info" required />
      <button type="submit">Add</button>
    </form>
    <template id="item">
      <style>
        details {
          font-size: 1.5em;
        }
        summary {
          cursor: pointer;
        }
        p {
          text-indent: 1.5rem;
        }
      </style>
      <details>
        <summary>
          <strong><slot name="name"></slot></strong> -
          <em><slot name="rrp"></slot></em>
        </summary>
        <p><slot name="info"></slot></p>
      </details>
    </template>
  </body>
</html>
```