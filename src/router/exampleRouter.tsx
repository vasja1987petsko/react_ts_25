import ExampleFunctionComponent from "../componentsExample/exampleList/ExampleFunctionComponent";
import ExampleClassComponent from "../componentsExample/exampleList/ExampleClassComponent";

import UserListClassComponent from "../componentsExample/exampleList/userList/UserListClassComponent";
import UserListFunctionComponent from "../componentsExample/exampleList/userList/UserListFunctionComponent";

import UserListMemoComponent from "../componentsExample/exampleList/memo/UserListMemoComponent";
import UseMemoComponent from "../componentsExample/exampleList/useMemo/UseMemoComponent";
import UseCallbackComponent from "../componentsExample/exampleList/useCallbackComponent/UseCallbackComponent";

import UseRefPreviousValueComponent from "../componentsExample/exampleList/useRef/UseRefPreviousValueComponent";
import UseRefComponent from "../componentsExample/exampleList/useRef/UseRefComponent";

import UseReducerComponent from "../componentsExample/exampleList/useReducer/UseReducerComponent";
import UseReducerComponent1 from "../componentsExample/exampleList/useReducer/UseReducerComponent1";

const Example1 = () =>  <div>Example1</div>;
const Example2 = () =>  <div>Example2</div>;

const exampleRouter= [
    {
      path: "example-function-component",
      element: <ExampleFunctionComponent/>
    },
    {
      path: "example-class-component",
      element: <ExampleClassComponent />
    },
    {
      path: "user-list-function-component",
      element: <UserListFunctionComponent />
    },
    {
      path: "user-list-class-component",
      element: <UserListClassComponent />
    },
    {
      path: "user-list-memo-component",
      element: <UserListMemoComponent />
    },
    {
      path: "use-memo-component",
      element: <UseMemoComponent />
    },
    {
      path: "use-callback-component",
      element: <UseCallbackComponent />
    },
    {
      path: "use-ref-component",
      element: <UseRefComponent />
    },
    {
      path: "use-ref-previous-value-component",
      element: <UseRefPreviousValueComponent />
    },
    {
      path: "use-reducer-component",
      element: <UseReducerComponent />
    },
    {
      path: "use-reducer-component1",
      element: <UseReducerComponent1 initialValue={10} />
    },
    {
      path: "1",
      element: <Example1/>
    },
    {
      path: "2",
      element: <Example2/>
    }
]

export default exampleRouter;