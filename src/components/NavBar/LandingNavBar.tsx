import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo1_icon.png'
import GreenButton from '../Inputs/GreenButton'

export default function LandingNavBar() {

    const location = useLocation();

    return (
        <>
            <nav className="bg-white light:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 light:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/inicio" className="flex items-center">
                        <img src={Logo} className="h-8 mr-3" alt="Allpa Logo"></img>
                    </a>
                    <div className="flex md:order-2">
                        <a href='/login'><GreenButton type='button' label='Iniciar sesión'></GreenButton></a>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Link
                                    to="/inicio"
                                    className={`block py-2 pl-3 pr-4 ${location.pathname === '/inicio'
                                        ? 'md:text-emerald-700'
                                        : 'md:hover:text-emerald-700'
                                        } md:p-0`}
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/pedidos"
                                    className={`block py-2 pl-3 pr-4 ${location.pathname === '/pedidos'
                                        ? 'md:text-emerald-700'
                                        : 'md:hover:text-emerald-700'
                                        } md:p-0`}
                                >
                                    Pedidos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/productos"
                                    className={`block py-2 pl-3 pr-4 ${location.pathname === '/productos'
                                        ? 'md:text-emerald-700'
                                        : 'md:hover:text-emerald-700'
                                        } md:p-0`}
                                >
                                    Productos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/nosotros"
                                    className={`block py-2 pl-3 pr-4 ${location.pathname === '/nosotros'
                                        ? 'md:text-emerald-700'
                                        : 'md:hover:text-emerald-700'
                                        } md:p-0`}
                                >
                                    Sobre nosotros
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/soporte"
                                    className={`block py-2 pl-3 pr-4 ${location.pathname === '/soporte'
                                        ? 'md:text-emerald-700'
                                        : 'md:hover:text-emerald-700'
                                        } md:p-0`}
                                >
                                    Soporte
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="h-16"></div>
        </>
    )
}


