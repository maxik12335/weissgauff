import Navbar from "../Components/navbar/Navbar";
import Footer from "./Footer/Footer";
import Main from "./Main/MainSection";
import MainList from "./MainList/MainList";

const Pages = () => {

  return (
    <div>

      <Navbar />

      {/* main */}
        <Main />

      {/* main list */}
        <MainList variable="vstrBitTech"/>
        <MainList variable="otdelStoyTechnika"/>
        <MainList variable="melkTechnikaKuhnya"/>
        <MainList variable="malTechnikaDom"/>
        <MainList variable="klimakTechnika"/>
        <MainList variable="santKuhnya"/>
        <MainList variable="homeAndSad"/>
      
      {/* footer */}
        <Footer />
        
    </div>
  )
}

export default Pages;