import './App.css';
import Home from "./components/home";
import Navigation from './components/nav';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Style1 from './components/style1';

function App() {
  return (
    <Router>
    <Navigation />
    <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/style1' element={<Style1/>} />
    </Routes>
    </Router>
  );
}

export default App;

  