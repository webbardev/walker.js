# walker.js react example

Here is an example of a possible walker.js setup with React.
It’s a SaaS landing page where we want to know more about the general usage of the pages as well as the signup and pricing discovery behavior.

## Setup and helper function

Using the walker.js with a SPA requires activating the **custom mode** to disable auto events (set `data-custom=“true”` on the walker script element).
We also use a short helper function to push events to the walker.js

```js
function walker() {
  (window.elbLayer = window.elbLayer || []).push(arguments);
}
```

We're using `console.log` as our default destination (see public/index.html:23).

## Trigger page views

We need to set up the typical page view behavior. Therefore we’re pushing the `walker run` event each time the location changes.

The `walker run` command reinitializes the state but keeps all walker configurations. It’s just like a new page view.

This example uses version 6 of react-router-dom with useLocation.
Update your Routes file with a `useEffect` on the `useLocation` (./src/app.js here).

```js
const location = useLocation();
React.useEffect(() => {
  walker(‘walker run’);
}, [location]);
```

> Note when using `React.StrictMode` the initial walker run is called twice due to mounting, unmounting & remounting again. But only in dev mode.

## Events

Here we have the entities `page`, `account`, `pricing` & `cta`.
While a page can be _viewed_ and _read_ the app events are considered as core events on this page and appear on multiple sites like the cta that serves as a fictional promoter to encourage a new signup. The pricing actions are great for targeted remarketing since a freelancer requires another messaging than an enterprise visitor. The detailed requests are also a great source for product or sales teams.

We use a light [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) approach to demonstrate how to set up actions automatically using granular components.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The layout is based on components made by [Tailwind UI](https://tailwindui.com/).
