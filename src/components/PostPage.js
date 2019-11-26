import React from "react";
import { connect } from "react-redux";
import { fetchPost } from '../actions/slice'
import ReactMarkdown from "react-markdown"

class PostPage extends React.Component {
  componentDidMount() {
    const post_id = this.props.match.params.id;
    const thunk = fetchPost(post_id)
    this.props.dispatch(thunk)
  }

  render() {
    const title = "??";
    { this.props.fetchedPost && console.log('from the component file, post:', this.props.fetchedPost) }
    { this.props.fetchedComments.length > 0 && console.log('from the component file, comments:', this.props.fetchedComments) }

    return (
      <div>
        <ReactMarkdown source={this.props.fetchedPost && this.props.fetchedPost.title} />
        <ReactMarkdown source={this.props.fetchedPost && this.props.fetchedPost.content} />
        {this.props.fetchedComments.length > 0 && this.props.fetchedComments.map(comment => {
          return <ReactMarkdown source={comment.text} />
        })}
        <p>Loading...</p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    fetchedPost: reduxState.post.post,
    fetchedComments: reduxState.post.comments
  };
}

export default connect(mapStateToProps)(PostPage);