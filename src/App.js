import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUs from "./View/AboutUs";
import Home from "./View/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="content-wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
