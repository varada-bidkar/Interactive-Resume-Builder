import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Build from './pages/Build';
import Sign from './pages/Sign';
import NotFoundComp from './pages/NotFoundComp';

function App() {
  return (
    <>
    <div className='header'>
      <div className='title'>
        <h2>resumeee</h2>
      </div>
      <div className='links'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/build'>BuildYourResume </NavLink>
          </div>
          <Link to="/sign">
        <button>SignIn</button>
      </Link>
    </div>

    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/build' Component={Build}/>
      <Route path='/sign' Component={Sign}/>
      <Route path='*' Component={NotFoundComp}/>
    </Routes>
    </>
  );
}

export default App;
