# URL API

### **1. Overview of the URL API**

The **URL API** is part of the Web APIs and provides an interface for parsing, manipulating, and constructing URLs easily and reliably. It allows developers to work with URLs in a structured way, which is particularly useful in product development for managing query parameters, routing, and dynamic links.

The primary object in the URL API is the `URL` interface, which breaks down a URL into components such as the protocol, hostname, pathname, and search parameters, making it easy to interact with each part individually.

### **2. Creating a URL Instance**

You can create a URL instance with the `URL` constructor, which takes a URL string as input. This instance provides various properties and methods to interact with the URL.

**Syntax**:
```javascript
const url = new URL(urlString, [baseURL]);
```

- **urlString**: The full URL string.
- **baseURL** (optional): A base URL if you're using a relative path.

**Example**:
```javascript
const url = new URL("https://example.com:8080/path/to/page?name=John&age=30#section2");
```

### **3. Key Properties of the URL Object**

The URL instance provides several properties that return parts of the URL:

- **`href`**: The full URL as a string.
- **`protocol`**: The protocol scheme (`http:`, `https:`, etc.).
- **`hostname`**: The domain name (e.g., `example.com`).
- **`port`**: The port number (e.g., `8080`).
- **`pathname`**: The path after the domain (e.g., `/path/to/page`).
- **`search`**: The query string with the leading `?` (e.g., `?name=John&age=30`).
- **`hash`**: The fragment identifier with the leading `#` (e.g., `#section2`).
- **`origin`**: The URL’s origin (protocol, hostname, and port).

**Example**:
```javascript
console.log(url.href);      // "https://example.com:8080/path/to/page?name=John&age=30#section2"
console.log(url.protocol);  // "https:"
console.log(url.hostname);  // "example.com"
console.log(url.port);      // "8080"
console.log(url.pathname);  // "/path/to/page"
console.log(url.search);    // "?name=John&age=30"
console.log(url.hash);      // "#section2"
console.log(url.origin);    // "https://example.com:8080"
```

### **4. Working with Query Parameters**

The `URLSearchParams` interface, available through `url.searchParams`, provides methods to manage query parameters.

#### Adding, Removing, and Retrieving Parameters

**Example**:
```javascript
// Create URL instance
const url = new URL("https://example.com?name=John&age=30");

// Add a parameter
url.searchParams.append("city", "New York");
console.log(url.toString()); // "https://example.com?name=John&age=30&city=New+York"

// Get a parameter
console.log(url.searchParams.get("name")); // "John"

// Remove a parameter
url.searchParams.delete("age");
console.log(url.toString()); // "https://example.com?name=John&city=New+York"
```

#### Iterating Over Parameters

You can use `forEach` or a `for...of` loop to iterate through parameters.

**Example**:
```javascript
url.searchParams.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
```

### **5. URL Validation**

The URL constructor throws an error if an invalid URL is provided. This behavior can be used to validate URLs:

**Example**:
```javascript
try {
    const url = new URL("invalid-url");
} catch (error) {
    console.error("Invalid URL");
}
```

### **6. Modifying the URL Dynamically**

Using the URL API, you can easily update or construct new URLs dynamically by modifying specific properties:

**Example**:
```javascript
const url = new URL("https://example.com");
url.pathname = "/new/path";
url.searchParams.set("page", "1");
console.log(url.href); // "https://example.com/new/path?page=1"
```

### **7. Use Cases in Product Development**

- **URL Parsing and Manipulation**: When handling links, tracking URLs, or setting up dynamic routes.
- **Search Parameter Management**: Easily add, remove, or retrieve query parameters without string manipulation.
- **Frontend Routing**: Use URL components to manage routing and navigation states.
- **Analytics and Tracking**: Append tracking parameters to URLs efficiently.

### **8. Interview Tips**

- Be ready to discuss the `URL` and `URLSearchParams` properties and methods.
- Practice common operations like extracting query parameters, modifying paths, and validating URLs.
- Prepare to explain scenarios where the URL API simplifies tasks, like routing or tracking.
  
