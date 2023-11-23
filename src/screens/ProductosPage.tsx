import CardProducto from "../components/Cards/CardProducto"
import { Component } from "react"
import ProductoAPI from "../api/product"
import Product from '../classes/Product'
  
  interface ProductosPageProps {} // Para futuros cambios
  
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

    private cargarProductos() {
        ProductoAPI.findAll()
            .then((promise) => {
                const data = promise.data;
                this.setState({ productos: data });
                console.log(data);
            })
            .catch((error) => {
                console.error("Error cargando productos:", error);
            });   
    }

    render() {
        return (
            <>
            <div className="mt-20"></div>
            <div className="flex flex-wrap gap-20 justify-center">
                {
                    this.state.productos.map((producto) => (
                        <CardProducto key={producto.product_id} nombre={producto.name} image={producto.image}></CardProducto>
                    ))
                }
            </div>
            </>
        )
    }

    
}

export default ProductosPage