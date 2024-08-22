import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Headercomponent/Header';
import About from './components/Aboutcomponent/About';
import Service from './components/Servicecomponent/Service'
import Client from './components/Clientcomponent/Client';
import Contact from './components/Contactcomponent/Contact';
import Footer from './components/Footercomponent/Footer';
import Register from './components/Registercomponent/Register';
import Login from './components/Logincomponent/Login';
import Adminhome from './components/Adminhomecomponent/Adminhome';
import Manageusers from './components/ManageusersComponent/Manageusers';
import Userhome from './components/Userhomecomponent/Userhome';
import Logout from './components/Logoutcomponent/Logout';
import EPAdmin from './components/EPAdminComponent/EPAdmin';
import CPAdmin from './components/CPAdminComponent/CPAdmin';
import Addcategory from './components/AddcategoryComponent/Addcategory';
import Addsubcategory from './components/AddsubcategoryComponent/Addsubcategory';
import Viewproductcategory from './components/ViewProductcategorycomponent/Viewproductcategory';
import Viewproductsubcategory from './components/ViewProductsubcategorycomponent/Viewproductsubcategory';
import Addproduct from './components/AddproductComponent/Addproduct';
import Viewproduct from './components/ViewProductcomponent/Viewproduct';
import Bidproduct from './components/BidproductComponent/Bidproduct';
import Viewbid from './components/ViewbidComponent/Viewbid';
import ViewbidProduct from './components/ViewbidProductComponent/ViewbidProduct';

function App() {
  return (
    <>
      <Header />

      
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/admin" element={<Adminhome />}></Route>
        <Route path="/manageusers" element={<Manageusers />}></Route>
        <Route path="/epadmin" element={<EPAdmin />}></Route>
        <Route path="/cpadmin" element={<CPAdmin />}></Route>
        <Route path="/addcategory" element={<Addcategory />}></Route>
        <Route path="/addsubcategory" element={<Addsubcategory />}></Route>
       <Route path="/user" element={<Userhome/>}></Route>
       <Route path="/viewpc" element={<Viewproductcategory/>}></Route>
       <Route path="/viewpsc/:catnm" element={<Viewproductsubcategory/>}></Route>
       <Route path="/viewp/:subcatnm" element={<Viewproduct/>}></Route>
       <Route path="/bidp/:_id" element={<Bidproduct/>}></Route>
       <Route path="/addproduct" element={<Addproduct/>}></Route>
       <Route path="/viewbidp" element={ <ViewbidProduct />} ></Route>
       <Route path="/viewbid/:p_id" element={<Viewbid />} ></Route>
        <Route path="/logout" element={<Logout/>}></Route>

        
      </Routes>
      <Client />
      <Footer />




      {/* team section */}


      {/* end team section */}


    </>
  );
}

export default App;
