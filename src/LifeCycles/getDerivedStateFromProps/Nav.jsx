import React, { Component } from "react";

class Nav extends Component {
     render() {
          return (
               <p className='section'>
                    Users:
                    {this.props.users &&
                         this.props.users.map((user, index) => (
                              <label key={user}>
                                   <input
                                        type='radio'
                                        name='user'
                                        checked={index === this.props.selected}
                                        onChange={() =>
                                             this.props.selectUserHandler(index)
                                        }
                                   />
                                   {user}
                              </label>
                         ))}
               </p>
          );
     }
}

export default Nav;
