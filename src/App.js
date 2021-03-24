import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import NavBar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
 


function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
          <Header />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={About} />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
