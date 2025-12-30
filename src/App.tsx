import './styles/App.css'
import { Login } from './pages/Login'
import { Dashbord } from './pages/Dashbord'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashbord" element={<Dashbord />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
