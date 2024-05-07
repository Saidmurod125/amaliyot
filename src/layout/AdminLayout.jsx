import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import AdminHeader from "../pages/Admin/anjumanlar/AdminHeader";
import AdminAside from "../pages/Admin/anjumanlar/AdminAside";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <AdminHeader />
      <div className="flex ">
      <AdminAside />
      <Outlet />

      </div>
    </div>
  );
};

export default AdminLayout;
