
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import Layout from "./layout/layout";
import "./App.css"
import Analiz from "./pages/Admin/pegs/Analiz";
import Seting from "./pages/Admin/pegs/Seting";
import Praducts from "./pages/Admin/pegs/Praducts";
import AdminLayout from "./layout/AdminLayout";
const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route  path="admin" element={<AdminLayout />} >
          <Route index  element={<Admin />} />
          <Route path="analiz" element={<Analiz />} />
          <Route path="seting" element={<Seting />} />
          <Route path="praducts" element={<Praducts />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
