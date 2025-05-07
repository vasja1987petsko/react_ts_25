// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from "../components/Layout";
import Users from "../pages/Users";
import Example from "../componentsExample/Example";
import exampleRouter from "./exampleRouter";
//
const Home = () =>  <div>Home</div>;
const Page1 = () =>  <div>Page1</div>;
// const Page2 = () =>  <div>Page2</div>;
import NotFoundPage from "../pages/NotFoundPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "page1",
          element: <Page1/>
        },
        // {
        //   path: "page2",
        //   element: <Page2/>
        // },
        {
          path: "examples",
          element: <Example />,
          children: exampleRouter
        },
        {
          path: "users",
          element: <Users />,
        },
      ]
    },
    {
      path: "/examples/other",
      element: <Example />,
      children: exampleRouter
    },
    {
      path: "*",
      element: <NotFoundPage/>
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default Router;