import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import User from './Components/User';
import DisplayUser from './Components/DisplayUser';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route element={<User/>} path="/adduser/" />
        
        <Route element={<DisplayUser/>} path="/displayuser/"/></Routes>
      </Router>
      
    </div>
  );
}

export default App;

