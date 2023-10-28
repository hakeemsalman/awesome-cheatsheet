# SASS

SASS is stand for **S**yntactically **A**wesome **S**tyle **S**heets, it is a pre-processor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
SassScript is the scripting language itself. [For more info](https://en.wikipedia.org/wiki/Sass_(style_sheet_language))

Sass consists of two syntaxes.

1. SASS (original syntax, `indented syntax` similar to Haml).
2. SCSS (newer syntax, `Sassy CSS`, uses block formatting like that of CSS.)

## Keypoints

1. It is a pre-processor, to compile the css from .scss or .sass extension.
2. Need to install Sass compiler in computer where you are working [click here for installation guide](https://sass-lang.com/install/).
3. Write a command to watch sass `sass --watch input.scss output.css`.

#### Sass features

1. [Variables](#1-variables)
2. [Nesting](#2-nesting)
3. [Modules & Partials](#3-partials)
4. [Mixins](#4-mixins)
5. [Extend](#5-extend)
6. [Operators](#6-operators)

#### Tips and Tricks

1. [1 Media queries](#1-media-queries)
2. [2 Semantic class name](#2-semantic-class-name)
3. [3 Selectors](3-selectors)

## Sass Features

### 1 Variables

1. Variables are used to store the values and use it anytime and everywhere.
2. Margins and padding (use `*` and `/` operators that let you multiply and divide values) Font sizes, weights, and families.
3. Colors (use variables for lighter/darker variants of colors by using the lighten() and darken() functions).
4. Breakpoint widths for media queries.
5. Create and write variables inside *`_variables.scss`* module.

```html
<h1>Hello World</h1>
  <p>Animals</p>
  <ul>
    <li>Cat</li>
    <li>Dog</li>
  </ul>
  <a href="#">Click me</a>
```

<table>
  <tr>
    <td>SCSS</td><td>CSS</td>
  </tr>
  <tr>
    <td>

  ```scss
  $font-stack: Helvetica, sans-serif;
  $primary-color: #333;
  $black: #000;
  $black-200: $black,10%

  body {
    font: 100% $font-stack;
    color: $primary-color;
  }
  ```

  </td>
    <td>

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

  </td>
  </tr>
</table>

### 2 Nesting

It's a hierarchy based syntax.

<table>
  <tr>
    <td>SCSS</td><td>CSS</td>
  </tr>
  <tr>
    <td>

```scss
// scss
body {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li { display: inline-block; }
  }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

  </td>
    <td>

```css
/*css*/
body ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
body ul li {
  display: inline-block;
}
body a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

  </td>
  </tr>
</table>

### 3 Partials

1. Partial Sass files that contain little snippets of CSS that you can include in other Sass files.
2. Underscore `_` should be denoted before first letter when you create partial files.
3. Use `@use` to import `*.scss` file. <span style="color: red;">*If @use is NOT working try with @import rule.*</span>
4. This rule loads another Sass file as a *`module`*
5. No need to write the extension of *`module`* file when importing.

```scss
// _variables.scss 
$font-stack: Helvetica, sans-serif;
$primary-color: #333;


// section.scss
@use "./_variables";

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

```css
/* CSS */
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

### 4 Mixins

1. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site.
2. It helps keep your Sass very DRY. *Don't Repeat Yourself*.
3.

```scss
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}
```

```css
.info {
  background: DarkGray;
  box-shadow: 0 0 1px rgba(169, 169, 169, 0.25);
  color: #fff;
}

.alert {
  background: DarkRed;
  box-shadow: 0 0 1px rgba(139, 0, 0, 0.25);
  color: #fff;
}

.success {
  background: DarkGreen;
  box-shadow: 0 0 1px rgba(0, 100, 0, 0.25);
  color: #fff;
}
```

### 5 Extend

1. It's `Inherit` the properties from `selectors`.
2. Use `%` keyword to share the properties. Like example:`%flex{ display: flex; }`.
3. Use `@extend` keyword to extend the shared property.
4. You cannot extend a nested selector.
5. You cannot extend a selector that is wrapped in a media query (which is another reason to do this)

```scss
/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

```css
/* This CSS will print because %message-shared is extended. */
.warning, .error, .success, .message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```

### 6 Operators

1. We can use Operators/expressions for doing Math calculations.
2. They are `+`, `-`, `*`, `math.div()`, and `%`.

<table>
  <tr>
    <td>SCSS</td><td>CSS</td>
  </tr>
  <tr>
    <td>

```scss
@use "sass:math";

.container {
  display: flex;
}

article[role="main"] {
  width: math.div(600px, 960px) * 100%;
}

aside[role="complementary"] {
  width: math.div(300px, 960px) * 100%;
  margin-left: auto;
}
```
  </td>
  <td>

```css
.container {
  display: flex;
}

article[role=main] {
  width: 62.5%;
}

aside[role=complementary] {
  width: 31.25%;
  margin-left: auto;
}
```

  </td>
  </tr>
</table>

### 1 Media queries

1. Write `@media queries` inside a class.
2. Don't use `css` *media queriess* instead of `scss` *media queries syntax*

<table>
  <tr>
    <td>SCSS</td><td>CSS</td>
  </tr>
  <tr>
    <td>

```scss
/* Don't do this */
@media (min-width: $screen-sm-min) {
    .my-class {
        padding-right: $sc-base-margin;
    }
}

```
  </td>
  <td>

```scss
/* Do this instead */
.my-class {
    @media (min-width: $screen-sm-min) {
        padding-right: $sc-base-margin;
    }
}
```

  </td>
  </tr>
</table>

### 2 Semantic class name

1. Use Class names that describe the meaning of the content, rather than its presentation.

- item-details-sku-container
- header-menu-search-icon
- profile-information-label

### 3 Selectors

1. Using `ID`s and `tag` selectors in css to style the element is a bad practice, it's reserved for *`Javascript`*.

<table>
  <tr>
    <td>SCSS</td><td>SCSS</td>
  </tr>
  <tr>
    <td>

  ```scss
      // Don't do this
      a.item-details-size-chart-link {
        ...
      }
      .look-item-cell {
        p {
          ...
        }
      }
  ```

  </td>
  <td>
    
  ```scss
      // Do this instead 
    .item-details-size-chart-link { 
      // removed unnecessary element tag
        ...
    }
    .look-item-cell-description {
      // added new class on p tag, so I can target it directly
      ...
    }
  ```

   </td>
  </tr>
</table>

### 4 Reference Parent Selectors with &
1. It is possible to nest to these within the parent selector — you just need to use an ampersand `&`.
2. `&` is likely equal to *`parent-selector`*.
3. Don’t Overdo Nesting

<table title="Use ampersand">
  <tr>
    <td>SCSS</td><td>CSS</td>
  </tr>
  <tr>
  <td>
 

  ```scss
  .my-link-class {
      text-decoration: underline;
      &:hover,
      &:active {
          text-decoration: none;
      }
    }
  ```

  </td>

  <td>

  ```css
  .my-link-class {
    text-decoration: underline;
  }

  .my-link-class:hover, .my-link-class:active {
      text-decoration: none;
  }
  ```

   </td>
  </tr>
</table>


<table title="Don’t Overdo Nesting">
  <tr>
    <td>SCSS</td>
  </tr>
  <tr>
    <td>

  ```scss
  // DO NOT 
  ul.menubar {
    list-style: none;
    > li {
        display: inline-block;
        > ul {
            padding: 10px 0;
            > li > a {
                color: black;
              }  
          }
      } 
  }
  ```

 </td>
  </tr>
</table>

---
---

### Resources

1. Some guidelines collected from [https://sass-lang.com/guide/](https://sass-lang.com/guide/).