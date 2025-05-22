import React from 'react';

const SuccessSection = () => {
  return (
    <section id="success" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Quem já transformou sua propriedade
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Fazenda Santa Luzia</h3>
                <p className="text-gray-600">Grãos - Mato Grosso</p>
              </div>
            </div>
            <p className="italic mb-4">
              "Com o Farmanager, reduzimos nossos custos operacionais em 12% e conseguimos 
              uma linha de crédito com taxa 1,2 pontos percentuais menor. O investimento 
              se pagou em menos de um ano."
            </p>
            <div className="border-t pt-4">
              <h4 className="font-bold mb-2">Resultados:</h4>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certificação ISO 9001 em 6 meses</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Redução de 12% nos custos operacionais</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Taxa de juros 1,2 p.p. menor</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Grupo Agro Verde</h3>
                <p className="text-gray-600">Café - Minas Gerais</p>
              </div>
            </div>
            <p className="italic mb-4">
              "As certificações obtidas com o Farmanager nos permitiram acessar mercados 
              internacionais premium, com prêmios de preço de 12% sobre o valor de mercado. 
              A rastreabilidade completa foi o diferencial."
            </p>
            <div className="border-t pt-4">
              <h4 className="font-bold mb-2">Resultados:</h4>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Múltiplas certificações em 8 meses</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Prêmio de 12% no preço de exportação</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Acesso a mercados premium na Europa</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Condomínio Rural Horizonte</h3>
                <p className="text-gray-600">Pecuária - Goiás</p>
              </div>
            </div>
            <p className="italic mb-4">
              "Implementamos o Farmanager em nosso condomínio rural com 8 produtores. 
              A governança estruturada e as certificações nos permitiram emitir um CRA-Verde 
              com condições extremamente favoráveis."
            </p>
            <div className="border-t pt-4">
              <h4 className="font-bold mb-2">Resultados:</h4>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Emissão de CRA-Verde de R$ 5 milhões</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Redução de 25% em desperdícios</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Governança compartilhada eficiente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
