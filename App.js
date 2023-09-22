import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './component/Main';
import About from './component/About';
import Contact from './component/Contact';
import Nav from './component/Nav';
import Header from './component/Header';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;