import Carousel from "../../components/Carousel";
import Data from "../../components/Data"
import Menu from "../../components/Menu";
const Home = () => {
  return (

    <div className="container mx-auto" >
      <Menu/>
     <Data/>
    <Carousel />
    </div>
  );
};

export default Home;
