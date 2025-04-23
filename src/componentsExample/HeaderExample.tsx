import { Link } from "react-router-dom";
import "./Example.css";
import UserListMemoComponent from "./exampleList/memo/UserListMemoComponent.tsx";
import UseRefComponent from "./exampleList/useRef/UseRefComponent.tsx";
import UseRefPreviousValueComponent from "./exampleList/useRef/UseRefPreviousValueComponent.tsx";

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
          <Link to={'user-list-function-component'}> UserListFunctionComponent  </Link>
          <Link to={'user-list-class-component'}> UserListClassComponent</Link>
          <Link to={'user-list-memo-component'}> UserListMemoComponent </Link>
          <Link to={'use-memo-component'}> UseMemoComponent </Link>
          <Link to={'use-callback-component'}> UseCallbackComponent </Link>
          <Link to={'use-ref-component'}> UseRefComponent </Link>
          <Link to={'use-ref-previous-value-component'}>UseRefPreviousValueComponent</Link>
          <Link to={'use-reducer-component'}> UseReducerComponent</Link>
          <Link to={'use-reducer-component1'}> UseReducerComponent1</Link>
          <Link to={'1'}> example1</Link>
          <Link to={'2'}> example2 </Link>
        </div>
      </div>
    )
}

export default HeaderExample;