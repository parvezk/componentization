import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';

class Button extends Component {

    constructor(props) {
        super(props);
        this.localHandleClick = this.localHandleClick.bind(this)
    }

    localHandleClick() {
        this.props.localHandleClick(this.props.increment);
    }

    render() {
        return (
            <button className="button-" onClick={this.localHandleClick}>+{this.props.increment}</button>
        )
    }
};

export default Button;