import React from 'react';

class Increment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  static newHandler() {
    console.log('handler here');
  }

  render() {
    const hello = 'there only';
    return (
        <div>
            <div>{hello + this.state.counter}</div>
          {this.newHandler()}
        </div>
    );
  }
}

export default Increment;
