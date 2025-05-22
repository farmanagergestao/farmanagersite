import React from 'react';

const InvestmentSection = () => {
  return (
    <section id="investment" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Investimento com retorno garantido
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-green-700 mb-6">Estrutura de preços transparente</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Consultoria</h4>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Valor por hora:</span>
                  <span className="text-2xl font-bold">R$ 215,00</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  A consultoria inclui diagnóstico, planejamento, implementação e acompanhamento.
                  O número total de horas varia conforme o tamanho e complexidade da propriedade.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">Certificação</h4>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Valor médio:</span>
                  <span className="text-2xl font-bold">~R$ 15.000,00</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Inclui preparação para auditoria, documentação e acompanhamento do processo
                  de certificação junto aos órgãos competentes.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">Implementação Total</h4>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Pequenas propriedades:</span>
                  <span className="font-bold">R$ 50.000 - R$ 80.000</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2 mt-2">
                  <span>Médias propriedades:</span>
                  <span className="font-bold">R$ 80.000 - R$ 120.000</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2 mt-2">
                  <span>Grandes propriedades:</span>
                  <span className="font-bold">R$ 120.000 - R$ 200.000</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Valores estimados para implementação completa, incluindo consultoria,
                  certificação e ferramentas digitais básicas.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Retorno sobre o investimento</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Payback rápido</h4>
                  <p>
                    O tempo médio de retorno do investimento é de 12-24 meses, 
                    considerando apenas a redução de custos operacionais e melhores 
                    condições de financiamento.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">ROI excepcional</h4>
                  <p>
                    O ROI médio em 3 anos é de 150-300%, considerando todos os 
                    benefícios: redução de custos, melhores condições de crédito, 
                    acesso a mercados premium e aumento de produtividade.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Benefícios de longo prazo</h4>
                  <p>
                    As certificações e processos implementados trazem benefícios 
                    contínuos, com manutenção anual a um custo muito inferior ao 
                    investimento inicial (aproximadamente 15-20% do valor inicial).
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#contact" className="btn-primary">
                Solicite uma avaliação personalizada
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
