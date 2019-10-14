import { connect } from 'react-redux';
import ProfilePage from '../components/ProfileScreen';


const mapStateToProps = ({ profile, user }) => ({
  id: user.userInfor.id,
  name: user.userInfor.name,
  isLogin: user.isLogin,
  profileIsFetching: profile.profileIsFetching,
  user: profile.user,
  product: profile.product,
});

export default connect(mapStateToProps, null)(ProfilePage);
