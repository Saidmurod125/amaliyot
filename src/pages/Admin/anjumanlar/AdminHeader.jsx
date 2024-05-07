import { FaRegUserCircle , FaRegBell} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBars, FaXmark } from 'react-icons/fa6';
import DarkMode from "../../../components/DarkMode";
const AdminHeader = () => {
   
  return (
   <div className="w-full bg-white dark:bg-gray-800 dark:text-white ">
    <div className="container flex items-center justify-between w-full h-20 gap-3 mx-auto ">
    <div className="flex gap-1">
     <FaBars className="text-2xl "/>
    <h1>Anjumanlar</h1>
    </div>
       <div className="flex items-center justify-end w-full h-20 gap-3 ">
        <DarkMode/>
       <MdEmail className="text-2xl"/>
      <FaRegBell className="text-2xl "/>
       <FaRegUserCircle className="text-2xl"/>
       </div>
    </div>
   </div>
  )
}

export default AdminHeader
