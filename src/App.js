import logo from './logo.svg';
import './App.css';

import Home from './Components/Home';
import AttendenceRegister from './Components/AttendenceRegister';
import TimeTable from './Components/TimeTable';
import Feedback from './Components/Feedback';
import Profile from './Components/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import NavBar from './Components/NavBar';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Feedback" element={<Feedback/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/TimeTable" element={<TimeTable/>} />
          <Route path="/AttendenceRegister" element={<AttendenceRegister/>} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
