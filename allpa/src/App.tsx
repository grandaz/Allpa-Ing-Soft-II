import Landing from './screens/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './screens/Login'
import SignIn from './screens/SignIn'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  )
}