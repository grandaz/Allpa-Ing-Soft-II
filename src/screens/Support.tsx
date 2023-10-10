import { Footer } from "../components/Footer/Footer"
import LandingNavBar from "../components/NavBar/LandingNavBar"
import Soporte from "../components/BodySection/Soporte"
import Logos from "../components/Logos/Logos"

export default function Landing() {
    return (
        <>
            <LandingNavBar></LandingNavBar>
            <Soporte></Soporte>
            <Logos></Logos>
            <Footer></Footer>
        </>

    )
}