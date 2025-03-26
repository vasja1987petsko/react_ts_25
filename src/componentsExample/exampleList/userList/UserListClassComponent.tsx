import { PureComponent } from "react";
import UserClassComponent from "./UserClassComponent";

import { IUser } from "../../../interfaces/example/users";

interface IState {
    messageFromChild: string;
}

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

class UserListClassComponent extends PureComponent<unknown, IState> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            messageFromChild: ''
        }
    }

    changeMessage = (message: string) => {
        this.setState({messageFromChild: message})
    }
    render() {
        return(
            <div>
                <div> UserClassList </div>
                <div><b>Повідомлення з дочірнього компонента:</b> {this.state.messageFromChild} </div>
                {
                    users.map((user) => {
                        return(
                            <UserClassComponent
                                key={user.id}
                                user={user}
                                changeMessage={this.changeMessage}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default UserListClassComponent;