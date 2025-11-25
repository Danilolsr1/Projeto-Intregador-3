#  Projeto: Supermercados Tatico — Site Institucional

##  Integrantes do Grupo
- Davi Gomes Leal — Desenvolvimento e Design
- Danilo Luis — Desenvolvimento e Design

---

##  Tema e Escopo do Projeto

###  Negócio Escolhido:
Supermercados Tatico — uma rede de supermercados regional que busca fortalecer sua presença digital e melhorar o atendimento ao cliente por meio de um site moderno e acessível.

###  Objetivo do Site:
Criar um site institucional para apresentar os **serviços, ofertas e lojas** da marca Tatico, facilitando o acesso do público às informações e contribuindo para o fortalecimento da imagem da empresa no ambiente online.

###  Público-Alvo:
Consumidores locais do Distrito Federal e entorno, especialmente famílias que buscam praticidade, economia e produtos de qualidade no dia a dia.

---

##  Estrutura de Páginas

O site conta com as seguintes páginas principais:

1. **Home** — Apresentação da marca e boas-vindas aos visitantes.  
2. **Sobre** — História do supermercado, missão, visão e valores.  
3. **Contato** — Formulário para envio de mensagens e dúvidas.  
---

##  Elementos Essenciais do Site

- Cabeçalho fixo com logotipo e menu de navegação.  
- Banner principal de boas-vindas.  
- Seções informativas com textos e imagens.  
- Formulário de contato funcional.  
- Footer com os mesmos elementos visuais do cabeçalho e informações de direitos autorais.  
- Ícones e botões com efeitos de destaque ao passar o mouse.  

---

##  Planejamento Visual (Figma)

Protótipo desenvolvido no Figma: https://www.figma.com/design/BIzUQ1ek51Eu91VUqGbky1/Sem-t%C3%ADtulo?node-id=0-1&p=f&t=PLhm7iAE0arElW6u-0


###  Estrutura visual:
O layout segue uma hierarquia clara, com:
- Menu superior fixo.
- Conteúdo centralizado.
- Rodapé espelhando o cabeçalho para equilíbrio visual.

