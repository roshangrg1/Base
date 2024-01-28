import Login from "./component/Login";
// import Home from "./pages/Home";
// import {Route,Routes} from "react-router-dom";

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Dashboard from "./component/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Login/>),
  },
  {
    path: "/dashboard",
    element:<Dashboard/>,
  },

 

])

const App = () => {

  return (
    <div className="w-full overflow-hidden">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;