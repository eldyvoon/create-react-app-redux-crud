// Promise
// pending
// fulfilled
// rejected
const initalState = {
  users: [],
  loading: false,
  error: null,
}

// REDCUER
function usersReducer(state = initalState, action) {
  switch (action.type) {
    case 'FETCH_USER_PENDING':
      return { ...state, loading: true }
    case 'FETCH_USER_FULFILLED':
      return { ...state, loading: false, users: action.payload.result }
    case 'FETCH_USER_REJECTED':
      return { ...state, loading: false, error: `${action.payload.result}` }


    case 'ADD_USER_PENDING':
      return { ...state, loading: true }
    case 'ADD_USER_FULFILLED':
      return { ...state, loading: false, users: [action.payload.result, ...state.users], addedUser: true }
    case 'ADD_USER_REJECTED':
      return { ...state, loading: false, error: `${action.payload.result}` }
    

    case 'EDIT_USER_PENDING':
      return { ...state, loading: true }
    case 'EDIT_USER_FULFILLED':
      const updatedUsers = state.users.map(user => {
        return user._id === action.payload.result._id ? 
        Object.assign({}, action.payload.result) : user
      })
      return { ...state, loading: false, users: updatedUsers}
    case 'EDIT_USER_REJECTED':
      return { ...state, loading: false, error: `${action.payload.result}` }


      case 'DELETE_USER_PENDING':
        return { ...state, loading: true }
      case 'DELETE_USER_FULFILLED':
        return { ...state, loading: false, users: state.users.filter(user => user._id !== action.payload.result._id)}
      case 'DELETE_USER_REJECTED':
        return { ...state, loading: false, error: `${action.payload.result}` }

    default:
      return state
  }
}

export default usersReducer
