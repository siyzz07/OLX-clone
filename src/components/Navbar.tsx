
import olx from '../assets/unnamed.jpg';
import search from '../assets/images.png';
import arrow from '../assets/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg';
import { Login } from './Login';
import { useEffect, useState } from 'react';
import { AddProduct } from './AddProduct';
// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { auth } from '../firebase/setup';
import{useAuth}from '../components/AuthContext'

export const Navbar = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [addproductPopUp, setAddProductPopUp] = useState(false);
  const {logout,user} = useAuth()
  return (
    <>
      <div className='flex place-content-evenly shadow'>
        <img src={olx} className='w-20 h-15' />

        <div className='flex border-2 border-spacing-1 w-75 p-2 items-center ml-5 h-15 mt-2 border-black rounded-xs'>
          <img src={search} className='w-16 h-14' />
          <input type='text' placeholder='location' className='outline-none' />
          <img src={arrow} className='w-10 h-12' />
        </div>

        <div className='flex ml-5 h-15 border-2 border-black mt-2 w-149 items-center justify-between'>
          <input type='text' placeholder='  search bike, cars' />
          <img src={search} className='w-13' />
        </div>

        <div className='flex items-center ml-5'>
          <h1 className='font-semibold'>ENGLISH</h1>
          <img src={arrow} className='w-9 h-10' />
        </div>

        {user ? (
          <div
            className='flex items-center ml-5 cursor-pointer underline hover:no-underline'
            onClick={logout}
          >
            <h1 className='font-semibold'>LOGOUT</h1>
          </div>
        ) : (
          <div
            className='flex items-center ml-5 cursor-pointer underline hover:no-underline'
            onClick={() => setLoginPopup(!loginPopup)}
          >
            <h1 className='font-semibold'>LOGIN</h1>
          </div>
        )}

        {user && (<div
          onClick={() => setAddProductPopUp(!addproductPopUp)}
          className='flex items-center ml-5 rounded-full cursor-pointer border border-yellow-500 mt-2 h-10 w-20'
        >
          <h1 className='font-semibold justify-center items-center pl-2'>+ SELL</h1>
        </div>)}
      </div>

         {loginPopup && < Login setLogin={setLoginPopup}/>} 
          {addproductPopUp && <AddProduct setLogin={setAddProductPopUp}/>} 
    </>
  );
};
