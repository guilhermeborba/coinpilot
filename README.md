## CoinPilot

> Dashboard de criptomoedas com dados atualizados em tempo real via CoinGecko API.

### [Acesse a versão online](https://coinpilot-git-main-guilhermeborbas-projects.vercel.app)

---

### Tecnologias utilizadas

* [Next.js 15 (App Router)](https://nextjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React Query](https://tanstack.com/query/latest)
* [Jest + RTL](https://jestjs.io/) para testes unitários
* [Cypress](https://www.cypress.io/) para testes E2E
* Deploy: [Vercel](https://vercel.com)

---

### Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/guilhermeborba/coinpilot.git
cd coinpilot

# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev

# Rode os testes unitários
npm run test

# Rode os testes E2E
npx cypress open
```

---

### Funcionalidades

* Busca por criptomoedas
* Gráfico de preço dos últimos 7 dias
* Alternância de tema claro/escuro com persistência
* Testes automatizados (unitários e E2E)
* CI com GitHub Actions
* Deploy automático via Vercel

---

### Cobertura de Testes

* Teste de carregamento de moedas
* Teste do botão de tema
* Teste de página de detalhe
* Testes E2E com Cypress

---

### Licença

MIT
