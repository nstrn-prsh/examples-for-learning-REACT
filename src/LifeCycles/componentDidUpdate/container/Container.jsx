import React, { Component } from "react";
import Post from "./Post";
import Comments from "./Comments";

class Container extends Component {
     state = {
          comments: [],
     };

     async handleComment() {
          const response = await fetch(
               `http://localhost:4000/comments?post-id=${this.props.postIndex.id}`
          );
          return await response.json();
     }

     setComments() {
          this.handleComment().then((comments) => this.setState({ comments }));
     }

     componentDidMount() {
          if (this.props.postIndex) this.setComments();
     }

     componentDidUpdate(pervProps) {
          if (pervProps.postIndex.id !== this.props.postIndex.id)
               this.setComments();
     }

     render() {
          return (
               <div className='container'>
                    <Post postIndex={this.props.postIndex} />
                    <Comments commentIndex={this.state.comments} />
               </div>
          );
     }
}

export default Container;
