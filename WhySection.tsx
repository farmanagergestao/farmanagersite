import React from 'react';

const WhySection = () => {
  return (
    <section id="why" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Por que o <span className="text-green">Farmanager</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">O agronegócio precisa evoluir</h3>
            <p className="text-lg mb-4">
              O mercado está cada vez mais exigente, demandando rastreabilidade, 
              sustentabilidade e eficiência. Propriedades rurais que operam sem 
              processos estruturados enfrentam:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Dificuldade de acesso a crédito com taxas competitivas</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Barreiras para mercados premium e exportação</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Desperdícios operacionais e custos elevados</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Exclusão de instrumentos financeiros modernos (FIAGROs, CRA-Verde)</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">A solução é a transformação empresarial</h3>
            <p className="text-lg mb-4">
              O Farmanager transforma propriedades rurais em empresas estruturadas, 
              com processos padronizados e certificações reconhecidas, garantindo:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Acesso a crédito com taxas reduzidas (0,5-1,5 pontos percentuais)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Participação em mercados de capitais (FIAGROs, CRA-Verde)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Redução de custos operacionais (10% em média)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Aumento de produtividade (5-15%) e redução de desperdícios (20-50%)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
