import React, { useState } from "react";
import pic from "../Assets/Image/Free Photo _ Coffee beans with props for making coffee.jpeg"
import pic2 from "../Assets/Image/Coffee.webp"
const Bigpic = () => {
    const [picture,setpicture] = useState(pic)
    
    const handleclick = () => {
        setpicture(pic2)
    }
    const handleclick2 = () =>{
        setpicture(pic)
    }
  return (
    <div className="pic">
        <li className="right" onClick={handleclick2}><i class='bx bx-chevron-right-circle'></i></li>
        <li className="left" onClick={handleclick}><i class='bx bx-chevron-left-circle'></i></li>
      <img src={picture} alt="Home" />
      <div>
        <p>Delicious Coffee</p>
        <h1>Freshly Roasted <br /> Coffee</h1>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default Bigpic;
