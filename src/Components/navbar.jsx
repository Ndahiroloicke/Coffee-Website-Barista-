import React, { useEffect, useState } from 'react'

const Navbar = () => {
   const [scroll,setscroll] = useState(false);
   useEffect(()=>{
    const handlescroll = () =>{
        const isscrolled = window.scrollY>0;
        setscroll(isscrolled)
    }
    window.addEventListener("scroll",handlescroll);
     return () => window.removeEventListener("scroll",handlescroll)
   },[])
  return (
    <div className={scroll ? 'scrolled' : 'navigation'} >
        <ul>
            <li>HOME</li>
            <li>ICED ESPRESSO</li>
            <li>CAPPUCCINO</li>
            <li>MORE</li>
            <li>BLOOS</li>
        </ul>
        <div>
        <input type="text" placeholder='Search...'/>
        <li><i class='bx bx-search-alt-2'></i></li>
        </div>
    </div>
  )
}

export default Navbar