import LandingPage from './screens/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './screens/LoginPage'
import SignInPage from './screens/SignInPage'
import AboutUsPage from './screens/AboutUsPage'
import InicioPage from './screens/InicioPage'
import PedidosPage from './screens/PedidosPage'
import ProductosPage from './screens/ProductosPage'
import MisPedidosPage from './screens/MisPedidosPage'
import SupportPage from './screens/SupportPage'
import CrearPedidoPage from './screens/CrearPedidoPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage/>}/>
        <Route path='/landing' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<SignInPage/>}/>
        <Route path='/inicio' element={<InicioPage/>}/>
        <Route path='/pedidos' element={<PedidosPage/>}/>
        <Route path='/productos' element={<ProductosPage/>}/>
        <Route path='/nosotros' element={<AboutUsPage/>}/>
        <Route path='/misPedidos' element={<MisPedidosPage/>}/>
        <Route path='/soporte' element={<SupportPage/>}/>
        <Route path='/crearPedido' element={<CrearPedidoPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}