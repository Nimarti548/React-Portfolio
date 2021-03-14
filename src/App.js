import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import Navbar from './Components/Navbar';
import Header from "./Components/Header";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {
  return (
    <> 
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />  
    </>
  );
}

export default App;
