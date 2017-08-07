import { connect } from 'react-redux';
import Users from '../components/users';
import { fetchUsers, editUser, addUser, deleteUser } from '../actions/users';

const mapStateToProps = (state) => ({
  data: state.usersReducer
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers())
    },
    editUser: (params) => {
      dispatch(editUser(params))
    },
    addUser: (params) => {
      dispatch(addUser(params))
    },
    deleteUser: (params) => {
      dispatch(deleteUser(params))
    }
  }
}

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users)

export default UsersContainer;