# 📒 Agenda de Contatos (Node.js + Express + EJS + MongoDB)

Uma aplicação **fullstack** simples para gerenciar contatos (CRUD) com **autenticação de usuários**.  
Construída em **Node.js, Express, EJS e MongoDB**, este projeto foi desenvolvido para praticar **integração front–back**, **templates dinâmicos** e **persistência de dados**.

---

## 🎯 Funcionalidades
- Registro, login e logout de usuários.  
- CRUD de contatos: criar, listar, editar e excluir.  
- Rotas protegidas (somente usuários logados acessam contatos).  
- Layout dinâmico com EJS e estilização com Bootstrap.

---

## ⚙️ Tecnologias
- **Node.js + Express** → Servidor e rotas.  
- **EJS** → Views dinâmicas.  
- **MongoDB + Mongoose** → Banco de dados.  
- **express-session & bcrypt** → Sessão e autenticação.  
- **Bootstrap / CSS** → Estilo.

---

## 🚀 Como executar
1. Clone o repositório e instale as dependências:
   ```bash
   git clone https://github.com/SEU_USUARIO/EstudoJs.git
   cd EstudoJs/agenda
   npm install
   ```
2. Crie o arquivo .env na raiz:
   ```ini
   MONGO_URI=mongodb://127.0.0.1:27017/agenda
   PORT=3000
   ```
   Para MongoDB Atlas, use a string de conexão do cluster.
3. Execute o projeto:
   ```bash
   npm run dev
   ```
## 📂 Estrutura:
   ```bash
 agenda/
 ├── models/        # Schemas Mongoose
 ├── routes/        # Rotas da aplicação
 ├── views/         # Templates EJS
 ├── public/        # CSS/JS estáticos
 ├── server.js      # Servidor principal
 └── .env           # Configuração do banco (não versionar)
   ```
## 📜 Licença
Projeto de estudo. Livre para uso e modificação. 
