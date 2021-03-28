import React, { Component } from "react";
import Chat from "./Chat";

export default class Body extends Component {
     chatListsWrapper = React.createRef();

     getSnapshotBeforeUpdate(prevProps, prevState) {
          if (prevProps.chatsList.length !== this.props.chatsList.length) {
               return this.chatListsWrapper.current.scrollHeight;
          }

          return null;
     }

     componentDidUpdate(prevProps, prevState, snapshot) {
          if (null !== snapshot) {
               const wrapper = this.chatListsWrapper.current;

               wrapper.scrollTop = wrapper.scrollHeight - snapshot;
          }
     }

     render() {
          const chats = this.props.chatsList.map((chat, index) => {
               const isLeft = "receive" === chat.type;
               return (
                    <Chat
                         key={chat.id}
                         time={chat.time}
                         message={chat.message}
                         gravatar={
                              isLeft
                                   ? this.props.gravatars.user2
                                   : this.props.gravatars.user1
                         }
                         isLeft={isLeft}
                    />
               );
          });

          return (
               <div
                    ref={this.chatListsWrapper}
                    onScroll={this.props.handelScroll}
                    className='panel-body chats'
               >
                    {chats}
               </div>
          );
     }
}
