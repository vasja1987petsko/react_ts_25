import { useState, useEffect, useRef } from 'react';

const UseRefPreviousValueComponent = () => {
    const [inputValue, setInputValue] = useState('')
    const previousInputValue = useRef('');

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

    console.log('RENDER');
    return (
        <div style={{border: "solid 1px black"}}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div>inputValue: {inputValue}</div>
            <div>previousValue: {previousInputValue.current}</div>
        </div>
    )
}

export default UseRefPreviousValueComponent;