### Tipografia:
- Fonte: [Poppins](https://fonts.google.com/specimen/Poppins) — escolhida pela legibilidade e aparência moderna.
- Justificativa: é uma fonte limpa e fácil de ler, ideal para interfaces digitais e para o público amplo do supermercado.

###  Paleta de Cores:
| Cor | Hex | Função |
|------|------|---------|
|  Amarelo | `#FFD700` | Cor principal da marca, transmite energia e destaque. |
|  Azul | `#0057FF` | Fundo e contraste visual, transmite confiança e estabilidade. |
|  Branco | `#FFFFFF` | Cor de fundo secundária e contraste para textos. |
|  Vermelho | `#E60000` | Cor de destaque para o logotipo e chamadas importantes. |

Justificativa: 
As cores seguem a identidade visual original da marca Tatico, transmitindo energia, confiança e tradição — elementos essenciais para o setor varejista.

###  Ícones e Layout:
- Ícones de telefone, loja e atendimento reforçam a **usabilidade** e **navegação intuitiva**.  
- O layout é **simétrico e responsivo**, garantindo boa experiência tanto em computadores quanto em dispositivos móveis.

---

##  Estrutura de Pastas
/Projeto-Integrador
├── /img
│ └── (imagens do site e logotipo)
├── /css
│ └── style.css
├── index.html
├── sobre.html
├── contato.html
│
└── README.md


---

## Etapas de Desenvolvimento

| Etapa | Descrição | Responsável |
|-------|------------|-------|--------------|
| 1 | Escolha do tema e planejamento visual | | Davi Gomes, Danilo Luis |
| 2 | Criação do protótipo no Figma | | Danilo Luis |
| 3 | Desenvolvimento do HTML e CSS | | Davi Gomes, Danilo Luis |
| 4 | Implementação do footer e ajustes de design | | Davi Gomes |
| 5 | Publicação no GitHub Pages | | Danilo Luis |

---

##  Justificativas de Design

- **Layout:** estrutura horizontal com header e footer repetindo cores e elementos, reforçando identidade visual.  
- **Fontes e cores:** escolhidas para refletir dinamismo, clareza e modernidade.  
- **Usabilidade:** botões e menus com contraste alto e espaçamento adequado.  
- **Responsividade:** design adaptável a celulares, tablets e desktops.  

---

##  Potencial de Negócio

O site fortalece a **marca Tatico** no ambiente digital, permite divulgar **ofertas e lojas**, facilita o **contato direto com clientes** e melhora a **experiência do consumidor**.  
Além disso, abre espaço para futuras integrações, como **catálogo online** e **vendas via e-commerce**.

---

##  Próximos Passos

- Tornar o site totalmente responsivo.  
- Adicionar mapa interativo com localizações das lojas.  
- Criar integração de formulário com e-mail da empresa.  
- Inserir área de ofertas com atualização dinâmica.  

---

## JavaScript

O JavaScript deixou o site mais dinâmico e interativo, permitindo que elementos reagissem às ações do usuário, como cliques, digitação e movimento do mouse. A interação mais interessante de criar foi a saudação personalizada, que mostra uma mensagem de boas-vindas conforme o nome digitado. Aprendemos que o JavaScript se comunica diretamente com a estrutura da página através da DOM, possibilitando alterar textos, cores e estilos em tempo real, tornando o site mais atrativo e responsivo.


© 2025 — Supermercados Tatico. Todos os direitos reservados.  
Desenvolvido como projeto acadêmico para fins educacionais.



O que já está funcionando bem?
-A grande parte do site esta funcionando bem, so a responsividade da tela que esta um pouco estranha

Quais elementos HTML se repetem em várias páginas?
-o header, main, footer

Onde o layout "quebra" ou fica estranho?
-em diferentes tamanhos de tela, na mobile fica estranha

Quais melhorias fariam diferença real para o usuário do pequeno negócio?
-ajustar o site para diferentes tamanhos de tela, como mobile e tablets

## 2. Modularização do Código HTML

## 2.1. Identificar Componentes Reutilizáveis

Analisem o código de suas páginas e identifiquem blocos que **se repetem** ou que **poderiam ser reutilizados**:

- Cabeçalho (header): ele é idêntico ou muito parecido em todas as páginas? sim
- Menu de navegação (nav): repete-se da mesma forma? sim
- Rodapé (footer): aparece em todas as páginas? sim 
- Cards de produtos ou serviços: vários cards com a mesma estrutura? nao
- Seções de contato ou depoimentos: estruturas parecidas? sim

3. Aprimoramento de Interatividade
-Validação básica de campos de formulário (verificar se está vazio)

## 4. Consolidação de Acessibilidade

## 4.1. Checklist de Acessibilidade

Verifiquem e implementem os seguintes recursos:

**HTML Semântico:**

- [S]  Usam tags semânticas (**`<header>`**, **`<nav>`**, **`<main>`**, **`<section>`**, **`<article>`**, **`<footer>`**)?
- [S]  Cada página tem apenas um **`<h1>`** (título principal)?
- [S]  Os títulos seguem hierarquia lógica (h1 → h2 → h3)?

**Imagens e Multimídia:**

- [S]  Todas as imagens têm atributo **`alt`** com descrição clara?
- [N]  Imagens decorativas têm **`alt=""`** (vazio)?

**Formulários:**

- [S]  Todos os campos têm **`<label>`** associado via atributo **`for`**?
- [S]  Campos obrigatórios estão marcados (atributo **`required`** ou indicação visual)?
- [ ]  Placeholders não substituem labels?

**Navegação por Teclado:**

- [S]  Todos os links e botões são acessíveis via Tab?
- [ ]  O foco está visível (estilo **`:focus`** no CSS)?
- [ ]  Há um skip link ("Pular para o conteúdo principal")?

**Contraste e Legibilidade:**

- [S]  Texto e fundo têm contraste adequado (mínimo 4.5:1)?
- [S]  Tamanho de fonte é legível (mínimo 16px para texto corrido)?

4.2. Testar Acessibilidade
- Imagens sem width e height
-Adicionar meta description

## 5.1. Revisar Layout em Diferentes Telas

- Abram o Developer Tools (F12) e ativem "Toggle Device Toolbar" (Ctrl+Shift+M).
- Testem o site em:
    - **Mobile:** 375px (iPhone padrão)
    - **Tablet:** 768px (iPad)
    - **Desktop:** 1280px e 1920px

Para cada tamanho, verifiquem:

- O layout se adapta bem? sim
- Imagens redimensionam corretamente? sim
- Textos ficam legíveis? sim
- Menu funciona bem (considerar menu hamburguer no mobile)?
- Espaçamentos são adequados? sim

5.2. Ajustar CSS com Media Queries
-agora a tela é responsivel em diferentes em aparelhos

6.4. Redes Sociais (Links e Ícones)
-escolhemos o intagram e o facebook por que são os mais famosos
