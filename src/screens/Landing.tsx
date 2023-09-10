import { Footer } from "../components/Footer/Footer"
import HeaderAboutUs from "../components/HeaderSections/HeaderAboutUs"
import HeroSection from "../components/HeroSection/HeroSection"
import Logos from "../components/Logos/Logos"
import LandingNavBar from "../components/NavBar/LanfingNavBar"
import Stats from "../components/Stats/Stats"

export default function Landing() {
    return (
        <>
            <LandingNavBar></LandingNavBar>
            <HeroSection></HeroSection>
            <Stats></Stats>
            <HeaderAboutUs></HeaderAboutUs>
            <Logos></Logos>
            <Footer></Footer>
        </>

    )
}