import ExampleFunctionComponent from "../componentsExample/exampleList/ExampleFunctionComponent";
import ExampleClassComponent from "../componentsExample/exampleList/ExampleClassComponent";

import UserListClassComponent from "../componentsExample/exampleList/userList/UserListClassComponent";
import UserListFunctionComponent from "../componentsExample/exampleList/userList/UserListFunctionComponent";

import UserListMemoComponent from "../componentsExample/exampleList/memo/UserListMemoComponent";

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
      path: "1",
      element: <Example1/>
    },
    {
      path: "2",
      element: <Example2/>
    }
]

export default exampleRouter;