const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

// Registro
router.get("/registro", (req, res) => {
    res.render("registro");
});

router.post("/registro", async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = new Usuario({ email, senha });
        await usuario.save();
        res.redirect("/login");
    } catch (err) {
        console.error(err);
        res.send("Erro ao registrar usuário");
    }
});

// Login
router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", async (req, res) => {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
        return res.send("Usuário não encontrado");
    }

    const senhaCorreta = await usuario.compararSenha(senha);
    if (!senhaCorreta) {
        return res.send("Senha incorreta");
    }

    req.session.usuarioId = usuario._id;
    res.redirect("/contatos");
});

// Logout
router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });
});

module.exports = router;
