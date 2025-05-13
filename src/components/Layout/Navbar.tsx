
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 shadow-md py-3' : 'bg-background/80 py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          Harshini<span className="text-primary ml-1">.</span>
          <span className="text-sm ml-2 text-muted-foreground font-normal hidden sm:inline-block">Developer & Designer</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" current={location.pathname}>Home</NavLink>
          <NavLink to="/about" current={location.pathname}>About</NavLink>
          <NavLink to="/portfolio" current={location.pathname}>Portfolio</NavLink>
          <NavLink to="/services" current={location.pathname}>Services</NavLink>
          <NavLink to="/blog" current={location.pathname}>Blog</NavLink>
          <NavLink to="/contact" current={location.pathname}>Contact</NavLink>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background/95 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" current={location.pathname} onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/about" current={location.pathname} onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink to="/portfolio" current={location.pathname} onClick={toggleMenu}>Portfolio</MobileNavLink>
            <MobileNavLink to="/services" current={location.pathname} onClick={toggleMenu}>Services</MobileNavLink>
            <MobileNavLink to="/blog" current={location.pathname} onClick={toggleMenu}>Blog</MobileNavLink>
            <MobileNavLink to="/contact" current={location.pathname} onClick={toggleMenu}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, current, children }: { to: string; current: string; children: React.ReactNode }) => {
  const isActive = current === to;
  return (
    <Link 
      to={to} 
      className={`relative transition-colors group ${isActive ? 'text-primary font-medium' : 'hover:text-primary'}`}
    >
      {children}
      <span className={`absolute bottom-[-4px] left-0 w-full h-0.5 transition-transform origin-left ${
        isActive ? 'bg-primary scale-x-100' : 'bg-primary scale-x-0 group-hover:scale-x-100'
      }`}></span>
    </Link>
  );
};

const MobileNavLink = ({ 
  to, 
  current, 
  onClick, 
  children 
}: { 
  to: string; 
  current: string; 
  onClick: () => void; 
  children: React.ReactNode 
}) => {
  const isActive = current === to;
  return (
    <Link 
      to={to} 
      className={`block py-2 px-4 rounded-md transition-colors ${
        isActive ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-primary/5'
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
