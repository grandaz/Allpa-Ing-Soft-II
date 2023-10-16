import LandingNavBar from "../components/NavBar/LandingNavBar"
import CardProducto from "../components/Cards/CardProducto"
import { Component } from "react"
import ProductoAPI from "../api/products"

interface Product {
    id: number;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
  }
  
  interface ProductosPageProps {
    productos: Product[];
  }
  
  interface ProductosPageState {
    productos: Product[];
  }
  


class ProductosPage extends Component<ProductosPageProps, ProductosPageState> {

    constructor(props: ProductosPageProps) {
        super(props);
        this.state = {
            productos: []
        }
    }

    componentDidMount() {
        this.cargarProductos();
      }

    cargarProductos() {
        ProductoAPI.findAll()
            .then((promise) => {
                const products = promise.data;
                this.setState({ productos: products });
                console.log(products);
            })
            .catch((error) => {
                // Handle errors here
                console.error("Error loading products:", error);
            });
        
    }

    render() {
        return (
            <>
            <div className="mt-20"></div>
            <div className="flex flex-wrap gap-20 justify-center">
                {
                    this.state.productos.map((producto) => (
                        <CardProducto nombre={producto.name} image={producto.image}></CardProducto>
                    ))
                }
            </div>
            </>
        )
    }

    
}

export default ProductosPage