import Portfolio from './Pages/Portfolio';
import Projects from './component/RcProjects';
import Contact from './component/Contact';
import RC_HEADER from './component/RcHEADER';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <RC_HEADER />

      <Routes>
        <Route path={'/*'} Component={Portfolio} />
        <Route path='/project' Component={Projects} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
