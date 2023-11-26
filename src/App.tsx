import LandingPage from './screens/LandingPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from './screens/LoginPage'
import SignInPage from './screens/SignInPage'
import AboutUsPage from './screens/AboutUsPage'
import InicioPage from './screens/InicioPage'
import PedidosPage from './screens/PedidosPage'
import ProductosPage from './screens/ProductosPage'
import MisPedidosPage from './screens/MisPedidosPage'
import SupportPage from './screens/SupportPage'
import CrearPedidoPage from './screens/CrearPedidoPage'
import LandingNavBar from './components/NavBar/LandingNavBar'
import EditProfilePage from './screens/EditProfilePage'
import { Component } from 'react'
import DetallePedido from './screens/DetallePedidoPage'
import HistorialPedidos from './screens/HistorialPedidos'
import DetalleProductoPage from './screens/DetalleProductoPage'
import RestablecerContraPage from './screens/RestablecerContraPage'
import MisParticipaciones from './screens/MisParticipaciones'
import EditarPedidoPage from './screens/EditarPedidoPage'


export default class App extends Component {

  

  render() {
    return (
      <Router>
        <LandingNavBar></LandingNavBar>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/landing' component={LandingPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={SignInPage} />
          <Route path='/inicio' component={InicioPage} />
          <Route path='/pedidos' component={PedidosPage} />
          <Route path='/productos' component={ProductosPage} />
          <Route path='/nosotros' component={AboutUsPage} />
          <Route path='/misPedidos' component={MisPedidosPage} />
          <Route path='/soporte' component={SupportPage} />
          <Route path='/crearPedido' component={CrearPedidoPage} />
          <Route path='/detallePedido/:id' component={DetallePedido} />
          <Route path='/edit' component={EditProfilePage} />
          <Route path='/pedidosUsuario' component={EditProfilePage} />
          <Route path='/historialPedidos' component={HistorialPedidos} />
          <Route path='/detalleProducto/:id' component={DetalleProductoPage} />
          <Route path='/restablecerContra' component={RestablecerContraPage} />
          <Route path='/misParticipaciones' component={MisParticipaciones} />
          <Route path='/editarPedido/:id' component={EditarPedidoPage} />
        </Switch>
      </Router>
    )
  }


}