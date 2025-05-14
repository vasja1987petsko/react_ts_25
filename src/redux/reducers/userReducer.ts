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
    case USERS.CREATE_USER:
    {
      const id = new Date().getTime();
      return {
        ...state, usersList: [...state.usersList, {id, ...action.payload.user}]
      };
    }
    case USERS.DELETE_USER:
    {
      const usersList = state.usersList.filter((user: object) => {
        if (user.id === action.payload.id) {
          return false;
        }
        return true;
      });
      return {
        ...state, usersList: [...usersList]
      };
    }
    case USERS.UPDATE_USER:
    {
      const usersList = state.usersList.map((user: object) => {
        if (user.id === action.payload.id) {
          user = action.payload.user;
        }
        return user;
      });
      return {
        ...state, usersList: [...usersList]
      };
    }

    default:
      return state
  }
}