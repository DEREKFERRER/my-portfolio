import React from 'react';
import derek from './derek.png';
const MyPage = () => {
    return (
    <div  className="h-full  sm:h-[36.1rem]   flex justify-center  bg-red-700 ">
        <div className="hidden  md:flex items-center justify-end     ">
            <h1 className="  text-7xl sm:pl-32 flex flex-wrap ">RODERICK FERRER</h1>
        </div>
      
        <div className="flex items-center">
            <div className=" h-[36.1rem] md:w-[30rem]   flex md:items-center md:justify-center  overflow-hidden   ">
                <img className="drop-shadow-[30px_10px_4px_rgba(0,0,0,0.4)] md:scale-[2] sm:scale-100  md:w-[18.90rem] "  src={derek} alt=""/>
            </div>
        </div>
    </div>
    );
}


export default MyPage;
