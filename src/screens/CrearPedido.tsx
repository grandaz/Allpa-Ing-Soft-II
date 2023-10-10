import LandingNavBar from "../components/NavBar/LandingNavBar"
import InputField from "../components/Inputs/InputField"
import GreenButton from "../components/Inputs/GreenButton"

function CrearPedido() {

    const productos = [
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

    return (
        <>
            <LandingNavBar></LandingNavBar>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Título</label>
                <InputField type={'text'}></InputField>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Producto</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-600 focus:border-primary-600">
                {
                    productos.map(element => (
                        <option value={element.id}>{element.nombre}</option>
                    ))
                }
                </select>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Cantidad</label>
                <InputField type={'text'}></InputField>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Precio</label>
                <InputField type={'text'}></InputField>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Fecha entrega</label>
                <InputField type={'text'}></InputField>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Descripción</label>
                <InputField type={'text'}></InputField>
            </div>
            <div className="w-20"><GreenButton label="Publicar"></GreenButton></div>

        </>
    )
}

export default CrearPedido