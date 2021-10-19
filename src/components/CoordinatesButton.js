import React from 'react';

class CoordinatesButton extends React.Component {
    
    handleClick = (event) => {
        const coordinates = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(coordinates);
    }
    render () {
        return <button onClick={this.handleClick}></button>
    }
}

export default CoordinatesButton;
