import { connect } from 'react-redux';
import ChatSession from '../components/ChatScreen/ChatSession';

const mapStateToProps = ({ chat }) => ({
  messages: chat.messages,

});

export default connect(mapStateToProps, null)(ChatSession);
