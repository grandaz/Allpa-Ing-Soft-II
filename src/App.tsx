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
import PedidosxProductoPage from './screens/PedidosxProductoPage'
import { Component } from 'react'
import QuickViewPedido from './components/DetallePedido/DetallePedido'
import Pruebas from './screens/Pruebas'

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
          <Route path='/detallePedido' component={QuickViewPedido} />
          <Route path='/edit' component={EditProfilePage} />
          <Route path='/pedidosProducto' component={PedidosxProductoPage} />
          <Route path='/pedidosUsuario' component={EditProfilePage} />
          <Route path='/pruebas' component={Pruebas} />
        </Switch>
      </Router>
    )
  }


}