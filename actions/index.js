import counterStore from '../stores/counterStore';

const increment = () => {
  counterStore.increment();
};

const decrement = () => {
  counterStore.decrement();
};

export default {
  increment,
  decrement
};
