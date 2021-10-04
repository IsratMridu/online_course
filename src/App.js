import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AllCourses from "./components/AllCourses/AllCourses";
import IndividualCourse from "./components/IndividualCourse/IndividualCourse";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>

          <Route exact path='/services'>
            <AllCourses />
          </Route>
          <Route exact path='/services/:courseid'>
            <IndividualCourse />
          </Route>
          
          <Route exact path='/aboutus'>
            <About />
          </Route>

          <Route exact path="/gallery">
            <Gallery></Gallery>
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
