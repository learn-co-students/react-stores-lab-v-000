import counterStore from '../stores/counterStore';
import Store from '../stores/Store';

describe('counterStore', function () {
  it('should be an object', function () {
    expect(typeof counterStore).toBe('object');
  });

  it('should be an instance of class CounterStore', function () {
    expect(counterStore.constructor.name).toBe('CounterStore');
  });

  it('should have initial state of 0', function () {
    expect(counterStore.getState()).toBe(0);
  })
});

describe('CounterStore', function () {
  const CounterStore = counterStore.constructor;

  it('should inherit from Store', function () {
    expect(CounterStore.__proto__).toBe(Store);
  });

  describe('#increment', function () {
    it('should be a function', function () {
      const counterStore = new CounterStore();
      expect(typeof counterStore.increment).toBe('function');
    });

    it('should increment the state by 1', function () {
      const counterStore = new CounterStore(0);
      counterStore.increment();
      expect(counterStore.getState()).toBe(1);
      counterStore.increment();
      expect(counterStore.getState()).toBe(2);
    });
  });

  describe('#decrement', function () {
    it('should be a function', function () {
      const counterStore = new CounterStore();
      expect(typeof counterStore.decrement).toBe('function');
    });

    it('should decrement the state by 1', function () {
      const counterStore = new CounterStore(0);
      counterStore.decrement();
      expect(counterStore.getState()).toBe(-1);
      counterStore.decrement();
      expect(counterStore.getState()).toBe(-2);
    });
  });
});
