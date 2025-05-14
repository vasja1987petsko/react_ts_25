import { USERS } from '../actionTypes/users';
import { IUser } from "../../interfaces/users.ts";
export interface IUsersState {
  usersList: IUser[];
}

const initialState: IUsersState  = {
  usersList: [
    {
      id: 1,
      name: 'Taras'
    }
  ]
}

export default (state: IUsersState  = initialState, action) => {
  switch (action.type) {
    case USERS.SET_USERS_LIST:
      return {
        ...state, usersList: [...action.payload]
      }
    default:
      return state
  }
}