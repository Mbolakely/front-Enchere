import './App.css'
import Dashboard from './containers/Dashboard';
import Home from './containers/Home';
import Categories from './containers/Categories';
import Articles from './containers/Articles';
import Locations from './containers/Locations';
import Calendar from './containers/Session';
import SignUp from './containers/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './containers/About';
import Login from './containers/Login';

function App() {

  return (
    <div className='bg-[#f5eded]'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/home' element={<Dashboard/>}/>
          <Route path='/category' element={<Categories/>}/>
          <Route path='/article' element={<Articles/>}/>
          <Route path='/location' element={<Locations/>}/>
          <Route path='/session' element={<Calendar/>}/>
          <Route path='/about' element={<About/>}/>
        </Route>
      <Route path='/sign' element={<SignUp/>}></Route>    
      <Route path='/login' element={<Login/>}></Route>    
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
