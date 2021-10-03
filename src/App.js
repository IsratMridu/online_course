import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>

        </Switch>
        <Footer></Footer>
      </Router>

      
    </div>
  );
}

export default App;
