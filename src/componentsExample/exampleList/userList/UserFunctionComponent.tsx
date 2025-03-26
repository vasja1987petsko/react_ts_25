import { useEffect, useState } from "react";
import { IUser } from "../../../interfaces/example/users"

interface IProps {
    user: IUser;
    updateMessage: (message: string) => void;
};

const UserFunctionComponent = (props: IProps) => {
    const { user } = props;

    const [count, setCount ] = useState<number>(0);
    const [message, setMessage ] = useState<string>('ddfdf');

    useEffect(() => {
        console.log('useEffect1',count);
        document.title = `кількість кліків ${count}`;
        return function (){
            console.log('componentWillUnmount', count);
        }
        //
    }, [count]);

    useEffect(() => {
        console.log('useEffect2', message);
        //
    }, [message]);

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
    console.log('RENDER');
    return (
        <div style={{border: "solid 1px black"}}>
            <div>UserFunctionalComponent</div>
            <div>Name: {user.name}</div>
            <div> кількість кліків: {count} </div>
            <button onClick={increase}>
                click me
            </button>
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

export default UserFunctionComponent;
