import './assets/css/App.css';
import { Routes,Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        
       </Routes>
        
    </div>
  );
}

export default App;
