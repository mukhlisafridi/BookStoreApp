import React from 'react';
import { useAuth } from './../context/AuthProvider';
import { useNavigate } from 'react-router-dom'; 
import { toast } from 'react-hot-toast';

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout Successfully!");

      // Delay the page reload to allow toast notification to show
      setTimeout(() => {
        window.location.reload();
        navigate('/');
      }, 1500); // 1.5 seconds delay
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div>
      <button onClick={logoutHandler} className="bg-pink-500 px-3 py-2 rounded-md text-white cursor-pointer">
        Logout
      </button>
    </div>
  );
};

export default Logout;
