import { Route, Routes } from "react-router-dom";
import { Checkbox, DragModal, Layout, Transition } from "../components";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/transition" element={<Transition />} />
        <Route path="/dragModal" element={<DragModal />} />
        <Route path="/checkbox" element={<Checkbox />} />
      </Route>
    </Routes>
  );
};

export default Router;
