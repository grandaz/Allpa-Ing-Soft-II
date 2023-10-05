import { Footer } from "../components/Footer/Footer"
import HeaderAboutUs from "../components/HeaderSections/HeaderAboutUs"
import Nosotros from "../components/BodySection/Nostros"
import Logos from "../components/Logos/Logos"
import LandingNavBar from "../components/NavBar/LandingNavBar"
import Stats from "../components/Stats/Stats"

export default function Landing() {
    return (
        <>
            <LandingNavBar></LandingNavBar>
            <Nosotros></Nosotros>
            <Stats></Stats>
            <Logos></Logos>
            <Footer></Footer>
        </>

    )
}