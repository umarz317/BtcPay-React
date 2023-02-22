import logo from './logo.svg';
import './App.css';
import Pay from './components/Pay';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CallBack from './components/CallBack';

function App() {
  return (
    
    <div>
      <Routes>
          <Route exact path='/' element={<Pay/>} />
          <Route path='/complete' element={<CallBack/>} />
      </Routes>
    </div>
  );
}

export default App;
