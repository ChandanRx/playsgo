import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-yellow-300 px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* Branding */}
        <div>
          <h1 className="text-2xl font-bold tracking-wider">PLAYS<span className="text-yellow-500">GO</span></h1>
          <p className="text-sm text-yellow-200 mt-1">Find your game. Find your people.</p>
        </div>

        {/* Navigation */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
          <a href="/about" className="hover:text-white transition-colors duration-300">About</a>
          <a href="/createpost" className="hover:text-white transition-colors duration-300">Post</a>
          <a href="/profile" className="hover:text-white transition-colors duration-300">Profile</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://github.com/chandanrx" className="hover:text-white transition-all duration-300"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/yourusername/chandan-pargi-459272187" className="hover:text-white transition-all duration-300"><FaLinkedin /></a>
          <a href="https://twitter.com/rxn_13" className="hover:text-white transition-all duration-300"><FaTwitter /></a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-yellow-400 mt-6 border-t border-yellow-900 pt-4">
        © {new Date().getFullYear()} PlaysGo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
