import { connect } from 'react-redux';
// import { fetchUser, fetchUsers } from '../../actions/user_actions';
import Profile from './profile';
import { openModal } from '../../actions/modal_actions';
import {updateUser} from '../../actions/session_actions';


const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUser],
    users: state.entities.users,
    sessionId: state.session.id,
    user: state.entities.users[ownProps.match.params.userId],
    currentUserId: state.session.id,
    userId: parseInt(ownProps.match.params.userId),
    url: ownProps.location.pathname,
    posts: state.entities.posts,
})

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),  
    updateUser: (user) => dispatch(updateUser(user))
})

export default connect(mSTP, mDTP)(Profile);