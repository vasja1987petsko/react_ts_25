import { Link } from "react-router-dom";
import "./Example.css";

const HeaderExample = () => {
    return(
      <div className="header-example">
        <div className={'menu'} style={{
          display: "flex",
          justifyContent: "space-around",
          flexGrow: 1,
          flexWrap: "wrap"
        }}>
          <Link to={'example-function-component'}> ExampleFunctionComponent </Link>
          <Link to={'example-class-component'}> ExampleClassComponent </Link>
          <Link to={'1'}> example1</Link>
          <Link to={'2'}> example2 </Link>
        </div>
      </div>
    )
}

export default HeaderExample;