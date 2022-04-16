import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Services from './Pages/Home/Services/Services';
import Experts from './Pages/Home/Experts/Experts';
import ServiceDetails from './Pages/Home/Service/ServiceDetails/ServiceDetails';
import NotAvailable from './Pages/NotAvaiable/NotAvailable';
import Register from './Pages/Login/Register/Register';
import Checkout from './Pages/Home/Service/Checkout/Checkout';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
function App() {
  return (
    <div className='root_app'>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/checkout' element={
            <RequireAuth>
              <Checkout/>
            </RequireAuth>
          }></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/service/:serviceId' element={<ServiceDetails/>}></Route>
          <Route path='/experts' element={<Experts/>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/about' element={
            <RequireAuth>
              <About></About>
            </RequireAuth>
          }></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='*' element={<NotAvailable/>}></Route>
        </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
