import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from "../components/Layout";

const Home = () =>  <div>Home</div>;
const Page1 = () =>  <div>Page1</div>;
const Page2 = () =>  <div>Page2</div>;
const Page3 = () =>  <div>Page3</div>;
const Page4 = () =>  <div>Page4</div>;
import NotFoundPage from "../pages/NotFoundPage";

const Router= () => {
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
        {
          path: "page2",
          element: <Page2/>
        },
        {
          path: "page3",
          element: <Page3/>
        }
      ]
    },
    {
      path: "page4",
      element: <Page4/>
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