import { useCallback, useState } from "react";
import Todos from './Todos'

// interface IProps {
//     user: IUser;
//     messageFromParent?: string;
//     updateMessage: (message: string) => void;
// };


const UseCallbackComponent = () => {

    const [count, setCount ] = useState<number>(0);
    const [todos, setTodos ] = useState(['todo1', 'todo2']);

    const addTodo = useCallback(
      () => setTodos((t) => [...t, 'newTodo']),
      [todos]
    );

    const increase = () => {
        setCount(count + 1);
    };

    console.log('RENDER  UseCallbackComponent ');
    return (
      <div style={{border: "solid 1px black"}}>
          <Todos todos={todos} addTodo={addTodo}/>
          <div>UseCallbackComponent</div>
          <div>count: {count}</div>
          <button onClick={increase}>
              click me
          </button>
      </div>
    )
}

export default UseCallbackComponent;
