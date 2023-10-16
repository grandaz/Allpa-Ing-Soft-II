import InputField from "../components/Inputs/InputField"
import GreenButton from "../components/Inputs/GreenButton"
import { Component } from "react"
import Product from "../classes/Product"
import Measure from "../classes/Measure"
import OrderDetails from "../classes/OrderDetails"
import OrderItems from "../classes/OrderItems"
import ProductoAPI from "../api/products"
import MeasureAPI from "../api/measure"
import User from "../classes/User"

interface CrearPedidoPageProps {

}

interface CrearPedidoPageState {
    listaProductosForm: number[];
    productos: Product[];
    unidades: Measure[];
    orderDetails: OrderDetails;
    orderItems: OrderItems;
}

class CrearPedidoPage extends Component<CrearPedidoPageProps, CrearPedidoPageState> {

    constructor(props: CrearPedidoPageProps) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            listaProductosForm: [1],
            productos: [],
            unidades: [],
            orderDetails: new OrderDetails(1,1,1,'','','','',''),
            orderItems: new OrderItems(1,1,1,1,1,'',''),
        }
    }

    componentDidMount() {
        this.cargarProductos();
        this.cargarUnidades();
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

    private cargarUnidades() {
        MeasureAPI.findAll()
            .then((promise) => {
                const data = promise.data;
                this.setState({ unidades: data });
                console.log(data);
            })
            .catch((error) => {
                console.error("Error cargando unidades de medida:", error);
            });   
    }

    private agregarProducto() {
        this.setState((prevState) => {
            return { listaProductosForm: [...prevState.listaProductosForm, this.state.listaProductosForm.length] };
        })
    }

    private eliminarProducto = (index: number) => {
        this.setState((prevState) => ({
            listaProductosForm: prevState.listaProductosForm.filter((_, i) => i !== index),
        }));
    };

    private handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        console.log(value)
        this.setState((prevState) => ({
            orderDetails: {
                ...prevState.orderDetails,
                [name]: value,
            },
            orderItems: {
                ...prevState.orderItems,
                [name]: value,
            }
        }));
    }

    private handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.orderDetails)
        console.log(this.state.orderItems)
    }

    render() {
        return (
            <>
            <div className="mt-24"></div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 m-8 ml-48">Realiza un pedido</h2>
                <form className="mx-48 my-10" onSubmit={this.handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="titulo" className="block mb-2 text-sm font-medium text-gray-900">Título</label>
                        <InputField name="titulo" type={'text'} onChange={this.handleInputChange}></InputField>
                    </div>
                    <div className="grid gap-6 md:grid-cols-5">
                        <label htmlFor="producto" className="block mb-2 text-sm font-medium text-gray-900">Producto</label>
                        <label htmlFor="cantidad" className="block mb-2 text-sm font-medium text-gray-900">Cantidad</label>
                        <label htmlFor="precio" className="block mb-2 text-sm font-medium text-gray-900">Precio unitario</label>
                        <label htmlFor="medida" className="block mb-2 text-sm font-medium text-gray-900">Unidad</label>
                    </div>
                    {
                        this.state.listaProductosForm.map((_, index) => (
                            <div key={index} className="grid gap-6 mb-5 md:grid-cols-5">
                                <div>
                                    <select name="product_id" id="product_id" defaultValue={1} onChange={this.handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-600 focus:border-primary-600">
                                        {
                                            this.state.productos.map(element => (
                                                <option key={element.product_id} value={element.product_id}>{element.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div>
                                    <InputField name="cuantity" type={'text'} onChange={this.handleInputChange}></InputField>
                                </div>
                                <div>
                                    <InputField name="price" type={'text'} onChange={this.handleInputChange}></InputField>
                                </div>
                                <div>
                                    <select name="measure_id" id="_measure_id" defaultValue={1} onChange={this.handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-600 focus:border-primary-600">
                                        {
                                            this.state.unidades.map(element => (
                                                <option key={element.measure_id} value={element.measure_id}>{element.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="flex items-end">
                                    <button onClick={() => this.agregarProducto()} type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mx-2 mb-0.5">Agregar</button>
                                    <button onClick={() => this.eliminarProducto(index)} type="button" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mx-2 mb-0.5 disabled:bg-gray-200" disabled={this.state.listaProductosForm.length === 1}>Eliminar</button>
                                </div>
                            </div>
                        ))
                    }
                    <div className="mb-5">
                        <label htmlFor="fechaEntrega" className="block mb-2 text-sm font-medium text-gray-900">Fecha entrega</label>
                        <InputField name="fecha_entrega" type={'text'} onChange={this.handleInputChange}></InputField>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="direccion" className="block mb-2 text-sm font-medium text-gray-900">Dirección</label>
                        <InputField name="direccion" type={'text'} onChange={this.handleInputChange}></InputField>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="descripcion" className="block mb-2 text-sm font-medium text-gray-900">Descripción</label>
                        <InputField name="descripcion" type={'text'} onChange={this.handleInputChange}></InputField>
                    </div>
                    <div className="w-28 m-auto"><GreenButton label="Publicar"></GreenButton></div>
                </form>
            </>
        )
    }

}

export default CrearPedidoPage