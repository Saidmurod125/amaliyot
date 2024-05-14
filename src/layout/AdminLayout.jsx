import { Outlet } from "react-router-dom";
import AdminHeader from "../pages/Admin/anjumanlar/AdminHeader";
import AdminAside from "../pages/Admin/anjumanlar/AdminAside";
import Loader from "../components/Loader";
import useAxios from "../service/useAxios";

const AdminLayout = () => {
  const { loading } = useAxios(
    "https://6634d6199bb0df2359a2e7ca.mockapi.io/conference/conference"
  );
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="h-screen bg-gray-100 dark:bg-gray-900">
          <div className="flex ">
            <AdminAside />
            <div className="w-[80%]">
              <AdminHeader />
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminLayout;
