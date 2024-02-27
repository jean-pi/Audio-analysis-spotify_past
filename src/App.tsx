import { Routes, Route, useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"

import { MainApp } from "./pages/mainApp"
import { Landing } from "./pages/landing"

import { publicRoutes } from "./models/routes"
import { restrictedRoutes} from "./models/routes"

function App() {


  useEffect( ()=>{


    return ()=>{}
  },[])


  
  return (
    <Routes>
      <Route path={publicRoutes.LANDING} element={<Landing/>} />
      <Route path={restrictedRoutes.APP} element={<MainApp/>} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}

export default App
