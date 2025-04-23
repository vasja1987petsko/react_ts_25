import { useReducer } from 'react';

interface IState {
    count: number;
    additionalValue?: number;
};

const initialState: IState = {
    count: 0,
    additionalValue: 0
};

function reducer(state: IState, action: { type: string, payload?: any}) {
    switch (action.type) {
        case 'increment':
            return {  ...state, count: state.count + 1, additionalValue: action.payload }
        case 'decrement':
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}

const UseReducerComponent = () => {

    const [state, dispath ] = useReducer(reducer, initialState);


    return (
        <div style={{border: "solid 1px black"}}>
            <div>UseReducerComponent</div>
            <div>Count: {state.count} </div>
            <div>additionalValue: {state.additionalValue} </div>
            <button onClick={() => dispath({type: 'increment', payload: 34})}>+</button>
            <button onClick={() => dispath({type: 'decrement'})}>-</button>
        </div>
    )
}

export default UseReducerComponent;
