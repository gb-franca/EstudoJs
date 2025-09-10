const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const usuarioSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true }
});

// Antes de salvar, criptografa a senha
usuarioSchema.pre("save", async function(next) {
    if (!this.isModified("senha")) return next();
    this.senha = await bcrypt.hash(this.senha, 10);
    next();
});

usuarioSchema.methods.compararSenha = function(senhaDigitada) {
    return bcrypt.compare(senhaDigitada, this.senha);
};

module.exports = mongoose.model("Usuario", usuarioSchema);
