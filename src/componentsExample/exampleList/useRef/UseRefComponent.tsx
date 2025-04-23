import { useRef, useState } from 'react';

const UseRefComponent = () => {
    const inputElement: any = useRef(null);
    const [message, setMessage ] = useState<string>('');

    const focusInput = () => {
        console.log('inputElement', inputElement);
        inputElement.current.focus();
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('event', event);
        console.log('event.target', event.target);
        console.log('event.target.value', event.target.value);
        setMessage(event.target.value);
    }

    console.log('RENDER', inputElement);
    return (
        <div style={{border: "solid 1px black"}}>
            <input type="text"
                   ref={inputElement}
                   value={message}
                   onChange={handleChange}
            />
            <button onClick={focusInput}>focus input</button>
        </div>
    )
}

export default UseRefComponent;
