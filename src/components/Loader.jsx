import { ClimbingBoxLoader } from "react-spinners"

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-700">

   <ClimbingBoxLoader
  color="#36d7b7"
  size={30}
  speedMultiplier={3}
/>
    </div>

  )
}

export default Loader
