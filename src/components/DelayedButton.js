import React from 'react';

class DelayedButton extends React.Component {
    
    handleClick = (event) => {
        const persistedEvent = event;
        setTimeout(this.props.onDelayedClick(persistedEvent), this.props.delay);
    }
    render() {
        return <button onClick={this.handleClick}></button>
    }
}

export default DelayedButton;
