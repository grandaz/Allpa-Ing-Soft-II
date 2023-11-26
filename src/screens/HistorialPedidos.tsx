import { Component } from "react";
import OrderManager from "../manager/OrderManager";
import OrderTO from "../to/OrderTO";

import { useHistory} from "react-router-dom";
import GreenButton from "../components/Inputs/GreenButton";

interface HistorialPedidosProps { }

interface HistorialPedidosState {
    pedidos: OrderTO[]
}


export default class HistorialPedidos extends Component<HistorialPedidosProps, HistorialPedidosState> {

    private userItem = localStorage.getItem("user");
    private user = this.userItem !== null ? JSON.parse(this.userItem) : null;
    
    constructor(props: HistorialPedidosProps) {
        super(props)
        this.state = {
            pedidos: []
        }
    }

    componentDidMount(): void {
        const orderManager = new OrderManager()

        orderManager.findAllXUser(this.user.id)
            .then((data: OrderTO[]) => {
                this.setState({ pedidos: data })
            })
    }
    
    render() {
        
        return (
            <>
            <div className="mt-24"></div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 m-8">Mis Pedidos</h2>
            <ul role="list" className="divide-y divide-gray-100 mx-48">
                {this.state.pedidos.map((pedido: OrderTO) => (
                    <li key={pedido.id} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={pedido.user?.profileImage} alt="" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{pedido.title}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{pedido.description}</p>
                                <p className="text-sm leading-6 text-gray-900">{pedido.address}</p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <GreenButton label="Modificar"></GreenButton>

                            <p className="text-sm leading-6 text-gray-900">Fecha de entrega: {pedido.deliveryDate?.substring(0,10)}</p>
                            {pedido.fgState == '0' ? (
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <div className="flex-none rounded-full bg-red-500/20 p-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                    </div>
                                    <p className="text-xs leading-5 text-gray-500">Finalizado</p>
                                </div>
                            ) : (
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    </div>
                                    <p className="text-xs leading-5 text-gray-500">En curso</p>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
            </>
        )
    }
}