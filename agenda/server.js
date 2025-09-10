const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const path = require("path");
require("dotenv").config();

const app = express();

// Configuração MongoDB
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/agenda";
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Conectado ao MongoDB"))
    .catch(err => console.error("Erro ao conectar:", err));

// Configuração do Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(session({
    secret: "minha_chave_secreta",
    resave: false,
    saveUninitialized: false
}));

// Torna o usuário disponível em todas as views
app.use((req, res, next) => {
    res.locals.usuarioId = req.session.usuarioId;
    next();
});

// Rotas
const contatoRoutes = require("./routes/contatoRoutes");
app.use("/", contatoRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/", authRoutes);

// Proteger as rotas de contatos
const authMiddleware = require("./middleware/authMiddleware");
app.use("/contatos", authMiddleware, contatoRoutes);

// Inicializa servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
