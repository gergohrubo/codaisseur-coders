import React from "react";

class PostPage extends React.Component {
  componentDidMount() {
    const post_id = this.props.match.params.id;
    console.log("Now let's fetch this post:", post_id);
  }

  render() {
    const title = "??";

    return (
      <div>
        <h1>{title}</h1>
        <p>Loading...</p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(PostPage);