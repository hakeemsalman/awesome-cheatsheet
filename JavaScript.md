# Javascript

*JavaScript* was initially created to “make web pages alive”.

The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.

Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.

### Keypoints:
---
1.


### Topics
#### Fundamentals
1. [Hello World](#1-hello-world)

## 1 Hello World

1. To run script in browser, add `script` tag in html file. You can place tag almost anywhere in HTML document.
2. The `<script>` tag contains JavaScript code which is automatically executed when the browser processes the tag.
3. Script files are attached to HTML with the `src` attribute.

<table>
<tr><td>Code</td> <td>Output</td> </tr>
<tr>
<td>

  ```html
  <html>
  <body>
    <p>Before the script...</p>
    <script>
      alert( 'Hello, world!' );
    </script>
    <p>...After the script.</p>
  </body>
  </html>
  ```

</td>
<td>

```console
Before the script...

// Alert will appear

...After the script.
```

</td>
</tr>
<tr>
<td>

  ```html
    <script src="/path/to/script.js"></script>
  ```

</td>
<td>

  ```console
    
  ```

</td>
</tr>
</table>
