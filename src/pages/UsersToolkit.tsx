import { useEffect, memo, JSX } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../store";


import { setUsersList }  from '../store/users/usersSlice';

const Users = () => {
  const usersList = useSelector((state: RootState) => state.users.usersList);
  const dispatch = useDispatch()
  console.log('usersList', usersList);
  useEffect(() => {
    dispatch(
      setUsersList([
        {
          id: 3,
          name: 'Pavlo'
        },
        {
          id: 5,
          name: 'Ivan'
        },
        {
          id: 6,
          name: 'Taras'
        }
      ])
    )
  }, [])

  return(
    <div>
      {
        usersList.map((user: any) => {
          return(
            <div>
              {user.id} : {user.name}
            </div>
          )
        })
      }
    </div>
  )
}

export default memo(Users);