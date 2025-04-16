import { useMemo, useState } from "react";

const expensiveCalculation = (num: number) => {
  console.log('calculation');
  for(let i = 0; i < 1000000000; i++) {
    num  = num +1;
  }
  return num;
}

const UseMemoComponent = () => {

    const [count, setCount ] = useState<number>(0);
    const [todos, setTodos ] = useState(['todo1', 'todo2']);

    const addTodo =  () => setTodos((t) => [...t, 'newTodo']);

    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increase = () => {
        setCount(count + 1);
    };

    console.log('RENDER  UseMemoComponent');
    return (
      <div style={{border: "solid 1px black"}}>
        {
          todos.map((item, index) => {
            return <div key={index}>{item}</div>
          })
        }
        <button onClick={addTodo}>
          addTodo
        </button>
        <div>UseMemoComponent</div>
        <div>count: {count}</div>
        <button onClick={increase}>
            increase
        </button>
        <div>calculation: {calculation}</div>
      </div>
    )
}

export default UseMemoComponent;
