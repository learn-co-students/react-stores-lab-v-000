const Store = require('../stores/Store');
const sinon = require('sinon');

describe('Store', function () {
  it('should be a class', function () {
    expect(typeof Store).toBe('function');
    const store = new Store();
    expect(store.constructor).toBe(Store);
  });

  describe('constructor', function () {
    it('should set initial state', function () {
      const initialState = 'initial state';
      const store = new Store(initialState);
      expect(store.getState()).toBe(initialState);
    });

    it('should be initialized listeners as empty array', function () {
      const store = new Store();
      expect(store.listeners).toEqual([]);
    });
  });

  describe('#addListener', function () {
    it('should be a function', function () {
      const store = new Store();
      expect(typeof store.addListener).toBe('function');
    });

    it('should return removeListener function', function () {
      const listener = Function.prototype;
      const store = new Store();
      const removeListener = store.addListener(listener);
      expect(typeof removeListener).toBe('function');
    });

    describe('#removeListener', function () {
      it('should unregister listener when called', function () {
        const listeners = [sinon.spy(), sinon.spy(), sinon.spy()];
        const store = new Store();
        const removeListeners = listeners
          .map(listener => store.addListener(listener));

        store.setState(0);

        sinon.assert.calledOnce(listeners[0]);
        sinon.assert.calledOnce(listeners[1]);
        sinon.assert.calledOnce(listeners[2]);

        // Remove second event listener.
        removeListeners[1]();

        store.setState(1);
        sinon.assert.calledTwice(listeners[0]);
        sinon.assert.calledOnce(listeners[1]);
        sinon.assert.calledTwice(listeners[2]);
      });
    })
  });

  describe('#setState', function () {
    it('should be a function', function () {
      const store = new Store();
      expect(typeof store.setState).toBe('function');
    });

    it('should update state', function () {
      const store = new Store();
      const newState = 'new state';
      store.setState(newState);
      expect(store.state).toBe(newState);
    });

    it('should call all listener functions with state', function () {
      const store = new Store();
      const listeners = [
        sinon.spy(),
        sinon.spy(),
        sinon.spy()
      ];
      const newState = 'new state';
      listeners.forEach(listener => {
        store.addListener(listener);
      });
      store.setState(newState);
      listeners.forEach(listener => {
        sinon.assert.calledWith(listener, newState);
      });
    });
  });

  describe('#getState', function () {
    it('should be a function', function () {
      const store = new Store();
      expect(typeof store.getState).toBe('function');
    });

    it('should return state', function () {
      const state = 'state';
      const store = new Store(state);
      expect(store.getState()).toBe(state);
    });
  });
});
