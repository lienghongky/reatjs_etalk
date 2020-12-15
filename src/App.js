import logo from './logo.svg';
import './App.css';
import HomePageComponent from './pages/homepage'
import BannerComponent from './pages/banner'
import PlanPage from './pages/plan';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './layouts/header';
import Student from './pages/student';

function App() {
  return (
    <div className="App">
      
     <Router>
      <Header/>
       <Route exact path="/plan" component={PlanPage} />
       <Route exact path="/Banner" component={BannerComponent} />
       <Route exact path="/" component={HomePageComponent} />
       <Route exact path ="/student" component = {Student} />
     </Router>
     
    </div>
  );
}

export default App;

