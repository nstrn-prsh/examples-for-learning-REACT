import React, { Component } from "react";
import Aside from "./aside/Aside";
import Container from "./container/Container";
import "./posts.css";

class Posts extends Component {
     constructor(props) {
          super(props);
          this.state = {
               posts: [],
               currentPost: null,
          };

          this.handleCurrentPost = this.handleCurrentPost.bind(this);
     }

     async getPosts() {
          const response = await fetch("http://localhost:4000/posts");
          return await response.json();
     }

     componentDidMount() {
          this.getPosts().then((posts) =>
               this.setState({ posts, currentPost: 0 })
          );
     }

     handleCurrentPost(index) {
          this.setState({ currentPost: index });
     }

     render() {
          return (
               <>
                    <Aside
                         posts={this.state.posts}
                         handleCurrentPost={this.handleCurrentPost}
                    />
                    {null !== this.state.currentPost && (
                         <Container
                              postIndex={
                                   this.state.posts[this.state.currentPost]
                              }
                         />
                    )}
               </>
          );
     }
}
// {/* database.json */}

export default Posts;
