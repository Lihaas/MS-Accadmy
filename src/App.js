import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUs from "./View/AboutUs";
import SignUp from "./View/Sign Up/Index"
import Home from "./View/Home";
import NotesPaper1 from "./View/Notes/Paper1"
import NotesPaper2 from "./View/Notes/Paper2"
import ContactUs from "./View/ContactUs";
import Dashboard from "./View/dashboard/index"
import Login from "./View/Login/index"
import CoursesPaper1 from "./View/Courses/Paper1"
import CoursesPaper2 from "./View/Courses/Paper2"

const App = () => {
  return (
    <Router>
      <Header />
      <div className="content-wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/courses/paper1" component={CoursesPaper1} />
          <Route exact path="/courses/paper2" component={CoursesPaper2} />
          <Route exact path="/notes/paper1" component={NotesPaper1} />
          <Route exact path="/notes/paper2" component={NotesPaper2} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
