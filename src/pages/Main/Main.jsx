import MainSection from "../../Sections/Main/MainSection";
import Footer from "../../Sections/Footer/Footer";
import MainList from "../../Sections/MainList/MainList";

const Main = () => {
  return (
    <div>
      <MainSection />
      <MainList variable="vstrBitTech"/>
      <MainList variable="otdelStoyTechnika"/>
      <MainList variable="melkTechnikaKuhnya"/>
      <MainList variable="malTechnikaDom"/>
      <MainList variable="klimakTechnika"/>
      <MainList variable="santKuhnya"/>
      <MainList variable="homeAndSad"/>
      <Footer />
    </div>
  )
}

export default Main;