---

### **Summary**

The URL API simplifies URL handling with a robust, flexible, and secure approach to parsing and manipulating URLs, making it essential for frontend and backend development.

---

# URLSearcchParams

### **1. Overview of URLSearchParams**

The **URLSearchParams** interface provides a way to interact with the query string (parameters) in a URL. This interface allows you to easily create, access, modify, and delete URL parameters without manual string manipulation.

### **2. Creating a URLSearchParams Instance**

A `URLSearchParams` instance can be created in two main ways:

- Directly from a URL’s `searchParams` property.
- By using a standalone `URLSearchParams` object with a query string.

**Examples**:

```javascript
// Creating from a URL instance
const url = new URL("https://example.com?name=John&age=30");
const params = url.searchParams;

// Creating a standalone URLSearchParams instance
const params2 = new URLSearchParams("name=John&age=30");
```

### **3. Key Methods of URLSearchParams**

The `URLSearchParams` object provides methods to manage parameters in a straightforward way.

#### **Getting Parameters**

- **`get(name)`**: Retrieves the first value associated with the given parameter name.
- **`getAll(name)`**: Retrieves all values associated with the given parameter name (useful if the same key appears multiple times).

```javascript
console.log(params.get("name"));     // "John"
console.log(params.getAll("name"));  // ["John"]
```

#### **Setting and Appending Parameters**

- **`set(name, value)`**: Sets the parameter to the specified value, replacing any existing value.
- **`append(name, value)`**: Appends a new parameter with the specified name and value, keeping existing values.

```javascript
params.set("age", "31");            // Changes "age" to "31"
params.append("city", "New York");  // Adds "city=New+York"
console.log(url.toString());        // "https://example.com?name=John&age=31&city=New+York"
```

#### **Deleting Parameters**

- **`delete(name)`**: Removes all values associated with the given parameter name.

```javascript
params.delete("age");
console.log(url.toString());  // "https://example.com?name=John&city=New+York"
```

#### **Checking Parameters**

- **`has(name)`**: Checks if the given parameter name exists in the query string.

```javascript
console.log(params.has("name"));  // true
console.log(params.has("age"));   // false (after deletion)
```

### **4. Iterating Over Parameters**

You can iterate over all key-value pairs in `URLSearchParams` using `forEach` or a `for...of` loop.

**Example**:

```javascript
params.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
// Output:
// name: John
// city: New York
```

Or with `for...of`:

```javascript
for (const [key, value] of params) {
    console.log(`${key}: ${value}`);
}
```

### **5. Converting URLSearchParams to a String**

To convert `URLSearchParams` back to a query string, use the `.toString()` method.

**Example**:

```javascript
console.log(params.toString());  // "name=John&city=New+York"
```

### **6. Practical Use Cases**

- **Building Dynamic Links**: Append parameters for routing, filtering, or pagination.
- **Updating Query Strings**: Modify or delete parameters without reconstructing the URL.
- **Parsing User Input**: Read and validate URL query parameters in user-submitted links.
- **Analytics and Tracking**: Dynamically append tracking parameters to URLs.

### **7. Using URLSearchParams with Form Data**

`URLSearchParams` is especially helpful when working with forms, as you can pass form data directly:

**Example**:

```javascript
const formData = new FormData(document.querySelector("form"));
const searchParams = new URLSearchParams(formData);
console.log(searchParams.toString());  // Outputs form data as a query string
```

### **8. Tips for Interviews**

- **Understand Common Methods**: Be comfortable with `get`, `set`, `append`, `delete`, and `has`.
- **Explain Use Cases**: Demonstrate understanding by discussing scenarios like filtering or analytics.
- **Be Familiar with Iteration**: Iterating over parameters is commonly used, so be ready to discuss or write examples.

---

### **Summary**

The **URLSearchParams** interface simplifies managing query parameters. Its methods provide a structured way to manipulate URL parameters, making it valuable for both frontend and backend tasks in dynamic web applications.