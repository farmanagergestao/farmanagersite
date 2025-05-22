import React from 'react';

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Benefícios comprovados
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Para Produtores</h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="mr-4">
                  <div className="stat">10%</div>
                  <div className="stat-label">Redução média de custos operacionais</div>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4">
                  <div className="stat">5-15%</div>
                  <div className="stat-label">Aumento de produtividade</div>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4">
                  <div className="stat">20-50%</div>
                  <div className="stat-label">Redução de desperdícios</div>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4">
                  <div className="stat">8-15%</div>
                  <div className="stat-label">Prêmios de preço em mercados premium</div>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Para Gestão</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Processos padronizados e documentados</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Rastreabilidade completa de produtos</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Tomada de decisão baseada em dados</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Conformidade com regulações nacionais e internacionais</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Redução de riscos operacionais</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Para Finanças</h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="mr-4">
                  <div className="stat">0,5-1,5</div>
                  <div className="stat-label">Redução em pontos percentuais nas taxas de juros</div>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4">
                  <div className="stat">35%</div>
                  <div className="stat-label">Mais chances de aprovação em linhas de crédito específicas</div>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4">
                  <div className="stat">1,5-3x</div>
                  <div className="stat-label">ROI médio do investimento em 3 anos</div>
                </div>
              </li>
              <li className="flex items-start mt-4">
                <svg className="h-6 w-6 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Acesso a FIAGROs e CRA-Verde</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-center mb-6">Calculadora de ROI</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Investimento Típico</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Consultoria (média):</span>
                  <span className="font-bold">R$ 215,00/hora</span>
                </li>
                <li className="flex justify-between">
                  <span>Certificação:</span>
                  <span className="font-bold">~R$ 15.000,00</span>
                </li>
                <li className="flex justify-between">
                  <span>Implementação total:</span>
                  <span className="font-bold">R$ 50.000 - R$ 150.000</span>
                </li>
                <li className="flex justify-between">
                  <span>Tempo de payback:</span>
                  <span className="font-bold">12-24 meses</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Retorno Esperado (Anual)</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Redução de custos:</span>
                  <span className="font-bold">R$ 30.000 - R$ 100.000</span>
                </li>
                <li className="flex justify-between">
                  <span>Economia em juros:</span>
                  <span className="font-bold">R$ 10.000 - R$ 50.000</span>
                </li>
                <li className="flex justify-between">
                  <span>Aumento de receita:</span>
                  <span className="font-bold">R$ 20.000 - R$ 80.000</span>
                </li>
                <li className="flex justify-between">
                  <span>ROI total em 3 anos:</span>
                  <span className="font-bold text-green-700">150% - 300%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
