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

    unidades = [
        {
            id: 1,
            nombre: 'kg'
        },
        {
            id: 2,
            nombre: 'unidades'
        },
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
                    <div className="grid gap-6 md:grid-cols-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Producto</label>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Cantidad</label>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Precio unitario</label>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Unidad</label>
                    </div>
                    {
                        this.state.listaProductosForm.map((_, index) => (
                            <div key={index} className="grid gap-6 mb-5 md:grid-cols-5">
                                <div>
                                    <select id="productos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-600 focus:border-primary-600">
                                        {
                                            this.productos.map(element => (
                                                <option key={element.id}>{element.nombre}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div>
                                    <InputField type={'text'}></InputField>
                                </div>
                                <div>
                                    <InputField type={'text'}></InputField>
                                </div>
                                <div>
                                    <select id="unidades" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-600 focus:border-primary-600">
                                        {
                                            this.unidades.map(element => (
                                                <option key={element.id}>{element.nombre}</option>
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
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Fecha entrega</label>
                        <InputField type={'text'}></InputField>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Descripción</label>
                        <InputField type={'text'}></InputField>
                    </div>
                    <div className="w-28 m-auto"><GreenButton label="Publicar"></GreenButton></div>
                </form>
            </>
        )
    }

}

export default CrearPedidoPage