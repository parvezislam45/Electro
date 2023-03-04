
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Home/Footer';
import Home from './Components/Home/Home';
import Nav1 from './Components/Nav1';

function App() {
  return (
    <div className="App">
      <Nav1></Nav1>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
