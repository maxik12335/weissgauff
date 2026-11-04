import MainSection from "../../Sections/Main/MainSection";
import Footer from "../../Sections/Footer/Footer";
import MainList from "../../Sections/MainList/MainList";

const Main = () => {
  const mainLists = [
    "vstrBitTech",
    "otdelStoyTechnika",
    "melkTechnikaKuhnya",
    "malTechnikaDom",
    "klimakTechnika",
    "santKuhnya",
    "homeAndSad"
  ]
  return (
    <div>
      <MainSection />
      {mainLists.map(item => <MainList variable={item}/>)}
    </div>
  )
}

export default Main;