import { connect } from 'react-redux';
import ChatSession from '../Component/chatScreenComponent/ChatSession';

const mapStateToProps = ({ chat }) => ({
  messages: chat.messages,

});

export default connect(mapStateToProps, null)(ChatSession);
