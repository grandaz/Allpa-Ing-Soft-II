import { Footer } from "../components/Footer/Footer"
import LandingNavBar from "../components/NavBar/LandingNavBar"
import Soporte from "../components/BodySection/Soporte"
import Logos from "../components/Logos/Logos"
import { Component } from "react"

interface SupportPageProps {

}

class SupportPage extends Component<SupportPageProps> {

    constructor(props: SupportPageProps) {
        super(props);
    }

    render() {
        return (
            <>
                <LandingNavBar></LandingNavBar>
                <Soporte></Soporte>
                <Logos></Logos>
                <Footer></Footer>
            </>
        )
    }
    
}

export default SupportPage