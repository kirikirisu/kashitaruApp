import React from 'react';
import RoomList from '../../containers/RoomList';
import ChatSession from '../../containers/ChatSession';
import RoomUsers from '../../containers/RoomUsers';
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
  initializeNewMessage, // ここからアクション
  setNewMessage,
}) => {
  const sendMessage = (event) => {
    event.preventDefault();

    if (newMessage.trim() === '') return;

    currentUser.sendMessage({
      text: newMessage,
      roomId: `${currentRoom.id}`,
    });

    initializeNewMessage(); // ステートのnewMessageを初期化
  };

  const handleInput = (event) => {
    const { value } = event.target;

    setNewMessage(value);
  };

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
        <ul className="chat-messages">
          <ChatSession />
        </ul>
        <footer className="chat-footer">
          <form className="message-form" onSubmit={sendMessage}>
            <input
              ttype="text"
              value={newMessage}
              name="newMessage"
              className="message-input"
              placeholder="Type your message and hit ENTER to send"
              onChange={handleInput}
            />
          </form>
        </footer>
      </section>
      <aside className="sidebar right-sidebar">
        {currentRoom ? (
          <RoomUsers />
        ) : null}
      </aside>
    </div>
  );
};

export default Chat;
