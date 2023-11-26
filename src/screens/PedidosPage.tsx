import CardPedido from "../components/Cards/CardPedido"
import { Component } from "react"
import DefaultProfile from '../assets/default_profile.jpg'
//import GreenButton from "../components/Inputs/GreenButton"
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchBar from "../components/Searchs/SearchBar";
import DropdownComponent from "../components/Searchs/DropdownComponent";

import GreenButton from "../components/Inputs/GreenButton";
import OrderTO from "../to/OrderTO"
import OrderManager from "../manager/OrderManager"

interface PedidosPageState {
    pedidos: OrderTO[]
    filtroIdProducto: number
    filtroNombre: string
    filtroID: number
}

interface PedidosPageProps {}

class PedidosPage extends Component<PedidosPageProps, PedidosPageState> {

    constructor(props: PedidosPageProps) {
        super(props);
        this.state = {
            pedidos: [],
            filtroIdProducto: 0,
            filtroNombre: '',
            filtroID:0
        }

        this.obtenerIdProduct = this.obtenerIdProduct.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.obtenerIdUser = this.obtenerIdUser.bind(this);
    }

    componentDidMount() {
        this.cargarPedidos();
    }

    private cargarPedidos() {

        const orderManager = new OrderManager()

        orderManager.findAllXProductXUser(this.state.filtroIdProducto, this.state.filtroNombre)
            .then((data) => {

                this.setState({ pedidos: data, filtroNombre: '' });
                //console.log(data);
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

    private obtenerIdUser(idUser: any) {
        this.setState({ filtroID: idUser }, () => {
            this.cargarPedidos()
            console.log(idUser)
        })
    }

    private handleSearch(searchValue: any) {
        this.setState({ filtroNombre: searchValue }, () => {
            this.cargarPedidos()
            console.log(searchValue)
        })
    }

    render() {
        return (
            <>
                <div className="mt-20"></div>

                <div className="flex gap-4 mx-10">
                    <DropdownComponent enviarIdProduct={this.obtenerIdProduct}></DropdownComponent>
                    <div className="w-5/6">
                        <SearchBar onSearch={this.handleSearch}></SearchBar>
                    </div>
                    <div className="w-10%">
                    <a href="/historialPedidos"><GreenButton type="button" label="Mis pedidos"></GreenButton></a>
                    </div>
                </div>
                
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 m-8">Pedidos</h2>
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
                            ></CardPedido>
                        ))}
                </div>
            </>
        )
    }
}

export default PedidosPage