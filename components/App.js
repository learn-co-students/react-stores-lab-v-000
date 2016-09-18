const React = require('react');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // Your implementation here.
    };
  }
  componentDidMount () {
    // Your implementation here.
  }
  componentWillUnmount () {
    // Your implementation here.
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'></h1>
        <button className='increment'>+</button>
        <button className='decrement'>-</button>
      </div>
    );
  }
}

module.exports = App;
