import Aboutus from "./container/about/Aboutus";
import Chef from "./container/chef/Chef";
import FindUs from "./container/findus/FindUs";
import Footer from "./container/footer/Footer";
import Gallery from "./container/gallery/Gallery";
import Header from "./container/header/Header";
import Intro from "./container/intro/Intro";
import Laurels from "./container/laurels/Laurels"
import Menu from "./container/menu/Menu";


import Navbar from "./components/navbar/Navbar";



import "./App.css"
import "./index.css"


function App() {
  return (
    <>

      <Navbar />
      <Header />
      <Aboutus />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />



    </>
  )
}

export default App