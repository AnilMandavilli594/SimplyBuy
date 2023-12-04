import React,{useEffect, useState} from 'react';
import Link from 'next/link';
import { AiOutlineShopping,Profile } from 'react-icons/ai'
import { auth } from '../firebase';
import { Cart } from './';
import { useStateContext} from '../context/StateContext';
import { signOut } from '@firebase/auth';
import useAuth from '../useAuth';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const user = useAuth();
  const router = useRouter();
  useEffect(()=>{
    if (user){
      router.push("/")
      console.log("Hii");
    }
  },[])
const doSignOut =() =>{
  signOut(auth).then(() => {
    // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully")
    }).catch((error) => {
    // An error happened.
    });
}

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">JSM Headphones</Link>
      </p>
      <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center' }}>
        {
          user ? (<button style={{alignSelf:"center"}} type="button" className="cart-icon" onClick={() => doSignOut()}>
          <span style={{ fontSize: 12 }}>Signout</span>
        </button>) : (<Link href="/signin">SignIn</Link>)
        }
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>


      {showCart && <Cart />}
    </div>
  )
}

export default Navbar