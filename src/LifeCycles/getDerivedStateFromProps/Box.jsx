import React, { Component } from "react";

class Box extends Component {
     constructor(props) {
          super(props);
          this.state = {
               user: [],
               prevPropsUserId: null,
          };
     }

     //  static getDerivedStatesFromProps(nextProps, prevState) {
     //       if (nextProps.userId !== prevState.prevPropsUserId) {
     //            return {
     //                 user: null,
     //                 prevPropsUserId: nextProps.userId,
     //            };
     //       }
     //       return null;
     //  }

     componentDidMount() {
          this.getUserHandler(this.props.userId).then((user) =>
               this.setState({ user })
          );
     }

     //  componentDidUpdate(prevProps) {
     //       if (prevProps.userId !== this.props.userId) {
     //            this.getUserHandler(this.props.userId).then((user) =>
     //                 this.setState({ user })
     //            );
     //       }
     //  }

     async getUserHandler(userId) {
          const response = await fetch(
               `https://jsonplaceholder.typicode.com/users/${userId}`
          );
          return await response.json();
     }

     render() {
          const { user } = this.state;
          return (
               <>
                    {user && (
                         <div className='section'>
                              <p>id: {user.id}</p>
                              <p>name: {user.name}</p>
                              <p>username: {user.username}</p>
                              <p>email: {user.email}</p>
                              <p>phone: {user.phone}</p>
                         </div>
                    )}
               </>
          );
     }
}

export default Box;
