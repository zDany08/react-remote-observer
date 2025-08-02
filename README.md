# React Remote Observer

IntersectionObserver API implementation based on element IDs instead of references.

## Why Remote Observer?

All the traditional IntersectionObserver libraries for React rely on the *```ref```* prop, which is ideal for CSR (Client-Side Rendering) components, since it avoids mis-typing errors in code when dealing with element IDs. However, there is no alternative for SSR (Server-Side Rendering) components, so **Remote Observer** means that they can be tracked remotely, regardless of where the observer actually is.

Here's an example:

```js
// "use client"; If using Next.js

import { useObserver } from "react-remote-observer";

function MyComponent() {
    // List of element IDs
    const elements = ["element1", "element2", "element3"/*, ... */];
    // Creates an IntersectionObserver
    useObserver(elements, (entries, observer) => {
        // Do your stuff here
    }, {
        // Options
        threshold: 0
    });
    return (
        <></>
    );
}
```
