import './App.css';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer'
import ServicesAdmin from './components/Admin/ServicesAdmin';
import ListAdmins from './components/Admin/ListAdmins';
import AddAdmins from './components/Admin/AddAdmins';
import LoginAdmin from './components/Admin/LoginAdmin';
import AdminDash from './components/Admin/AdminDash';

import { Provider } from "react-redux"
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/services' element={<Services />} />
            <Route path='/posts' element={<Services />} />
            <Route path='/admin/services' element={<ServicesAdmin />} />
            <Route path='/admin/list' element={<ListAdmins />} />
            <Route path='/admin/add' element={<AddAdmins />} />
            <Route path='/admin/login' element={<LoginAdmin />} />
            <Route path='/admin/dashboard' element={<AdminDash />} />
          </Routes>
          <Footer />
        </BrowserRouter>  
      </Provider>
    </div>
  );
}

export default App;
