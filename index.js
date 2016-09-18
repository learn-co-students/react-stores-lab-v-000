require('./test/index-test.js'); // Leave this in!

const App = require('./components/App');
const React = require('react');
const ReactDOM = require('react-dom');

const $main = document.getElementById('main');
ReactDOM.render(<App />, $main);
