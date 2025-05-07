import { USERS } from '../actionTypes/users'

const initialState = {
  usersList: [
    {
      id: 1,
      name: 'Taras'
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS.SET_USERS_LIST:
      return {
        ...state, usersList: [...action.payload]
      }
    default:
      return state
  }
}