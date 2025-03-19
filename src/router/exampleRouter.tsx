import ExampleFunctionComponent from "../componentsExample/exampleList/ExampleFunctionComponent.tsx";
import ExampleClassComponent from "../componentsExample/exampleList/ExampleClassComponent.tsx";

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
      path: "1",
      element: <Example1/>
    },
    {
      path: "2",
      element: <Example2/>
    }
]

export default exampleRouter;