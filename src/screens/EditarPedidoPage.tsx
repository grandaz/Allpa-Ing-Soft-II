import InputField from '../components/Inputs/InputField';
import GreenButton from '../components/Inputs/GreenButton';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import UserManager from '../manager/UserManager';
import UserTO from '../to/UserTO';
import OrderTO from '../to/OrderTO';
import { Link } from 'react-router-dom';
import OrderManager from '../manager/OrderManager';

interface EditarPedidoPageProps extends RouteComponentProps<{ id: string }> {}

interface EditarPedidoPageState {
    pedido: OrderTO
    pedidoId: number;
    title: string;
    description: string;
    address: string;
}

class EditarPedidoPage extends Component<EditarPedidoPageProps, EditarPedidoPageState> {

    private userItem = localStorage.getItem("user");
    private user: UserTO = this.userItem !== null ? JSON.parse(this.userItem) : new UserTO();

    constructor(props: EditarPedidoPageProps) {
        super(props);
        this.state = {
            pedido: new OrderTO(),
            pedidoId: 0,
            title: '',
            description: '',
            address: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(): void {
        const { id } = this.props.match.params
        const numeroId = parseInt(id, 10)

        this.setState({ pedidoId: numeroId }, () => {
          
          this.cargarPedido();
        })
    }

    private cargarPedido() {
        const orderManager = new OrderManager()
        orderManager.findOne(this.state.pedidoId)
            .then((data: OrderTO) => {
                this.setState({
                    pedido: data,
                    title: data.title ?? '',
                    description: data.description ?? '',
                    address: data.address ?? ''
                })
            })
    }

    private handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        console.log(name)
        this.setState({
            [name]: value,
        } as unknown as Pick<EditarPedidoPageState, keyof EditarPedidoPageState>);
    }


    private handleSubmit(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        if (this.state.title.includes('!')) {
            alert('Título invalido');
            return false
        }

        const orderManager = new OrderManager()
        const orderTO = this.state.pedido

        orderTO.title = this.state.title
        orderTO.description = this.state.description
        orderTO.address = this.state.address

        console.log(orderTO)

        orderManager.update(orderTO)
            .then(resp => {
                console.log(resp)
            })
            .then(() => {
                window.location.replace('/historialPedidos');
            })
            .catch((error) => {
                console.error('Error actualizando perfil:', error);
            });

    }


    render() {
        return (
            <>
                <div className="mt-24"></div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 m-8 ml-48">Edita tu pedido</h2>
                <form className="mx-48 my-10" onSubmit={this.handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">
                            Título
                        </label>
                        <InputField name="title" type={'text'} defaultValue={this.state.pedido.title} onChange={this.handleInputChange}></InputField>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
                            Descripción
                        </label>
                        <InputField name="description" type={'text'} defaultValue={this.state.pedido.description} onChange={this.handleInputChange}></InputField>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Dirección entrega</label>
                        <InputField
                            name="address"
                            type="text"
                            onChange={this.handleInputChange}
                            defaultValue={this.state.pedido.address}
                        ></InputField>
                    </div>
                    <div className='flex gap-48 mx-96 '>
                        <GreenButton label="Guardar"></GreenButton>
                    </div>

                </form>
            </>
        );
    }
}

export default EditarPedidoPage;
