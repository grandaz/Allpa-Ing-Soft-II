import LandingNavBar from "../components/NavBar/LandingNavBar"
import CardProducto from "../components/Cards/CardProducto"

function Productos() {
    return (
        <>
        <LandingNavBar></LandingNavBar>
        <div className="flex flex-wrap gap-20 justify-center">
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
        </div>
        </>
    )
}

export default Productos