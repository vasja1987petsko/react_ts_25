import { Outlet } from "react-router-dom";
import "./Example.css";
import HeaderExample from "./HeaderExample";

const Example = () => {
    return (
        <div className="example">
            <HeaderExample/>
            <Outlet/>
        </div>
    )
}

export default Example;