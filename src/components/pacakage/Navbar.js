import React from 'react'
// import {a} from "react-router-dom";
import Tour from "../../img/Tour.jpg";

function Navbar() {
  return (
    <div>
        <header>
          <div className=''>
            <img src={Tour} className='w-full h-[250px] min-[800px]:h-[300px] min-[1000px]:h-[320px] min-[1150px]:h-[350px] shadow-2xl '  alt="" />
          </div>
            <nav className='mt-14 flex justify-center  font-bold text-[#183B83]'>
              <div className="flex gap-4 justify-center items-center flex-wrap">
              <div className=" hover:text-white text-center hover:bg-[#183B83]  bg-transparent  hover:rounded-full hover:p-2  cursor-pointer">
                <a herf="/" >Tour Details</a>
              </div>
              <div className=" hover:text-white hover:bg-[#183B83]  bg-transparent  hover:rounded-full hover:p-2   cursor-pointer">
                <a herf="/business" >Inclusions & Exclusions</a>
              </div>
              <div className=" hover:text-white hover:bg-[#183B83] bg-transparent hover:rounded-full hover:p-2   cursor-pointer">
                <a herf="/entertainment" >Terms & Conditions</a>
              </div>
              <div className=" hover:text-white hover:bg-[#183B83] p-2 px-3 rounded-full hover:px-3 bg-transparent hover:rounded-full hover:p-2   cursor-pointer">
                <a herf="/health" >Enquiry</a>
              </div>
              </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar