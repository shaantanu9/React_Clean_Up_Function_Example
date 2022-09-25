import AllRoutes from "./routes/AllRoutes";
import Child from "./components/Child";
import Sibling from "./components/Sibling";
import "./styles.css";
import { Link } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <Child /> */}
      {/* <Sibling /> */}
      <div>
        <Link to="/child">ChildLink</Link>
        <hr />
        <Link to="/sibling">SiblingLink</Link>
      </div>
      <AllRoutes />
    </div>
  );
}
