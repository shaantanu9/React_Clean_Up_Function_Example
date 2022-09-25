import { Routes, Route } from "react-router-dom";
import Child from "../components/Child";
import Sibling from "../components/Sibling";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/child" element={<Child />} />
      <Route path="/sibling" element={<Sibling />} />
    </Routes>
  );
};

export default AllRoutes;
