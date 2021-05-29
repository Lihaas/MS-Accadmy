import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUs from "./View/AboutUs";
import SignUp from "./Components/Sign Up/Index"
import examDetail from "./Components/Exam Detail/index"
import Home from "./View/Home";
import Notes from "./Components/Notes/index";

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
          <Route exact path="/exam-detail" component={examDetail} />
          <Route exact path="/notes" component={Notes} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
