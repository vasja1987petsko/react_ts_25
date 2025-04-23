import { useRef } from 'react';

const UseRefComponent = () => {
    const inputElement: any = useRef(null);

    const focusInput = () => {
        console.log(inputElement);
        inputElement.current.focus();
    }

    console.log('RENDER');
    return (
        <div style={{border: "solid 1px black"}}>
            <input type="text" ref={inputElement}/>
            <button onClick={focusInput}>focus input</button>
        </div>
    )
}

export default UseRefComponent;
