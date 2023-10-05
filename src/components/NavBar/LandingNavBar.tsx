import Logo from '../../assets/logo1_icon.png'

export default function LandingNavBar() {
    return (
        <nav className="bg-white light:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 light:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/inicio" className="flex items-center">
                    <img src={Logo} className="h-8 mr-3" alt="Allpa Logo"></img>
                </a>
                <div className="flex md:order-2">
                    <a href='/login'><button type="button" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 light:bg-emerald-600 light:hover:bg-emerald-700 light:focus:ring-emerald-800">Iniciar sesión</button></a>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white light:bg-gray-800 md:light:bg-gray-900 light:border-gray-700">
                        <li>
                            <a href="/inicio" className="block py-2 pl-3 pr-4 text-white bg-emerald-700 rounded md:bg-transparent md:text-emerald-700 md:p-0 md:light:text-emerald-500" aria-current="page">Inicio</a>
                        </li>
                        <li>
                            <a href="/pedidos" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-700 md:p-0 md:light:hover:text-emerald-500 light:text-white light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700">Pedidos</a>
                        </li>
                        <li>
                            <a href="/productos" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-700 md:p-0 md:light:hover:text-emerald-500 light:text-white light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700">Productos</a>
                        </li>
                        <li>
                            <a href="/nosotros" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-700 md:p-0 md:light:hover:text-emerald-500 light:text-white light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700">Sobre nosotros</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-700 md:p-0 md:light:hover:text-emerald-500 light:text-white light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700">Soporte</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}