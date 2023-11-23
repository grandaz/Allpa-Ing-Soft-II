import CardPedido from "../components/Cards/CardPedido"
import { Component } from "react"
import DefaultProfile from '../assets/default_profile.jpg'
import GreenButton from "../components/Inputs/GreenButton"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import OrderTO from "../to/OrderTO"
import OrderManager from "../manager/OrderManager"

interface PedidosPageState {
    pedidos: OrderTO[]
}

interface PedidosPageProps {}

class PedidosPage extends Component<PedidosPageProps, PedidosPageState> {

    constructor(props: PedidosPageProps) {
        super(props);
        this.state = {
            pedidos: []
        }
    }

    componentDidMount() {
        this.cargarPedidos();
    }

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
    }

    render() {
        return (
            <>
                <div className="mt-20"></div>
                <div className="flex gap-4 mt-4"> {/* Utiliza la clase "flex" para colocar los botones en la misma línea */}
                    <Link to="/buscarProducto">
                    <GreenButton label="Buscar por Producto"/>
                    </Link>
                    <GreenButton label="Buscar por Vendedor"></GreenButton>
                </div>
                
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 m-8">Pedidos</h2>
                <div className="flex flex-wrap gap-20 justify-center mx-auto">
                    {this.state.pedidos.map(pedido => (
                            <CardPedido 
                                key={pedido.idOrder}
                                profileImage={pedido.user?.profileImage ?? DefaultProfile} 
                                nombre={pedido.user?.firstName + ' ' + pedido.user?.lastName}
                                fechaCrea={pedido.createdAt?.substring(0,10) ?? ''}
                                titulo={pedido.title ?? ''}
                                descripcion={pedido.description ?? ''}
                                fechaEntrega={pedido.deliveryDate?.substring(0,10) ?? ''}
                            ></CardPedido>
                        ))}
                </div>
            </>
        )
    }
}

export default PedidosPage