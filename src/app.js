/*  global document*/

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 10,
    };
  }

  handleInputChange = () => {
    const current = this.state.counter;
    return current;
  }

  static get handler() {
    return ' static handler here 2 <h2>HTML TAG</h2>';
  }

  render() {
    const hello = ' world there &reg;';
    return (
        <div>
          {hello}
          {this.state.counter}
          {App.handler}
          {this.handleInputChange()}
        </div>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
