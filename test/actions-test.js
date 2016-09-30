const actions = require('../actions');
const sinon = require('sinon');
const counterStore = require('../stores/counterStore');

describe('actions', function () {
  const sandbox = sinon.sandbox.create();

  beforeEach(function () {
    sandbox.stub(counterStore, 'increment');
    sandbox.stub(counterStore, 'decrement');
  })

  afterEach(function () {
    sandbox.restore();
  });

  describe('#increment', function () {
    it('should be a function', function () {
      expect(typeof actions.increment).toBe('function');
    });

    it('should call counterStore.increment', function () {
      actions.increment();
      sinon.assert.calledOnce(counterStore.increment);
    });
  });

  describe('#decrement', function () {
    it('should be a function', function () {
      expect(typeof actions.decrement).toBe('function');
    });

    it('should call counterStore.decrement', function () {
      actions.decrement();
      sinon.assert.calledOnce(counterStore.decrement);
    });
  });
});
