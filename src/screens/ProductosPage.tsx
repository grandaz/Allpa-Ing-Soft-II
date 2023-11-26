import CardProducto from "../components/Cards/CardProducto"
import { Component } from "react"

import ProductTO from "../to/ProductTO"
import ProductManager from "../manager/ProductManager"
  
  interface ProductosPageProps {} // Para futuros cambios
  
  interface ProductosPageState {
    productos: ProductTO[];
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

        const productManager = new ProductManager()

        productManager.findAll()
            .then((data) => {
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
                        <CardProducto idProducto={producto.id ?? 0} key={producto.id} nombre={producto.name ?? ''} image={producto.image ?? ''}></CardProducto>
                    ))
                }
            </div>
            </>
        )
    }

    
}

export default ProductosPage