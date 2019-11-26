import React, { Component } from 'react';

class Developer extends Component {
  render() {
    return (
      <div>
        {this.props.devData.name}
      </div>
    );
  }
}

export default Developer;