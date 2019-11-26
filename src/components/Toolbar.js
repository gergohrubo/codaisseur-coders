import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Toolbar extends Component {
  render() {
    return (
      <div>
        <Link to="/"><p>Homepage</p></Link>
        <Link to="/developers"><p>Developers</p></Link>
      </div>
    );
  }
}

export default Toolbar;