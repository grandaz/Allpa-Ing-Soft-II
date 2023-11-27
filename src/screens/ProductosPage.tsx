import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardProducto from "../components/Cards/CardProducto";
import ProductTO from "../to/ProductTO";
import ProductManager from "../manager/ProductManager";

interface ProductosPageProps {}
interface ProductosPageState {
  productos: ProductTO[];
}

class ProductosPage extends Component<ProductosPageProps, ProductosPageState> {
  constructor(props: ProductosPageProps) {
    super(props);
    this.state = {
      productos: [],
    };
  }

  componentDidMount() {
    this.cargarProductos();
  }

  private cargarProductos() {
    const productManager = new ProductManager();

    productManager
      .findAll()
      .then((data) => {
        this.setState({ productos: data });
        console.log(data);
      })
      .catch((error) => {
        console.error("Error cargando productos:", error);
      });
  }
  /*
  // Función para redirigir a PedidosPage con el filtro de IdProducto
  private filtrarPorProducto = (idProducto: number) => {
    // Puedes usar el componente Link para redirigir a la página de pedidos con el filtro deseado
    // Asegúrate de tener definida la ruta adecuada para PedidosPage en tu enrutador
    window.location.href = `/pedidos?idProducto=${idProducto}`;
  };  
*/
  render() {
    return (
      <>
        <div className="mt-20"></div>
        <div className="flex flex-wrap gap-20 justify-center">
          {this.state.productos.map((producto) => (
            <div key={producto.id}>
              <CardProducto
                idProducto={producto.id ?? 0}
                nombre={producto.name ?? ""}
                image={producto.image ?? ""}
              ></CardProducto>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ProductosPage;


/*
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
                        <CardProducto 
                            key={producto.id} 
                            nombre={producto.name ?? ''} 
                            image={producto.image ?? ''}
                        ></CardProducto>
                    ))
                }
            </div>
            </>
        )
    }

    
}

export default ProductosPage

*/