import {BrowserRouter , Route , Switch} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import NavBar from './components/NavBar';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';



const App = () => {
  return  (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route component={Home} path='/' exact />
      <Route component={About} path='/about' />
      <Route component={Project} path='/project' />
      <Route component={Contact} path="/contact" />
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
