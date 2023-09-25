import Landing from './screens/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './screens/Login'
import SignIn from './screens/SignIn'
import AboutUs from './screens/AboutUs'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignIn/>}/>
        <Route path='/nosotros' element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  )
}