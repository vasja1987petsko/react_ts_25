import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces/users'

export interface IUsersState {
    usersList: IUser[];
}

const initialState: IUsersState = {
    usersList: [
        {
            id: 1,
            name: 'Taras'
        }
    ]
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsersList: (state: IUsersState, action: PayloadAction<IUser []> ) => {
            state.usersList = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    setUsersList,
    // createUsers,
    // deleteUser
} = usersSlice.actions

export default usersSlice.reducer