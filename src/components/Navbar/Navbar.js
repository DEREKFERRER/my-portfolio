/* import React from 'react'; */
import React, { useState } from 'react';


const Navbar =  () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=" text-2xl uppercase  sm:top-0 sm:left-0 sm:right-0 sm:p-3 md:p-3 border-b-2 sm:border-b-2 md:border-b-2 border-white sm:flex sm:justify-between  ">
             <div className="  p-4 flex items-center justify-between">
                <div className=" md:ml-10">
                    <h2>dk</h2>
                </div>
                <div className=" sm:hidden ">
                <button id="toggle" className="flex self-center cursor-pointer"  onClick={() => setIsOpen(!isOpen)}  >
                    <ion-icon  name="menu" size="large" ></ion-icon>
                </button>
                </div>
            </div>
            <div id="myNav"  className={`py-3 sm:p-3 sm:block  ${isOpen ? "block" : "hidden"} ` }>
                 <div  className="grid pl-4  sm:flex sm:gap-4 sm:justify-center sm:pr-4   ">
                     <a className="pt-30  md:relative  sm:after:bg-red-700 sm:after:absolute sm:after:h-1 sm:after:w-0 sm:after:bottom-0 sm:after:left-0 sm:hover:after:w-full sm:after:transition-all sm:after:duration-300  " href="#about"> About</a>
                     <a className="pt-30 md:relative sm:after:bg-red-700 sm:after:absolute sm:after:h-1 sm:after:w-0 sm:after:bottom-0 sm:after:left-0 sm:hover:after:w-full sm:after:transition-all sm:after:duration-300   " href="#skills">Skills</a> 
                     <a className="pt-30 md:relative sm:after:bg-red-700 sm:after:absolute sm:after:h-1 sm:after:w-0 sm:after:bottom-0 sm:after:left-0 sm:hover:after:w-full sm:after:transition-all sm:after:duration-300   " href="#project">Projects</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;