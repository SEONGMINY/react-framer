import { Route, Routes } from "react-router-dom";
import { Layout, Transition } from "../components";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/transition" element={<Transition />} />
      </Route>
    </Routes>
  );
};

export default Router;
