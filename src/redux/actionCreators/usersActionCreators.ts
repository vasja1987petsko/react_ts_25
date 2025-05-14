import { USERS } from '../actionTypes/users'

export const setUsersList = ( usersList: object []) => {
  return {
    type: USERS.SET_USERS_LIST,
    payload: usersList
  }
}

export const deleteUser = (id: number) => {
  return {
    type: USERS.DELETE_USER,
    payload: {
      id
    }
  }
}

export const updateUser = (id: number, user: object) => {
  return {
    type: USERS.UPDATE_USER,
    payload: {
      id,
      user
    }
  }
}

export const createUser = (user: object) => {
  return {
    type: USERS.CREATE_USER,
    payload: {
      user
    }
  }
}