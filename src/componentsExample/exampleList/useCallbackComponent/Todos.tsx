import { memo } from 'react';
interface ITodosProps {
  todos: string [];
  addTodo: () => void;
}
const Todos = ({ todos, addTodo }: ITodosProps ) => {
  console.log('render Todos', todos);
  return(
    <div>
      {
        todos.map((todo: string, index: number) => {
          return <div key={index}>{todo}</div>
        })
      }
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )

}

export default memo(Todos);