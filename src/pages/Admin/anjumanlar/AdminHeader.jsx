import { FaRegUserCircle, FaRegBell } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DarkMode from "../../../components/DarkMode";
const AdminHeader = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-800 dark:text-white flex justify-end px-5">
      <div className="py-5 flex items-center space-x-4">
          <DarkMode />
          <MdEmail className="text-xl" />
          <FaRegBell className="text-xl " />
          <FaRegUserCircle className="text-xl" />
      </div>
    </div>
  );
};

export default AdminHeader;
