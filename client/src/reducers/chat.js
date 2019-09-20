import {
  ADD_ROOM,
  SET_CURRENT_USER,
  SET_ROOMS,
  SET_MESSAGES,
  INITIALIZE_MESSAGE,
  ON_PRESENCE_CHANGED,
  SET_ROOM_USERS,
  SET_ROOM_NAME,
  SET_CURRENT_ROOM,
} from '../constants/actionTypes';

const initialState = {
  chat: {
    userId: '',
    showLogin: true,
    isLoading: false,
    currentUser: null,
    currentRoom: null,
    rooms: [],
    roomUsers: [],
    roomName: null,
    messages: [],
    newMessage: '',
  },
};

const chatReducer = (state = initialState.chat, action) => {
  switch (action.type) {
    case ADD_ROOM:
      return {
        ...state,
        rooms: [...state.rooms, action.room],
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser,
      };
    case SET_ROOMS:
      return {
        ...state,
        rooms: action.rooms,
      };
    case SET_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    case INITIALIZE_MESSAGE:
      return {
        ...state,
        messages: [],
      };
    case SET_ROOM_USERS:
      return {
        ...state,
        roomUsers: action.roomUser,
      };
    case SET_ROOM_NAME:
      return {
        ...state,
        roomName: action.roomName,
      };
    case SET_CURRENT_ROOM:
      return {
        ...state,
        currentRoom: action.currentRoom,
      };
    case ON_PRESENCE_CHANGED:
      return {
        ...state,
        roomUsers: action.currentRoom.users.sort((a) => {
          if (a.presence.state === 'online') return -1;

          return 1;
        }),
      };
    default:
      return state;
  }
};

export default chatReducer;
