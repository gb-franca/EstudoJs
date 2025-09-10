const express = require("express");
const router = express.Router();
const Contato = require("../models/Contato");

// Página inicial
router.get("/", (req, res) => {
    res.render("index");
});

// Listar contatos
router.get("/contatos", async (req, res) => {
    const contatos = await Contato.find();
    res.render("viewContatos", { contatos });
});

// Form novo
router.get("/contatos/novo", (req, res) => {
    res.render("formNovo");
});

// Criar novo
router.post("/contatos", async (req, res) => {
    const { nome, telefone, email } = req.body;
    await Contato.create({ nome, telefone, email });
    res.redirect("/contatos");
});

// Form editar
router.get("/contatos/:id/editar", async (req, res) => {
    const contato = await Contato.findById(req.params.id);
    res.render("formEditar", { contato });
});

// Atualizar
router.post("/contatos/:id/editar", async (req, res) => {
    const { nome, telefone, email } = req.body;
    await Contato.findByIdAndUpdate(req.params.id, { nome, telefone, email });
    res.redirect("/contatos");
});

// Deletar
router.post("/contatos/:id/deletar", async (req, res) => {
    await Contato.findByIdAndDelete(req.params.id);
    res.redirect("/contatos");
});

module.exports = router;
