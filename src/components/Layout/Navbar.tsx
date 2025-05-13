import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Harshini<span className="text-primary"> Thirunahari</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && <div className="md:hidden absolute w-full bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="hover:text-primary transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors" onClick={toggleMenu}>About</Link>
            <Link to="/portfolio" className="hover:text-primary transition-colors" onClick={toggleMenu}>Portfolio</Link>
            <Link to="/services" className="hover:text-primary transition-colors" onClick={toggleMenu}>Services</Link>
            <Link to="/blog" className="hover:text-primary transition-colors" onClick={toggleMenu}>Blog</Link>
            <Link to="/contact" className="hover:text-primary transition-colors" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>}
    </nav>;
};
export default Navbar;