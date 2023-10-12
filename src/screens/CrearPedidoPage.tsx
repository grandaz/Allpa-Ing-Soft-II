import LandingNavBar from "../components/NavBar/LandingNavBar"
import InputField from "../components/Inputs/InputField"
import GreenButton from "../components/Inputs/GreenButton"
import { Component } from "react"

interface CrearPedidoPageProps {

}

interface CrearPedidoPageState {
    listaProductosForm: number[];
}

class CrearPedidoPage extends Component<CrearPedidoPageProps, CrearPedidoPageState> {

    productos = [
        {
            id: 1,
            nombre: 'Papa'
        },
        {
            id: 2,
            nombre: 'Zanahoria'
        },
        {
            id: 3,
            nombre: 'Uva'
        },
        {
            id: 4,
            nombre: 'Quinoa'
        }
    ]

    constructor(props: CrearPedidoPageProps) {
        super(props);

        this.state = {
            listaProductosForm: [this.productos[0].id],
        }
    }

    private agregarProducto() {
        this.setState((prevState) => {
            return { listaProductosForm: [...prevState.listaProductosForm, this.productos[0].id] };
        })
    }

    private eliminarProducto = (index: number) => {
        this.setState((prevState) => ({
            listaProductosForm: prevState.listaProductosForm.filter((_, i) => i !== index),
        }));
    };


    render() {
        return (
            <>
                <LandingNavBar></LandingNavBar>
                <form className="mx-20 my-10">
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Título</label>
                        <InputField type={'text'}></InputField>
                    </div>
                    {
                        this.state.listaProductosForm.map((_, index) => (
                            <div key={index} className="grid gap-6 mb-5 md:grid-cols-4">
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Producto</label>
                                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-600 focus:border-primary-600">
                                        {
                                            this.productos.map(element => (
                                                <option key={element.id}>{element.nombre}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Cantidad</label>
                                    <InputField type={'text'}></InputField>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Precio</label>
                                    <InputField type={'text'}></InputField>
                                </div>
                                <div className="flex items-end">
                                    <input onClick={() => this.agregarProducto()} type="button" value="Agregar" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mx-2 mb-0.5"></input>
                                    <input onClick={() => this.eliminarProducto(index)} type="button" value="Eliminar" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mx-2 mb-0.5"></input>
                                </div>
                            </div>
                        ))
                    }
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Fecha entrega</label>
                        <InputField type={'text'}></InputField>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Descripción</label>
                        <InputField type={'text'}></InputField>
                    </div>
                    <div className="w-20"><GreenButton label="Publicar"></GreenButton></div>
                </form>
            </>
        )
    }

}

export default CrearPedidoPage