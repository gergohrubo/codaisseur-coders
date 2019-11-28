import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

class Toolbar extends Component {
  render() {
    return (
      <div>
        <Link to="/"><p>Homepage</p></Link>
        <Link to="/developers"><p>Developers</p></Link>
        {!this.props.loginDetails.accessToken && <Link to="/login">Log in</Link>}
        {this.props.loginDetails.accessToken && <p>
          Name: {this.props.loginDetails.profile.name} <br />
          Email: {this.props.loginDetails.profile.email} <br />
          Intro: {this.props.loginDetails.profile.intro} <br />
        </p>}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("redux state?", reduxState);
  return {
    loginDetails: reduxState.loginCredentials
  }
}

export default connect(mapStateToProps)(Toolbar);