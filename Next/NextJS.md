# NExt.js

1. Next.js is a flexible **React framework** that gives you building blocks to create fast web applications.
2. You can use React to build your UI, then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, integrations - all while improving the developer and end-user experience.

## Installation of Next app

**To create *Next* App**

> npm init  
> npm install create-next-app   
> npx create-next-app appName  
> npm run dev  

## Navigating with Pages

1. **Pages** directory is the important directory for navigating pages.
2. `/` is root directory for every page. 
3. Add pages in this directory to show in browser, `first-post.js`
4. Import `next/link` in component to add links.

```js
import Link from 'next/link';

// ...

<Link href="/">Back to home</Link>

// ...
```


## Adding Assets, Metadata and Images

1. Add images in `public` directory.
2. Import `image` module from `next` package, instead of using `<img />` tag.
3. Import `head` component from `next` package, and use this instead of `<head>` ... `</head>` tag.
4. Import `script` component from `next` package, and use this instead of `<script>`... `</script>`.
5. 

```js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
      <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
    </>
  );
}
```

## CSS Styling

CSS modules allow you to locally scope CSS at the component-level by automatically creating unique class names. This allows you to use the same CSS class name in different files without worrying about class name collisions.

1. In addition to CSS modules, you can style your Next.js application in a variety of ways, including:
    - Sass which allows you to import `.css` and `.scss` files.
    - PostCSS libraries like [Tailwind CSS](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss).
    - CSS-in-JS libraries such as [styled-jsx](https://github.com/vercel/styled-jsx), [styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components), and [emotion](https://github.com/vercel/next.js/tree/canary/examples/with-emotion)


#### Layout Component

Follow this [link](https://nextjs.org/learn/basics/assets-metadata-css/layout-component)

- Create a top-level directory called `components`.
- Inside `components`, create a file called `layout.js`.
- Create a CSS file called `components/layout.module.css`

<table>
  <tr>
    <th>index.js</th>
    <th>layout.js</th>
    <th>layout.module.css</th>
  </tr>
  <tr>
    <td>
    
  ```js
  import Head from 'next/head';
  import Link from 'next/link';
  import Layout from './layout';

  export default function FirstPost() {
    return (
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </Layout>
    );
  }
  ```

  </td>
  <td>
  
  ```js
  import styles from './layout.module.css';

  export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>;
  }
  ```
  
  </td>
  <td>
  
  ```css
  .container {
    max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
  }
  ```
  
  </td>
  </tr>
</table>

#### Global Styles

1. ***CSS Modules*** are useful for *component-level* styles. But if you want some CSS to be loaded by **every page**, Next.js has support for that as well, **Global CSS**.
1. You can use this component to keep state when navigating between pages, or to add global styles as we're doing here.
1. create a file called `pages/_app.js`
    - ```js
      // `pages/_app.js`
      import '../styles/global.css';

      export default function App({ Component, pageProps }) {
        return <Component {...pageProps} />;
      }
      ```
1. - Create a top-level styles directory and a global.css file.
   - Add the following CSS inside styles/global.css. This code resets some styles and changes the color of the a tag:
   - ```js
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
          Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        line-height: 1.6;
        font-size: 18px;
      }

      * {
        box-sizing: border-box;
      }
     ```


## [TIPS](https://nextjs.org/learn/basics/assets-metadata-css/styling-tips)

## Using Sass
You can use component-level Sass via CSS Modules and the `.module.scss` or `.module.sass` extension.

>  npm install -D sass


## Pre-rendering and Data Fetching

By default, Next.js pre-renders every page. This means that Next.js *generates HTML for each page in advance*.

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called **hydration**.)

![Pre-render](./assets/image.png)

![No Pre-render](./assets/image2.png)

--
---

**Two Forms of Pre-rendering**

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then *reused* on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on each request.


> We can create *Hybrid app* by mixing two forms also on one app.

#### When to Use Static Generation v.s. Server-side Rendering

We recommend using **Static Generation**(with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate frequently updated data.







