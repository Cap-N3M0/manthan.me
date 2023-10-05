import Portfolio from './component/Portfolio';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Header from './component/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path={'/*'} Component={Portfolio} />
        <Route path='/projects' Component={Projects} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
