import { connect } from 'react-redux';
import ProfilePage from '../Component/profilePageScreen';

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    store: state,
  };
};

export default connect(mapStateToProps, null)(ProfilePage);
