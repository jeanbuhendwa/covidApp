import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Country from './pages/DetailsPage';
import HomePage from './pages/homepage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/country/:name" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
