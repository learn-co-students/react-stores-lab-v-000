# React Stores Lab

## Objectives

1. Practice using stores to keep state
2. Describe how stores and actions interact
3. Describe how components and stores interact
4. Describe how the user interacts with components

## Overview

In this lesson we're going implement a simple `<Counter />` component. We're
going to focus on the stores and actions while building this application.

There are two stores: `Store` and `CounterStore`. `CounterStore` inherits from
`Store`.

The global application state that we're updating is a simple counter,
represented by a number.

Our `<App />` component renders tow buttons and the actual counter number. If
we click on `+`, the counter will be incremented by `1`. If we click `-`, the
counter will be decremented by `1`.

There are two actions: `increment()` and `decrement()`.

**Advanced** For now we're using `setState` on stores to trigger a global state
change. Later on we're going to introduce a dispatcher in order to introduce an
isolated event bus.

## Resources

- [React: Multiple Components](https://facebook.github.io/react/docs/multiple-components.html)
