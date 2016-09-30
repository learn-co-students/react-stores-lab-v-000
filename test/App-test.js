const { shallow, mount } = require('enzyme');
const counterStore = require('../stores/counterStore');
const sinon = require('sinon');
const React = require('react');
const App = require('../components/App');
const actions = require('../actions');

describe('<App />', function () {
  const sandbox = sinon.sandbox.create();
  let ev;

  beforeEach(function () {
    sandbox.stub(counterStore, 'setState');
    sandbox.stub(counterStore, 'getState');
    sandbox.stub(counterStore, 'addListener');

    sandbox.stub(actions);
    ev = { preventDefault: sinon.stub() };
  })

  afterEach(function () {
    sandbox.restore();
  });

  it('should copy initial \"counter\" state from counterStore', function () {
    counterStore.getState.returns(0);
    const wrapper = shallow(<App />);
    expect(wrapper.state()).toEqual({ counter: 0 });
    sinon.assert.calledOnce(counterStore.getState);
  });

  describe('when clicking the .increment button', function () {
    it('should .preventDefault()', function () {
      const wrapper = shallow(<App />);
      wrapper.find('.increment').simulate('click', ev);
      sinon.assert.calledOnce(ev.preventDefault);
    });

    it('should call increment action', function () {
      const wrapper = shallow(<App />);
      wrapper.find('.increment').simulate('click', ev);
      sinon.assert.calledOnce(actions.increment);
      sinon.assert.notCalled(actions.decrement);
    });
  });

  describe('when clicking the .decrement button', function () {
    it('should .preventDefault()', function () {
      const wrapper = shallow(<App />);
      wrapper.find('.decrement').simulate('click', ev);
      sinon.assert.calledOnce(ev.preventDefault);
    });

    it('should call decrement action', function () {
      const wrapper = shallow(<App />);
      wrapper.find('.decrement').simulate('click', ev);
      sinon.assert.calledOnce(actions.decrement);
      sinon.assert.notCalled(actions.increment);
    });
  });

  describe('when component will unmount', function () {
    it('should remove the registered listener', function () {
      const removeListener = sinon.spy();
      counterStore.addListener.returns(removeListener);

      const wrapper = mount(<App />);
      sinon.assert.notCalled(removeListener);

      wrapper.unmount();
      sinon.assert.calledOnce(removeListener);
    });
  });

  describe('when component did mount', function () {
    it('should add listener', function () {
      const wrapper = mount(<App />);
      sinon.assert.calledOnce(counterStore.addListener);
      sinon.assert.calledWithMatch(counterStore.addListener, sinon.match.func);
    });
  });

  describe('when counterStore updates', function () {
    it('should update .counter state', function () {
      const wrapper = mount(<App />);
      const listener = counterStore.addListener.getCall(0).args[0];
      listener(3);
      expect(wrapper.state('counter')).toBe(3);
    });
  });

  describe('.counter', function () {
    it('should render counter state', function () {
      counterStore.getState.returns(3);
      const wrapper = shallow(<App />);
      expect(wrapper.find('.counter').text()).toBe('3');
    });
  });
});
