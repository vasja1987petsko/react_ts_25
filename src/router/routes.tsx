import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import NotFoundPage from "../pages/NotFoundPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<div>Home</div>} />
          <Route path="page1" element={<div>Page1</div>}/>
          <Route path="page2" element={<div>Page2</div>}/>
          <Route path="page3" element={<div>Page3</div>}/>
        </Route>
        <Route path="page4" element={<div>Pag4</div>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;