# Pokédex Angular 🎮

Uma aplicação web criada com Angular que permite explorar uma lista de Pokémons e visualizar detalhes de cada um. A Pokédex consome os dados da [PokéAPI](https://pokeapi.co/), exibindo imagens, tipos, status e outras informações de forma interativa.

---

## 🚀 Funcionalidades

- ✅ Listagem de Pokémons com nome e tipos.
- ✅ Filtro de busca por nome.
- ✅ Tela de detalhes de cada Pokémon com informações completas.
- ✅ Animações de entrada (fade, slide e zoom) usando Angular Animations.
- ✅ Tratamento de erros ao consumir a API.
- ✅ Layout responsivo.
- ✅ Navegação por rotas.

> Em breve: Testes unitários serão criados para aumentar a cobertura de código. ✅

---

## 🛠️ Requisitos

- **Node.js**: Versão recomendada 14.x ou 16.x
- **Angular CLI**: Versão 16.0.3

---

## ⚙️ Instalação e Execução Local

1. **Clone o repositório:**

git clone https://github.com/PauloCatto/Pokedex.git
<br>
Instale as dependências:
<br>
npm install
<br>
npm install -g @angular/cli@16.0.3
<br>
<br>
ng serve -o
<br>
A aplicação abrirá automaticamente em:
http://localhost:4200

📚 Principais Boas Práticas Utilizadas
✅ Tratamento de erros nas requisições HTTP
Implementação de tratamentos para capturar e exibir mensagens de erro amigáveis caso a API falhe.

✅ Uso de programação reativa com RxJS (forkJoin, finalize)
Uso de operadores RxJS como forkJoin para chamadas paralelas de API e finalize para controlar o estado de carregamento.

✅ Comunicação entre componentes com Output e EventEmitter
A comunicação entre componentes (exemplo: busca → lista) foi feita utilizando @Output e EventEmitter, garantindo baixo acoplamento.

✅ Prevenção de erros nos templates com Safe Navigation (?.)
Uso constante do operador de navegação segura (?.) para evitar erros de template quando os dados ainda não foram carregados.

✅ Filtro de dados seguro e performático
A busca de Pokémons é feita com filtros controlados, evitando manipulação direta dos arrays principais.

✅ Animações com Angular Animations
Animações declarativas Angular (ex.: fadeIn, slideIn, zoomIn) aplicadas para dar mais fluidez à experiência do usuário.

🧪 Testes Unitários
Em breve será iniciada a cobertura de testes unitários para todos os componentes e serviços, seguindo as boas práticas do Angular com Jasmine e Karma.

📄 Tecnologias Utilizadas
Angular 16

TypeScript

RxJS

Angular Animations

SCSS com uso de rem-calc

PokéAPI (https://pokeapi.co/)

