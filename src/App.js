import logo from './logo.svg';
import './App.css';
import Home from "./components/home";
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-250162165-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <Home></Home>
  );
}

export default App;
