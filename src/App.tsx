import Navbar from "./components/Navbar";
import MobNavbar from "./components/MobNavbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import FeatureSectionFruits from "./components/FeatureSectionFruits";
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast";
// import ProductCard from "./components/ProductCard";
import Banner from "./components/Banner";
import BlogSection from "./components/BlogSection";
import NewsLetter from "./components/NewsLetter";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Cart from './components/Cart'
import {CartContextProvider} from "./context/CartContext";
import {useState} from "react"

const App = () => {

  const [showCart, setShowCart] = useState(false);

  return (
    <CartContextProvider>
    <main>
      <Navbar setShowCart ={setShowCart} />
      <MobNavbar setShowCart ={setShowCart} />
      <Hero />
      <Category />
      {/* <ProductCard /> */}
      <FeatureSectionFruits />
      <FeatureSectionBreakfast />
      <Banner />
      <BlogSection />
      <NewsLetter />
      <Feature />
      <Footer />
      {showCart && <Cart showCart={showCart} setShowCart ={setShowCart} />}
    </main>
    </CartContextProvider>
   
  );
};

export default App;
