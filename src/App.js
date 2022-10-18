import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from "./pages/index"
import Briefing from "./pages/Briefing"
import Settings from "./pages/Settings"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route exact path='/' element={<Home />} />
        <Route path='/briefing' element={<Briefings/>} />
        <Route path='/settings' element={<Settings/>} />
      </Routes>
    </Router>
  );
}

export default App;
