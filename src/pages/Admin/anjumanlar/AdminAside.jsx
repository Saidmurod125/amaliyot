import { IoMdSettings, IoIosHome } from "react-icons/io";
import { MdOutlineShoppingCart, MdAnalytics } from "react-icons/md";
import { NavLink } from "react-router-dom";
const AdminAside = () => {
  return (
    <div className="w-1/5 bg-white ">
      <ul className="ml-4 space-y-4 ">
        <NavLink to={""} className="flex items-center gap-2">
          <IoIosHome className="text-2xl " /> Home
        </NavLink>
        <NavLink to="praducts" className="flex items-center gap-2">
          <MdOutlineShoppingCart className="text-2xl " /> Products
        </NavLink>
        <NavLink to="analiz" className="flex items-center gap-2">
          <MdAnalytics className="text-2xl " /> Analitick
        </NavLink>
        <NavLink to="seting" className="flex items-center gap-2">
          <IoMdSettings className="text-2xl " /> Setting
        </NavLink>
      </ul>
    </div>
  );
};

export default AdminAside;
