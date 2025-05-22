import React from 'react';

const HowSection = () => {
  return (
    <section id="how" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Como transformamos sua propriedade
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="card hover:border-green-500 hover:border-2">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-green-700">1</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Diagnóstico As-Is</h3>
            <p className="text-center">
              Levantamento detalhado da situação atual da propriedade, processos existentes e oportunidades de melhoria.
            </p>
            <ul className="mt-4 space-y-2">
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
                <span>Análise de riscos</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Identificação de gargalos</span>
              </li>
            </ul>
          </div>
          
          <div className="card hover:border-green-500 hover:border-2">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-green-700">2</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Planejamento To-Be</h3>
            <p className="text-center">
              Estruturação de processos, governança e requisitos para certificações estratégicas.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Desenho de processos</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Definição de POPs</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Estruturação de governança</span>
              </li>
            </ul>
          </div>
          
          <div className="card hover:border-green-500 hover:border-2">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-green-700">3</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Implementação</h3>
            <p className="text-center">
              Integração de sistemas de gestão, ferramentas digitais e preparação para certificações.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Treinamento da equipe</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Implementação de ferramentas</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Documentação para certificações</span>
              </li>
            </ul>
          </div>
          
          <div className="card hover:border-green-500 hover:border-2">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-green-700">4</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Monitoramento</h3>
            <p className="text-center">
              Acompanhamento contínuo, medição de resultados e ajustes para melhoria constante.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Dashboards de KPIs</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Auditorias periódicas</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Ciclo de melhoria contínua</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Nossa metodologia é adaptada para cada tipo de propriedade, garantindo 
            resultados concretos independentemente do tamanho ou segmento do agronegócio.
          </p>
          <a href="#what" className="btn-primary">
            Conheça nossas soluções
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
