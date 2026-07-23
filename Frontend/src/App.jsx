import Header from "./component/Navbar"
import Hero from "./component/Hero"
import Footer from "./component/Footer"
import SearchByCategory from "./component/SearchByCategory"
import Products from "./component/Products"
import { Outlet, Route, Routes } from "react-router-dom"
import AboutUs from "./component/AboutUs"
import ProductsDetail from "./component/ProductDetails"
import ContactUs from "./component/ContactUs"
import Home from "./Pages/Home"


function App() {
 

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/categories" element={<Outlet/>}>
            <Route index element={<SearchByCategory/>}/>
            <Route path=":id" element={<ProductsDetail/>}/>
          </Route>
        <Route path="/products" element={<Products/>}/>
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
      <Footer/>
      
      
    </>
  )
}

export default App