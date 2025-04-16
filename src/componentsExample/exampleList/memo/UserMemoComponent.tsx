import { useEffect, useState, memo} from "react";
import { IUser } from "../../../interfaces/example/users";

interface IProps {
    user: IUser;
    messageFromParent?: string;
    updateMessage: (message: string) => void;
};

const arePropsEqual = (prevProps: IProps, nextProps: IProps) => {
    return(
      prevProps.messageFromParent === nextProps.messageFromParent &&
      prevProps.user.name === nextProps.user.name
    );
    // return true // don't need rerender
    // return false // need rerender
}
const UserMemoComponent = (props: IProps) => {
    const { user } = props;

    const [count, setCount ] = useState<number>(0);
    const [message, setMessage ] = useState<string>('ddfdf');
    // const [todos, setTodos ] = useState(['todo1', 'todo2']);

    // useEffect(() => {
    //     console.log('useEffect1',count);
    //     document.title = `кількість кліків ${count}`;
    //     return function (){
    //         console.log('componentWillUnmount', count);
    //     }
    //     //
    // }, [count]);
    //
    // useEffect(() => {
    //     console.log('useEffect2', message);
    //     //
    // }, [message]);

    const increase = () => {
        setCount(count + 1);
    };

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        props.updateMessage(message);
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }
    console.log('RENDER  UserMemoComponent ');
    return (
      <div style={{border: "solid 1px black"}}>
          {/*<Todos todos={todos}/>*/}
          <div>UserFunctionalComponent</div>
          <div>Name: {user.name}</div>
          <div> кількість кліків: {count} </div>
          <button onClick={increase}>
              click me
          </button>
          {/*<button onClick={() => setTodos(['todo2', 'todo3'])}>*/}
          {/*    set new todos*/}
          {/*</button>*/}
          <form onSubmit={handleSubmit}>
              <input type="text"
                     value={message}
                     onChange={handleChange}
              />
              <button type="submit">
                  Надіслати у батьківський компонент
              </button>
          </form>
      </div>
    )
}

export default memo(UserMemoComponent, arePropsEqual);
