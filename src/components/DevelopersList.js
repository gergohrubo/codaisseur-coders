import React from "react";
import { connect } from "react-redux";
import api from "../api";
import Developer from './Developer'
import { fetchDevelopers } from '../actions/developers'

// The "unconnected" inner component:
class DevelopersList extends React.Component {
  componentDidMount() {
    // Do the data fetch...
    this.props.dispatch(fetchDevelopers)
  }
  render() {
    const loading = !this.props.devs;
    return (
      <div>
        <h1>Codaisseur developers</h1>
        {
          loading
            ? <p>Loading...</p>
            : <div><p>We have {this.props.devs.count} developers!</p>
              {this.props.devs.rows.map(row => <Developer devData={row} />)}</div>
        }
      </div>
    )
  }
}
function mapStateToProps(reduxState) {
  // console.log("redux state?", reduxState);
  return {
    devs: reduxState.developers
  }
}
// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(DevelopersList);