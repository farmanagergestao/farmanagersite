# Instruções para o Site Farmanager

## Visão Geral
Este pacote contém o código-fonte completo para o site Farmanager, desenvolvido com React e Tailwind CSS. O site apresenta a metodologia Farmanager utilizando o conceito do Círculo Dourado (Por quê, Como, O quê), com foco em comunicar de forma clara e acessível os benefícios para produtores rurais, consultores e instituições financeiras.

## Estrutura do Site
O site está organizado nas seguintes seções:
1. **Hero Section** - Apresentação inicial da proposta de valor
2. **Por quê** - Justificativa para a transformação de propriedades rurais em empresas estruturadas
3. **Como** - Metodologia de implementação em 4 etapas
4. **O quê** - Serviços e soluções oferecidos
5. **Benefícios** - Dados quantitativos sobre os resultados para produtores, gestão e finanças
6. **Casos de Sucesso** - Exemplos de implementações bem-sucedidas
7. **Investimento** - Estrutura de preços e retorno sobre investimento
8. **Contato** - Formulário e informações para contato

## Requisitos Técnicos
- Node.js 16+ 
- pnpm (recomendado) ou npm

## Como Executar Localmente
1. Descompacte o arquivo `farmanager-site.zip`
2. Navegue até a pasta do projeto: `cd farmanager-site`
3. Instale as dependências: `pnpm install` ou `npm install`
4. Execute o servidor de desenvolvimento: `pnpm run dev` ou `npm run dev`
5. Acesse o site em: `http://localhost:5173`

## Como Compilar para Produção
1. Execute o comando de build: `pnpm run build` ou `npm run build`
2. Os arquivos compilados estarão disponíveis na pasta `dist/`
3. Estes arquivos podem ser hospedados em qualquer serviço de hospedagem estática (Netlify, Vercel, GitHub Pages, etc.)

## Personalização
- **Logo**: Substitua o arquivo `public/logo.png` pela sua versão atualizada
- **Cores**: Edite as variáveis de cor no arquivo `src/index.css`
- **Conteúdo**: Modifique os textos e dados nos componentes em `src/components/`

## Notas de Implementação
- O site é totalmente responsivo, adaptando-se a dispositivos móveis, tablets e desktops
- A navegação é simplificada com links de âncora para cada seção
- Os dados quantitativos apresentados são baseados em estudos reais sobre certificações e gestão no agronegócio
- O formulário de contato precisa ser conectado a um backend para processamento (não incluído nesta versão)

## Suporte
Para dúvidas ou suporte técnico, entre em contato através do email fornecido na seção de contato do site.

---

Desenvolvido com base no conceito do Círculo Dourado para comunicar de forma clara e eficaz a proposta de valor do Farmanager para todos os públicos-alvo.
