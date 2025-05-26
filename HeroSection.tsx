import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="section bg-gradient-to-r from-green-900 to-green-700 text-white">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Transformando Propriedades Rurais em Empresas Eficientes
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">
          Por que o agronegócio precisa evoluir para um modelo de gestão empresarial estruturado, 
          certificado e financeiramente sustentável
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="btn-primary bg-white text-green-900 hover:bg-gray-100">
            Transforme sua propriedade
          </a>
          <a href="#benefits" className="btn-secondary border-white text-white hover:bg-white hover:text-green-900">
            Ver benefícios
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
