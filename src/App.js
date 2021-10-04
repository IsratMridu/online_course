import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AllCourses from './components/AllCourses/AllCourses';
import IndividualCourse from './components/IndividualCourse/IndividualCourse';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';


function App() {
  
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          
          <Route exact path="/">

            <Home></Home>
          </Route>
          <Route exact path="/home">

            <Home></Home>
          </Route>

          <Route exact path="/allcourses">

              <AllCourses></AllCourses>
          </Route>
          <Route exact path="/allcourses/:courseid">
              <IndividualCourse></IndividualCourse>
          </Route>
          <Route exact path="/about">
              <About></About>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
          

        </Switch>
        <Footer></Footer>
      </Router>

      
    </div>
  );
}

export default App;
