import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Navbar"

function App() {
  return <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route />
      <Route />
      <Route />
      <Route />
    </Routes></>
}

export default App
