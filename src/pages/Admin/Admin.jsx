import AdminAside from "./anjumanlar/AdminAside";
import AdminHeader from "./anjumanlar/AdminHeader";
import { MuiTable } from "./anjumanlar/Tabel";


const Admin = () => {
 
  return (
    <div className=" bg-slate-500"> 
   <AdminHeader/>
   <div className="bg-white ">
    <div className="container flex mx-auto ">
    <AdminAside/>
    <div className="w-full mx-3 ">
    <MuiTable/>
    </div>
   </div>
   </div>
    </div>
  );
};

export default Admin

