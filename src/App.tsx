import Landing from './screens/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './screens/Login'
import SignIn from './screens/SignIn'
import AboutUs from './screens/AboutUs'
import Inicio from './screens/Inicio'
import Pedidos from './screens/Pedidos'
import Productos from './screens/Productos'
import MisPedidos from './screens/MisPedidos'
import Support from './screens/Support'
import CrearPedido from './screens/CrearPedido'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignIn/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/pedidos' element={<Pedidos/>}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='/nosotros' element={<AboutUs/>}/>
        <Route path='/MisPedidos' element={<MisPedidos/>}/>
        <Route path='/soporte' element={<Support/>}/>
        <Route path='/CrearPedido' element={<CrearPedido/>}/>
      </Routes>
    </BrowserRouter>
  )
}