import { Form, Outlet, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Header } from "./components/Header/Header";
import { Register } from "./pages/Register";

const Layout = () => {
  return (
    <div className = "App">
    <Header/>
      <div className="container">
        <Outlet/>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
      </Route>
    </Routes>
  )
}

export default App
