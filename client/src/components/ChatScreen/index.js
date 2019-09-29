import React from 'react';
import RoomList from './RoomList';
import ChatSession from './ChatSession';
import RoomUsers from './RoomUsers';
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
  ...rest // connectToRoom用のアクションたち
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
          <RoomList
            rooms={rooms}
            currentRoom={currentRoom}
            currentUser={currentUser}
            rest={rest}
          />
        ) : null}
      </aside>
      <section className="chat-screen">
        <header className="chat-header">
          {currentRoom ? <h3>{roomName}</h3> : null}
        </header>
        <ul className="chat-messages">
          <ChatSession
            messages={messages}
          />
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
          <RoomUsers
            roomUsers={roomUsers}
          />
        ) : null}
      </aside>
    </div>
  );
};

export default Chat;
