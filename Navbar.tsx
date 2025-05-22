import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="Farmanager Logo" className="h-12" />
          <span className="ml-2 text-xl font-bold text-green">FARMANAGER</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#why" className="hover:text-green transition-colors">Por quê</a>
          <a href="#how" className="hover:text-green transition-colors">Como</a>
          <a href="#what" className="hover:text-green transition-colors">O quê</a>
          <a href="#benefits" className="hover:text-green transition-colors">Benefícios</a>
          <a href="#investment" className="hover:text-green transition-colors">Investimento</a>
          <a href="#contact" className="hover:text-green transition-colors">Contato</a>
        </div>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
