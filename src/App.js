import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import "./Assets/CSS/fonts.css"
import Mainpage from "./Components/mainpage";
import AboutUs from './Components/aboutus';
import Brochures from './Components/brochures';
import Footer from './Molecules/footer';
import Products from './Components/products';
import Services from "./Components/services";
import Contact from './Components/contact';
import Data from "./Assets/Json/products.json";
import Data1 from "./Assets/Json/services.json";
import PrivacyPolicy from "./Components/privacypolicy";
import Error from './Components/404';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage/>} />
        
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/brochures" element={<Brochures/>} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
        
          {Data && Data.map((items, index)=>{
            var Prodname=items.ProdName;
            return(
              <Route path={`/${Prodname}`} element={<Products product={Prodname}/>} key={index}/>
            );
          })}
        
          {Data1 && Data1.map((items, index)=>{
            var ServiceName=items.ServiceName;
            var url = items.urlname;
            console.log('url',url)
            return(
              <Route path={`/${url}`} element={<Services Service={ServiceName}/>} key={index}/>
            );
          })}
        
          <Route path="/contact" element={<Contact/>} />
        
          <Route path="*" element={<Error/>}  />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
