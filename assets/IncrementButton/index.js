import React, {PropTypes, Component} from 'react';

import Button from '../Button/index.js';

class IncrementButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    handleClick (e) {
        e.preventDefault();
        this.setState({ counter: this.state.counter+increment});
    }

    render() {
        console.log(this.state.counter);

        return (
            <div>
                <div>Increment Button App Parvez</div>
                <div>Increment Button App</div>
                <div>Increment Button App</div><div>Increment Button App</div>

                <Button localHandleClick={this.handleClick} increment={1} />
                <Button localHandleClick={this.handleClick} increment={5} />
                <Button localHandleClick={this.handleClick} increment={50} />
                <Button localHandleClick={this.handleClick} increment={100} />
                <Result localCounter={this.state.counter} />

            </div>
        )
    }

}

export default IncrementButton;


/*


 import Button from '../button/index.js';
 import BaseComponent from '../src/baseComponent';

 class IncrementButton extends BaseComponent {



 _handleClick(increment) {
 this.setState({counter: this.state.counter + increment});
 }

 render() {

 return (
 <div>
 <div>Increment Button App</div>


 </div>
 )

 }
 */


