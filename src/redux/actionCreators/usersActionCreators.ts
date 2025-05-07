import { USERS } from '../actionTypes/users'

export const setUsersList = ( usersList: object []) => {
  return {
    type: USERS.SET_USERS_LIST,
    payload: usersList
  }
}