import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Error from "./pages/Error404"
import Portfolio from "./pages/Portfolio"
import Transactions from "./pages/Transactions"
import Wishlist from "./pages/Wishlist"
import CommoditiesDetails from "./pages/CommoditiesDetails"
import CryptoDetails from "./pages/CryptoDetails"
import AllCryptosData from "./components/AllCryptos"

function App() {
  return <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/*" element={<Error />} />
      <Route path="/all-cryptos" element={<AllCryptosData />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/transaction" element={<Transactions />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/commodities-data" element={<CommoditiesDetails />} />
      <Route path="/crypto-details" element={<CryptoDetails />} />
    </Routes></>
}

export default App
