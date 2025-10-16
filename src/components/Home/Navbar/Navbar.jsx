import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css';
import { AuthContext } from '../../../context/AuthContext/AuthContext';


const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () =>{
    signOutUser()
    .then(() =>{
      
    })
    .catch(error => {
      console.log(error)
    })
  }



    const links = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/login'>Login</NavLink></li>
      <li><NavLink to='/register'>Register</NavLink></li>
      <li><NavLink to='/dashboard'>Dashboard</NavLink></li>


      {
        user && <>
    <li><NavLink to='/orders'>Orders</NavLink></li>
    <li><NavLink to='/profile'>Profile</NavLink></li>

        </>
      }
    </>
    return (
     <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
 <div className='flex mx-auto justify-items-center ml-40 gap-10'>
      {
    links
   }
 </div>
    

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
        links
    }
    </ul>
  </div>
  <div className="navbar-end">
   { user ? <a onClick={handleSignOut} className="btn">Sing Out</a> : <Link to="/login">Login</Link>}
 
  </div>
</div>
    );
};

export default Navbar;