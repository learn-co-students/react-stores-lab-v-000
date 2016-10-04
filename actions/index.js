const counterStore = require('../stores/counterStore');

const increment = () => {
  counterStore.increment();
};

const decrement = () => {
  counterStore.decrement();
};

module.exports = {
  increment,
  decrement

};
