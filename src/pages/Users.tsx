import { useEffect } from "react";

import { connect } from 'react-redux';
import { setUsersList }  from '../redux/actionCreators/usersActionCreators.ts'

const Users = ( props: any ) => {
  const {
    usersList,
    setUsersList
  } = props;
  console.log('usersList', usersList);
  useEffect(() => {
    setUsersList([
      {
        id: 3,
        name: 'Pavlo'
      },
      {
        id: 5,
        name: 'Ivan'
      }
    ])
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

const mapStateToProps = (state) => {
  return {
    usersList: state.users.usersList
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUsersList: (usersList: object []) => dispatch(setUsersList(usersList))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);