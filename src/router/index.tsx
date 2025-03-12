// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from "../components/Layout";

const Home = () =>  <div>Home</div>;
const Page1 = () =>  <div>Page1</div>;
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
        }
      ]
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