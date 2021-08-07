# Setting up Firebase

(Integrating Firebase docs)[https://firebase.google.com/docs/web/setup?authuser=0]

```terminal
$ yarn add firebase
```

# Implement react-toastify for quick message alerts

(React-Toastify docs on NPM)[https://www.npmjs.com/package/react-toastify]

# withRouter

Will inject props normally passed down by <Route /> to it's component, even though it's not linked, or in other words, a direct child of the route in routes.

To use it, use it as a composed component so it will inject all the props into whatever it's wrapping. So it's good for passing props to something that is not a direct child.

```js
export default withRouter(AdminNav)
```

# react-move - tools to perform the animation

animation library

[docs](https://react-move.js.org/#/)

# d3-ease

but we still need to get easings, so we'll grab the [**d3-ease** library](https://www.npmjs.com/package/d3-ease)
