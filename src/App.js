import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";
import Navbar from './layout/Navbar';
import NotFound from './pages/NotFound';
import Website from './pages/Website';
import Ads from './pages/Ads';
import Business from './pages/Business';
import Home from './pages/Home';
import Foter from './components/Foter';
import { paperClasses } from '@mui/material';
import About from './pages/About';
import Contact from './pages/Contact';
import NavTop from './components/NavTop';


function App() {
  return (
    
      <Router>
      <div className="App">
        <NavTop/>
        <Navbar/>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Website" component={Website} />
          <Route exact path="/Ads" component={Ads} />
          <Route exact path="/Business" component={Business} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route component={NotFound} />   
        </Switch>
        <Foter/>
      </div>
    </Router>
   
  );
}

export default App;


