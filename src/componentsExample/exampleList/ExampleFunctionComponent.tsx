import React, { useEffect, useState} from "react";

const ExampleFunctionComponent = () => {

    const [count, setCount ] = useState(0);

    useEffect(() => {
        // Runs on the first render
        // And any time any dependency value changes
        console.log('useEffect cont', count);
        document.title = `кількість кліків ${count}`;
        return function (){
            console.log('Effect Cleanup (similar as componentWillUnmount for classComponent)', count);
        }
    }, [count]);

    useEffect(() => {
        console.log('Runs only on the first render');
    }, []);

    useEffect(() => {
        console.log('Runs on every render');
    }, []);

    const increase = () => {
        setCount(count + 1);
    };

    console.log('RENDER ExampleComponent');
    return (
      <div style={{border: "solid 1px black"}}>
          <div>ExampleFunctionComponent</div>
          <div> кількість кліків: {count} </div>
          <button onClick={increase}>
              click me
          </button>
      </div>
    )
}

export default ExampleFunctionComponent;
