import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TestHeader from "./Components/Header/TestHeader";
import AboutUs from "./View/AboutUs";
import SignUp from "./View/Sign Up/Index";
import Home from "./View/Home";
import NotesPaper1 from "./View/Notes/Paper1";
import NotesPaper2 from "./View/Notes/Paper2";
import ContactUs from "./View/ContactUs/index.jsx";
import Dashboard from "./View/dashboard/index";
import Login from "./View/Login/index";
import CoursesPaper1 from "./View/Courses/Paper1";
import Paper2Commerce from "./View/Courses/Paper2Commerce";
import Paper2Management from "./View/Courses/Paper2Management"
import NewIndex from "./View/Test Series/NewIndex";
import { TestPanel } from "./Store/testPageContext";
import PaperDetails from "./View/Test List/PaperDetails"
import Plans from "./View/Test Series/Plans";
import Test from "./View/TestPage/Test";
import Admin from "./View/admin/Admin";
import { useState } from "react";
import Subject from "./View/admin/Subject";
import AddSubject from "./View/admin/AddSubject";
import AddTest from "./View/admin/AddTest";
import Chapter from "./View/admin/Chapter";
import AdminTest from "./View/admin/Test";
import AddChapter from "./View/admin/AddChapter";
import AddFile from "./View/admin/AddFile";
import AddQuestion from "./View/admin/AddQuestion";
import SubjectCard from "./View/Test Series/SubjectCard";
import Questions from "./View/admin/NewAdmin/Questions";
import QuestionList from "./View/admin/NewAdmin/QuestionList";
import CircleProgressBar from "./View/TestPage/CircleProgressBar"
import Terms from "./View/Terms & Condition/Index"
import Privacy from "./View/Privacy & Policy/Index"


const App = () => {
  const [startTimer,setStartTimer] = useState(false)
  const [endTimer,setEndTimer] = useState(false)
  if (window.location.href.includes("/admin")) {
    return (
      <Router>
          <div>
        <Switch>
          {/* <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/subject/:subjectId" component={Subject} />
          <Route exact path="/admin/addsubject/:subjectId" component={AddSubject} />
          <Route exact path="/admin/chapter/:chapterId" component={Chapter} />
          <Route exact path="/admin/addchapter/:chapterId" component={AddChapter} />
          <Route exact path="/admin/test/:testId" component={AdminTest} />
          <Route exact path="/admin/addtest/:testId" component={AddTest} />
          <Route exact path="/admin/addquestion/:questionId" component={AddQuestion} />
          <Route exact path="/admin/addfile" component={AddFile} /> */}
          <Route exact path="/admin/question" component={Questions} /> 
          <Route exact path="/admin/add-question/:quesid" component={QuestionList} />
        </Switch>
          </div>
      </Router>
    );
  } else if (window.location.href.includes("/test-page")) {
    return (
      <Router>
          <TestHeader timer={startTimer} endtimer={setEndTimer}/>
        <TestPanel>
          <div style={{ paddingTop: "5em" }}>
            <Switch>
              <Route exact path="/test-page">
                <Test starttimer={setStartTimer} timer={endTimer}/>
                <CircleProgressBar />
                </Route>
            </Switch>
          </div>
        </TestPanel>
      </Router>
    );
  } else {
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
            <Route exact path="/courses/paper2commerce" component={Paper2Commerce} />
            <Route exact path="/courses/paper2management" component={Paper2Management} />
            <Route exact path="/notes/paper1" component={NotesPaper1} />
            <Route exact path="/notes/paper2" component={NotesPaper2} />
            <Route exact path="/notes/testseries" component={NotesPaper2} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/test-series" component={TestSeries} /> */}
            <Route exact path="/test-series" component={NewIndex} />
            <Route exact path="/subjects/:subjectId" component={SubjectCard} />
            <Route exact path="/info/:paper">
              <PaperDetails/>
              </Route>
            <Route exact path="/plans" component={Plans} />
            {/* <Route exact path="/info" component={Instruction} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
};

export default App;
