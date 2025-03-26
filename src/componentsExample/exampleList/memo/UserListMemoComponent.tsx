import { useState } from "react";
import UserMemoComponent from "./UserMemoComponent";

import { IUser } from "../../../interfaces/example/users";

const users: IUser [] = [
    {
        id: 1,
        name: 'Ivan'
    },
    {
        id: 2,
        name: 'Taras'
    },
]

const UserListMemoComponent = () => {
    const [ messageFromChild, setMessageFromChild ] = useState('');

    const updateMessage = (message: string): void => {
        setMessageFromChild(message);
    }
    console.log('RENDER  UserListMemoComponent ');
    return (
        <div>
            <div> FunctionalUserList</div>
            <div><b>Повідомлення з дочірнього компонента:</b> {messageFromChild} </div>
            {
                users.map((user) => {
                    return (
                        <UserMemoComponent
                            key={user.id}
                            user={user}
                            updateMessage={updateMessage}
                            messageFromParent={'повідомлення'}
                        />
                    )
                })
            }
        </div>
    )
}

export default UserListMemoComponent;
