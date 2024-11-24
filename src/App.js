import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Banner} from './components/Banner' 
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contacct } from './components/Contact';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contacct/>
    </div>
  );
}

export default App;
