import React from "react";

const Skills = () => {
    return(
        <div id="skills" className=" h-screen sm:h-[40rem]  sm:p-10 text-lg bg-white text-black ">
        <section className=" text-center text-2xl p-5">Technologies i use</section>
        <div className="  text-justify mx-auto flex justify-center gap-5 flex-wrap  ">
            <div className="border rounded-md   p-4 flex gap-3  flex-wrap justify-center ">
                <div>
                    <img className="sm:h-20 h-12 cursor-pointer hover:scale-125 duration-500 grayscale hover:grayscale-0 " src='https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/java/java-original.svg' alt=""/>
                    <p className="text-center">Java</p>
                </div>
              <div className=" ">
                <img className="  sm:h-20 h-12 cursor-pointer hover:scale-125 duration-500 grayscale hover:grayscale-0" src='https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/javascript/javascript-original.svg' alt=""/>
                <p className="text-center">JS</p>
            </div>
              <div>
                <img className="sm:h-20 h-12  cursor-pointer hover:scale-125 duration-500 grayscale hover:grayscale-0" src='https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/c/c-original.svg' alt=""/>
                <p className="text-center">C</p>
            </div>
        {/*       <div>
                <img className="sm:h-20  cursor-pointer hover:scale-125 duration-500 grayscale hover:grayscale-0" src='' alt=""/>
                <p className="text-center">SQL</p>
            </div> */}
                <div>
                    <img className="sm:h-20 h-12  cursor-pointer hover:scale-125 duration-500 grayscale hover:grayscale-0" src='https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/html5/html5-original.svg' alt=""/>
                    <p className="text-center">HTML</p>
                </div>
             <div>
                <img className="sm:h-20  h-12  cursor-pointer hover:scale-125 duration-500 grayscale hover:grayscale-0" src='https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/css3/css3-original.svg' alt=""/>
                <p className="text-center">CSS</p>
            </div>
           {/*   <div >
                <div className="flex justify-center">
                    <img className=" sm:h-20 cursor-pointer hover:scale-125 duration-500 grayscale hover:grayscale-0" src='' alt=""/>
                </div>
                <p className="text-center">Bootstrap</p> 
            </div> */}
              <div>
                <div className="flex justify-center">
                    <img className="sm:h-20 h-12  cursor-pointer hover:scale-125 duration-500 grayscale hover:grayscale-0" src='https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/tailwindcss/tailwindcss-plain.svg' alt=""/>
                </div>
                <p className="text-center">Tailwind</p>
            </div>
               <div>
                <img className="sm:h-20 h-12 cursor-pointer hover:scale-125 duration-500 grayscale hover:grayscale-0" src='https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/react/react-original.svg' alt=""/>
                <p className="text-center">React</p>
            </div>
               
            </div>
           
            <div className="border  rounded-md p-4 flex gap-3">
                <div>
                    <img className="sm:h-20  h-12 rounded-md p-1 cursor-pointer hover:scale-125 duration-500 grayscale-[50%] hover:grayscale-0 " src='https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/github/github-original.svg' alt=""/>
                    <p className="text-center">Github</p>
                </div>
                <div>
                    <img className="sm:h-20  h-12 rounded-md p-1 cursor-pointer hover:scale-125 duration-500 grayscale hover:grayscale-0" src='https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/git/git-original.svg' alt=""/>
                    <p className="text-center">Git</p>
                </div>
                <div>
                    <img className="sm:h-20 h-12  rounded-md p-1 cursor-pointer hover:scale-125 duration-500 grayscale hover:grayscale-0" src='https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/npm/npm-original-wordmark.svg' alt=""/>
                    <p className="text-center">NPM</p>
                </div>
                <div>
                    <img className="sm:h-20 h-12  rounded-md p-1 cursor-pointer hover:scale-125 duration-500 grayscale hover:grayscale-0" src='https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/figma/figma-original.svg' alt=""/>
                    <p className="text-center">Figma</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Skills;