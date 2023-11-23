# JS Part 2

## Debugging *(pending)*

- For more info please follow this [link](https://javascript.info/debugging-chrome).
1. A breakpoint is a point of code where the debugger will automatically pause the JavaScript execution.
2. **Resume**: continue the execution, hotkey <kbd class="shortcut">F8</kbd>.
3. **Step**: run the next command, hotkey <kbd class="shortcut">F9</kbd>.
4. **Step over**: run the next command, but *don’t go into a function*, hotkey <kbd class="shortcut">F10</kbd>.
5. **Step into**: command ignores async actions, such as setTimeout hotkey <kbd class="shortcut">F11</kbd>.
6. **Step out**: continue the execution till the end of the current function, hotkey <kbd class="shortcut">Shift+F11</kbd>.
7. The command `debugger`, pause the code.
    -  ```js
        function hello(name) {
          let phrase = `Hello, ${name}!`;

          debugger;  // <-- the debugger stops here

          say(phrase);
        }
       ```
8.  **Logging**: To output something to console from our code, there’s `console.log` function.
    - ```js
      // open console to see
      for (let i = 0; i < 5; i++) {
        console.log("value,", i);
      }
      ```

## Styling

[Google Guides](https://google.github.io/styleguide/jsguide.html)


