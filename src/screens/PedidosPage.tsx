import CardPedido from "../components/Cards/CardPedido";
import { Component } from "react";
import DefaultProfile from '../assets/default_profile.jpg';
import SearchBar from "../components/Searchs/SearchBar";
import DropdownComponent from "../components/Searchs/DropdownComponent";
import GreenButton from "../components/Inputs/GreenButton";
import OrderTO from "../to/OrderTO"
import OrderManager from "../manager/OrderManager"

interface PedidosPageState {
    pedidos: OrderTO[]
    filtroIdProducto: number
    filtroNombre: string
}

interface PedidosPageProps {}

class PedidosPage extends Component<PedidosPageProps, PedidosPageState> {

    constructor(props: PedidosPageProps) {
        super(props);
        this.state = {
            pedidos: [],
            filtroIdProducto: 0,
            filtroNombre: ''
        }

        this.obtenerIdProduct = this.obtenerIdProduct.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

  componentDidMount() {
    this.cargarPedidos();
  }

  private cargarPedidos() {
    const orderManager = new OrderManager();

    orderManager.findAllXProductXUser(this.state.filtroIdProducto, this.state.filtroNombre)
      .then((data) => {
        this.setState({ pedidos: data, filtroNombre: '' });
      })
      .catch((error) => {
        console.error("Error cargando pedidos:", error);
      });
  }

    private obtenerIdProduct(idProduct: any) {
        this.setState({ filtroIdProducto: idProduct }, () => {
            this.cargarPedidos()
            console.log(idProduct)
        })
        
    }

  private handleSearch(searchValue: any) {
    this.setState({ filtroNombre: searchValue }, () => {
      this.cargarPedidos();
      console.log(searchValue);
    });
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
      <>
        <div className="mt-20"></div>

        <div className="flex gap-4 mx-10">
          <DropdownComponent enviarIdProduct={this.obtenerIdProduct}></DropdownComponent>
          <div className="w-5/6">
            <SearchBar onSearch={this.handleSearch}></SearchBar>
          </div>
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 m-8">Pedidos</h2>
        <div className="flex flex-wrap gap-20 justify-center mx-auto">
          {this.state.pedidos.map(pedido => (
            <CardPedido
              key={pedido.id}
              id={pedido.id ?? 0 }
              profileImage={pedido.user?.profileImage ?? DefaultProfile}
              nombre={pedido.user?.firstName + ' ' + pedido.user?.lastName}
              fechaCrea={pedido.createdAt?.substring(0, 10) ?? ''}
              titulo={pedido.title ?? ''}
              descripcion={pedido.description ?? ''}
              fechaEntrega={pedido.deliveryDate?.substring(0, 10) ?? ''}
              onEliminarPedido={this.handleEliminarPedido}
            ></CardPedido>
          ))}
        </div>
      </>
    );
  }
}

export default PedidosPage;