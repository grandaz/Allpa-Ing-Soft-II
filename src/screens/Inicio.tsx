import LandingNavBarInicio from "../components/NavBar/LandingNavBarIncio"
import { Footer } from "../components/Footer/Footer"
import HeaderAboutUs from "../components/HeaderSections/HeaderAboutUs"
import HeroSectionInicio from "../components/HeroSection/HeroSectionInicio"
import Logos from "../components/Logos/Logos"
import Stats from "../components/Stats/Stats"

function Inicio() {
    return (
        <>
            <LandingNavBarInicio></LandingNavBarInicio>
            <HeroSectionInicio></HeroSectionInicio>
            <Stats></Stats>
            <HeaderAboutUs></HeaderAboutUs>
            <Logos></Logos>
            <Footer></Footer>
        </>

    )
}


export default Inicio