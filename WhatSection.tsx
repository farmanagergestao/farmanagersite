import React from 'react';

const WhatSection = () => {
  return (
    <section id="what" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          O que oferecemos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Consultoria em Gestão</h3>
            <p>
              Implementação de processos estruturados, governança e regras de negócio 
              adaptadas à realidade da sua propriedade.
            </p>
            <ul className="mt-4 text-left space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Mapeamento de processos</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Gestão de riscos</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Procedimentos operacionais</span>
              </li>
            </ul>
          </div>
          
          <div className="card text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Certificações</h3>
            <p>
              Preparação e acompanhamento para obtenção de certificações 
              estratégicas reconhecidas nacional e internacionalmente.
            </p>
            <ul className="mt-4 text-left space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>ISO 9001 (Gestão da Qualidade)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>ABNT PR 2030 (Sustentabilidade)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>ISO 14001 (Gestão Ambiental)</span>
              </li>
            </ul>
          </div>
          
          <div className="card text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Digitalização</h3>
            <p>
              Implementação de ferramentas digitais para automação, 
              monitoramento e tomada de decisão baseada em dados.
            </p>
            <ul className="mt-4 text-left space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Power BI (Dashboards)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>PowerApps (Formulários)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sistemas de rastreabilidade</span>
              </li>
            </ul>
          </div>
          
          <div className="card text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Acesso a Mercados</h3>
            <p>
              Preparação para acesso a mercados premium, instrumentos 
              financeiros diferenciados e condições de crédito vantajosas.
            </p>
            <ul className="mt-4 text-left space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>FIAGROs e CRA-Verde</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Taxas de juros reduzidas</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Mercados de exportação</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSection;
