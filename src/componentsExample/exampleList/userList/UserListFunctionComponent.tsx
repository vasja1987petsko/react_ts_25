import { useState } from "react";
import UserFunctionComponent from "./UserFunctionComponent.tsx";

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

const UserListFunctionComponent = () => {
    const [ messageFromChild, setMessageFromChild ] = useState('');

    const updateMessage = (message: string): void => {
        setMessageFromChild(message);
    }

    return (
        <div>
            <div> FunctionalUserList</div>
            <div><b>Повідомлення з дочірнього компонента:</b> {messageFromChild} </div>
            {
                users.map((user) => {
                    return (
                        <UserFunctionComponent
                            key={user.id}
                            user={user}
                            updateMessage={updateMessage}
                        />
                    )
                })
            }
        </div>
    )
}

export default UserListFunctionComponent;
