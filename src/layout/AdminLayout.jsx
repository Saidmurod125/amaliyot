import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import AdminHeader from "../pages/Admin/anjumanlar/AdminHeader";
import AdminAside from "../pages/Admin/anjumanlar/AdminAside";

const AdminLayout = () => {
  return (
    <div className="bg-gray-100 bg-sc bg dark:bg-gray-900">
      <AdminHeader />
      <AdminAside />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
