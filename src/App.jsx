import { Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
