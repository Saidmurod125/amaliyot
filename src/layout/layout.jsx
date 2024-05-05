import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="bg-gray-100 bg-sc bg dark:bg-gray-900">
      <Header/>
      <Outlet/>
    </div>
  );
};

export default Layout;
