import React from "react";
import Home from "./home/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Courses from "./courses/Courses";
import { Signup } from "./components/Signup";
import { Contact } from "./components/Contact";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthProvider.jsx"; // AuthProvider imported correctly
import { useAuth } from "./context/AuthProvider.jsx";  // Correct useAuth import

function App() {
  
  return (
    <AuthProvider> {/* Wrap the entire app with AuthProvider */}
      <div className="dark:bg-slate-900 dark:text-white">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Protected Route for Courses */}
            <Route path="/course" element={<ProtectedRoute Component={Courses} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </AuthProvider>
  );
}

// ProtectedRoute component to manage access to protected routes
function ProtectedRoute({ Component }) {
  const [authUser] = useAuth();  // Access authUser using useAuth
  
  return authUser ? <Component /> : <Navigate to="/signup" />; // Redirect to signup if not authenticated
}

export default App;
