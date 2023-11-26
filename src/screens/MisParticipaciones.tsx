import { Component } from "react";
import OrderManager from "../manager/OrderManager";
import OrderTO from "../to/OrderTO";
import GreenButton from "../components/Inputs/GreenButton";
import ParticipationManager from "../manager/ParticipationManager";
import ParticipationTO from "../to/ParticipationTO";

interface MisParticipacionesProps { }

interface MisParticipacionesState {
    pedidos: OrderTO[]
    participaciones: ParticipationTO[]
}

export default class MisParticipaciones extends Component<MisParticipacionesProps, MisParticipacionesState> {

    private userItem = localStorage.getItem("user");
    private user = this.userItem !== null ? JSON.parse(this.userItem) : null;

    constructor(props: MisParticipacionesProps) {
        super(props)
        this.state = {
            pedidos: [],
            participaciones: []
        }
        console.log('Hola')
    }

    componentDidMount(): void {

        const participationManager = new ParticipationManager()
        participationManager.findAllAndOrderXUser(this.user.id)
        .then((data: ParticipationTO[]) => {
            this.setState({ participaciones: data }, () => {
                console.log(data)
        })})
        
    }

    render() {
        return (
            <>
            <div className="mt-24"></div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 m-8">Pedidos en los que participo</h2>
            <ul role="list" className="divide-y divide-gray-100 mx-48">
                {this.state.participaciones.map((part: ParticipationTO) => {
                    if(part.order?.fgState === '1') {
                        return (
                            <li key={part.order?.id} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={part.order?.user?.profileImage} alt="" />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{part.order?.title}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{part.order?.description}</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">Fecha de entrega: {part.order?.deliveryDate?.substring(0,10)}</p>
     
                                    <div className="mt-1 flex items-center gap-x-1.5">
                                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                        </div>
                                        <p className="text-xs leading-5 text-gray-500">PARTICIPANDO</p>
                                    </div>
                            </div>
                        </li>
                        )
                    }
                }
                )}
            </ul>
            </>
        )
    }
}