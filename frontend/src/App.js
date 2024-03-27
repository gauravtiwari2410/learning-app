import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./component/home/home";
import Header from './component/header/header';
import Footer from './component/footer/footer';
import AboutUs from './component/about/about';
import Courses from './component/courses/course';
import Login from './component/login/login';
import Signup from './component/signup/signup';
import ShowCart from './component/cart/showCart';
import ShowDemo from './component/demo/demo';
import ContactUs from './component/contactUs/contactUs';
import CourseContent from './component/courses/coursecontent';
import React, { useState } from "react";
import { AuthProvider } from './component/auth/auth';


function App() {

  const [courseCount, setCourseCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [loginStatus, setloginStatus] = useState(false);

const loginStatusMethod = () => {
  setloginStatus(true);
}
const loginStatusMethodfalse = () => {
  setloginStatus(false);
}

  const increment = (item) => {
    if (cartItems.includes(item)) {
      // If the item is already in the cart, show an alert.
      alert("This course is already in cart");
    } else {
      // If the item is not in the cart, add it and increment the counter.
      setCartItems([...cartItems, item]);
      setCourseCount(courseCount + 1);
    }
  };
  

  const decrement = (item) => {
    const index = cartItems.indexOf(item);
    if(courseCount>0){
      if(index !== -1){
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
        setCourseCount(courseCount - 1);
      }
    }else{
      alert("This course is not present in the cart")
    }
  };

  return (
    <>
      <Router>
      <AuthProvider>
        <Header courseCount={courseCount} loginStatus={loginStatus} loginStatusMethodfalse={loginStatusMethodfalse}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/courses" element={<Courses increment={increment} decrement={decrement} />} />
          <Route path="/login" element={<Login loginStatus={loginStatus} loginStatusMethod={loginStatusMethod} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/showcart" element={<ShowCart courseName={cartItems} increment={increment} decrement={decrement} />} />
          <Route path="/showdemo" element={<ShowDemo />} />
          <Route path="/coursecontent" element={<CourseContent />} />
        </Routes>
        <Footer />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
