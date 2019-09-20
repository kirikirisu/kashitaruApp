import React from 'react';
import RoomList from '../../containers/RoomList';
import './style.css';

const Chat = ({
  userId,
  showLogin,
  rooms,
  currentRoom,
  currentUser,
  messages,
  newMessage,
  roomUsers,
  roomName,
}) => {
  return (
    <div className="App">
      <aside className="sidebar left-sidebar">
        {currentUser ? (
          <div className="user-profile">
            <span className="username">{currentUser.name}</span>
            <span className="user-id">{`@${currentUser.id}`}</span>
          </div>
        ) : null}
        {currentRoom ? (
          <RoomList />
        ) : null}
      </aside>
      <section className="chat-screen">
        <header className="chat-header">
          {currentRoom ? <h3>{roomName}</h3> : null}
        </header>
        <ul className="chat-messages"></ul>
        <footer className="chat-footer">
          <form className="message-form">
            <input
              type="text"
              name="newMessage"
              className="message-input"
              placeholder="Type your message and hit ENTER to send"
            />
          </form>
        </footer>
      </section>
      <aside className="sidebar right-sidebar"></aside>
    </div>
  );
};

export default Chat;
