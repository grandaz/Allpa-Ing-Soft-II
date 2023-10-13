import Footer from "../components/Footer/Footer"
import HeaderAboutUs from "../components/HeaderSections/HeaderAboutUs"
import HeroSection from "../components/HeroSection/HeroSection"
import Logos from "../components/Logos/Logos"

import Stats from "../components/Stats/Stats"

import { Component } from "react"

interface LandingPageProps{

}

class LandingPage extends Component<LandingPageProps> {

    constructor(props: LandingPageProps) {
        super(props);
    }

    render() {
        return (
            <>  
            
                
                <HeroSection></HeroSection>
                <Stats></Stats>
                <HeaderAboutUs></HeaderAboutUs>
                <Logos></Logos>
                <Footer></Footer>
            </>
    
        )
    }
    
}

export default LandingPage