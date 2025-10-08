# 🌐 Bruner.app Website

Bruner.app é meu website pessoal e portfólio de projetos em desenvolvimento **web e mobile**.  
O site foi construído com [React](https://react.dev/) e inicializado via [Create React App](https://github.com/facebook/create-react-app).  

---

## 🚀 Tecnologias Utilizadas
- [React](https://react.dev/)  
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)  
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)  

---

## 📦 Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`
Executa o app em **modo de desenvolvimento**.  
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.  

### `npm test`
Inicia o runner de testes em **watch mode**.  

### `npm run build`
Gera a versão de **produção** na pasta `build/`.  
Essa versão está otimizada e pronta para ser publicada no servidor.  

### `npm run eject`
⚠️ Operação irreversível. Copia toda a configuração do Create React App para o projeto, dando liberdade total de customização.  

---

## 🌍 Deploy

O site está hospedado em **Verpex cPanel**.  
O processo de deploy é feito via **GitHub Actions + FTP**, enviando automaticamente o conteúdo da pasta `build/` para o diretório `public_html`.  

👉 Veja o workflow em `.github/workflows/deploy.yml`.  

---

## 📂 Estrutura do Projeto
```bash
bruner.app/
├── public/          # Arquivos estáticos
│   └── index.html   # HTML principal
├── src/             # Código-fonte React
│   ├── components/  # Componentes reutilizáveis
│   ├── pages/       # Páginas principais
│   ├── assets/      # Imagens, ícones, fontes
│   └── App.js       # Componente raiz
├── package.json     # Dependências e scripts
└── README.md        # Documentação do projeto
