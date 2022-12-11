import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <div className="App">
    <NavbarComponent/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
