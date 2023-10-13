import Footer from "../components/Footer/Footer"
import Nosotros from "../components/BodySection/Nosotros"
import Logos from "../components/Logos/Logos"
import LandingNavBar from "../components/NavBar/LandingNavBar"
import Stats from "../components/Stats/Stats"
import { Component } from "react"

interface AboutUsPageProps {

}

class AboutUsPage extends Component<AboutUsPageProps> {
    constructor(props: AboutUsPageProps) {
        super(props);
    }

    render() {
        return (
            <>
            <div className="mt-18"></div>
            <Nosotros></Nosotros>
            <Stats></Stats>
            <Logos></Logos>
            <Footer></Footer>
        </>
        )
    }
}

export default AboutUsPage