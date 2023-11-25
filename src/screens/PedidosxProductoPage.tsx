import React, { Component } from "react";
import CardPedido from "../components/Cards/CardPedido";
import DefaultProfile from '../assets/default_profile.jpg';

import ProductManager from "../manager/ProductManager";
import ProductTO from "../to/ProductTO";
import OrderManager from "../manager/OrderManager";
import OrderTO from "../to/OrderTO";

interface PedidosPageState {
  pedidos: OrderTO[];
  pedidosProducto: OrderTO[];
  opcionesDesplegable: ProductTO[]; // Nuevo estado para las opciones del desplegable
}

interface PedidosPageProps {}

class PedidosPage extends Component<PedidosPageProps, PedidosPageState> {
  constructor(props: PedidosPageProps) {
    super(props);
    this.state = {
      pedidos: [],
      pedidosProducto: [],
      opcionesDesplegable: [], // ACA SE ALMACENARA LOS PRODUCTOS
    };
  }

  componentDidMount() {
    this.cargarPedidos();
    //this.cargarProductos();
  }

  private buscarProducto(eleccion: string) {
    const pedidosFiltrados = this.state.pedidos.filter(pedido =>
      pedido.description?.toLowerCase().includes(eleccion.toLowerCase())
    );
    this.setState({ pedidosProducto: pedidosFiltrados });
  }

    /*private cargarProductos() {
        ProductoAPI.findAll()
          .then((promise) => {
            const productos = promise.data;
        // Extraer el atributo 'name' de cada producto y usarlo para construir el array de opciones
            const opcionesDesplegable = productos.map(producto => producto.name);
            this.setState({ opcionesDesplegable });
      })
      .catch((error) => {
        console.error("Error cargando productos:", error);
      });
      }*/
  


  private cargarPedidos() {

    const orderManager = new OrderManager()

    orderManager.findAll()
      .then((data) => {
        this.setState({ pedidos: data });
        console.log(data);
      })
      .catch((error) => {
        console.error("Error cargando pedidos:", error);
      });
    const eleccion = "Algo"; // Cambia "Algo" por el valor que desees
    this.buscarProducto(eleccion);
  }

  private handleEliminarPedido = (pedidoId: number) => {
    const orderManager = new OrderManager();

    orderManager.remove(pedidoId)
      .then(() => {
        this.cargarPedidos();
      })
      .catch((error) => {
        console.error("Error eliminando pedido:", error);
      });
  };

  render() {
    return (
      /*      
        <div className="mt-20"></div>
        <div className="flex justify-end mx-8 mb-4">
          <div className="relative">
            <button className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded inline-flex items-center">
              <span className="mr-1">Productos</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
            <div className="hidden absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg">
              <div className="py-1">
                {this.state.opcionesDesplegable.map((opcion, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {opcion}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>*/
<>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 m-8">
          Pedidos
        </h2>
        <div className="flex flex-wrap gap-20 justify-center mx-auto">
          {this.state.pedidos.map(pedido => (
            <CardPedido
              key={pedido.id}
              profileImage={pedido.user?.profileImage ?? DefaultProfile}
              nombre={pedido.user?.firstName + ' ' + pedido.user?.lastName}
              fechaCrea={pedido.createdAt?.substring(0,10) ?? ''}
              titulo={pedido.title ?? ''}
              descripcion={pedido.description ?? ''}
              fechaEntrega={pedido.deliveryDate?.substring(0,10) ?? ''}
              onEliminarPedido={this.handleEliminarPedido}
            ></CardPedido>
          ))}
        </div>
      </>
    );
  }
}

export default PedidosPage;
