import { PureComponent } from "react";
import { IUser } from "../../../interfaces/example/users";

interface IState {
    count: number;
    message: string;
    user: IUser;
}

interface IProps {
    user: IUser;
    changeMessage: (message: string) => void;
}

class UserClassComponent extends PureComponent<IProps, IState> {
    // static getDerivedStateFromProps(props: IProps, state: IState) {
    //     console.log('getDerivedStateFromProps');
    //     console.log('state:', state);
    //     console.log('props:', props);
    //     if(props.user.name !== state.user.name) {
    //         return {
    //             ...state,
    //             user:{
    //                 name: props.user.name
    //             }
    //         }
    //     }
    //     return null;
    // }

    constructor(props: IProps) {
        console.log('constructor UserClassComponent');
        super(props);
        this.state = {
            count: 0,
            message: '',
            user: props.user
        }
    }

    // componentDidMount() {
    //     console.log('componentDidmount');
    //     console.log('state:', this.state);
    //     console.log('props:', this.props);
    // }
    // shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<IState>, nextContext: any): boolean {
    //   console.log('shouldComponentUpdate');
    //   console.log(' nextProps:',  nextProps);
    //   console.log('props:', this.props);
    //   console.log('nextState', nextState);
    //   console.log('state:', this.state);
    //   return true;
    // }
    //
    // getSnapshotBeforeUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>): any {
    //     console.log('getSnapshotBeforeUpdate');
    //     return {
    //         state: this.state
    //     }
    // }
    //
    // componentDidUpdate(prevProps: IProps, prevState: IState, snapshot: any) {
    //     console.log('componentDidUpdate');
    //     console.log(' prevState:',  prevState);
    //     console.log('state:', this.state);
    //     console.log('prevProps:', prevProps);
    //     console.log('props:', this.props);
    //     console.log('snapshot:', snapshot);
    //
    // }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    handleChange = (event: any) => {
        this.setState({ message: event.target.value })
    }

    sendDataToParentComponent = (event) => {
        event.preventDefault();
        this.props.changeMessage(this.state.message)
    }

    render() {
        console.log('render UserClassComponent');
        const { user } = this.props
        return(
          <div style={{border: "solid 1px black"}}>
            <div> UserClassComponent: name - {user.name} </div>
            <div> кількість кліків: {this.state.count} </div>
            <button onClick={this.handleClick}>
              click me
            </button>
            <form onSubmit={this.sendDataToParentComponent}>
              <input type="text"
                     value={this.state.message}
                     onChange={this.handleChange}
              />
              <button type="submit">
                send
              </button>
            </form>
          </div>
        )
    }
}

export default UserClassComponent;