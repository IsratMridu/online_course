import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AllCourses from './components/AllCourses/AllCourses';
import IndividualCourse from './components/IndividualCourse/IndividualCourse';


function App() {
  
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/allcourses">

              <AllCourses></AllCourses>
          </Route>
          <Route exact path="/allcourses/:courseId">
              <IndividualCourse></IndividualCourse>
          </Route>
          

        </Switch>
        <Footer></Footer>
      </Router>

      
    </div>
  );
}

export default App;
