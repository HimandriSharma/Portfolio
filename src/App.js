
import './App.css';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
       <Switch>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    
    </div>
    </Router>
  );
}

export default App;
