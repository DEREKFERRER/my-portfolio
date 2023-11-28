import React from 'react';
const Footer = () => {
    return (
        <footer className="flex justify-between  bg-white border-t-2 border-t-red-700 text-base   ">
        <p className="p-4 text-black ">Created by DK</p>
        <div className="flex items-center gap-2 p-4 ">
                <a href="https://www.linkedin.com/in/roderickferrer/" target="_blank"  rel="noreferrer">
                  <img className="w-7 h-7 rounded-md" src='https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/linkedin/linkedin-plain.svg' alt=""/>
                </a>
                <a href="https://github.com/DEREKFERRER" target="_blank"  rel="noreferrer">
                  <img className="w-7 h-7 rounded-md" src='https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/github/github-original.svg' alt=""/>
                </a>
        </div>
      
        </footer>
    );
};

export default Footer;