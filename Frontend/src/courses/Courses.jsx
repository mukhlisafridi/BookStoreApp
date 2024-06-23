import React from 'react'
import Navbar from './../components/Navbar';
import { Footer } from './../components/Footer';
import Course from './../components/Course';
import { Contact } from './../components/Contact';

 
const Courses = () => {
  return (
    <>
    <Navbar/>
    <div class="min-h-screen">
    <Course/>
    </div>
    
    <Footer/>
    
    
    </>
  )
}

export default Courses