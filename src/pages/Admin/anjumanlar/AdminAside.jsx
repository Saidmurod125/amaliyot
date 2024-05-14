import { IoMdSettings, IoIosHome } from "react-icons/io";
import { MdOutlineShoppingCart, MdAnalytics } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AdminAside = () => {
  return (
    <div className="w-[20%] h-screen px-4 bg-white dark:bg-gray-800 dark:text-white ">
      <NavLink to={""} className="flex items-center gap-2">
        <img
          className="inline-block py-4"
          src="https://anjumanlar.uz/logo.svg"
          alt=""
        />
      </NavLink>
      <ul className="px-3 space-y-4 ">
        <li className="py-2">
          <NavLink to={""} className="flex items-center gap-2">
            <IoIosHome className="text-2xl " /> Home
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink to="praducts" className="flex items-center gap-2">
            <MdOutlineShoppingCart className="text-2xl " /> Products
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink to="analiz" className="flex items-center gap-2">
            <MdAnalytics className="text-2xl " /> Analitick
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink to="seting" className="flex items-center gap-2">
            <IoMdSettings className="text-2xl " /> Setting
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminAside;
