import LandingNavBar from "../components/NavBar/LandingNavBar"
import CardProducto from "../components/Cards/CardProducto"
import { Component } from "react"

interface ProductosPageProps {

}

class ProductosPage extends Component<ProductosPageProps> {

    constructor(props: ProductosPageProps) {
        super(props);
    }

    render() {
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

    
}

export default ProductosPage