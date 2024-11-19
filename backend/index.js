const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");
const bcrypt = require("bcrypt")
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const secret = "seuSegredoSecreto";

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Pedro0107",
    database: "PyGreenDB",
});

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.post("/register", (req, res) => {
    const Nome = req.body.Nome;
    const Sobrenome = req.body.Sobrenome;
    const Nickname = req.body.Nickname;
    const Email = req.body.Email;
    const Senha = req.body.Senha;
    const progressoID = 1; 
    const imageID = 1;

    const sqlInsertUsuario = `
    INSERT INTO usuario (Nome, Sobrenome, Nickname, Email, Senha, ProgressoID, ImageID) VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query("SELECT * FROM usuario WHERE Email = ?", [Email], (err, result) => {
        if (err) {
            return res.send(err);
        }
        
        if (result.length === 0) {
            bcrypt.hash(Senha, saltRounds, (err, hash) => {
                if (err) return res.send(err);
                
                db.query(sqlInsertUsuario, [Nome, Sobrenome, Nickname, Email, hash, progressoID, imageID], (err, result) => {
                    if (err) return res.send(err); 
                    return res.send({ msg: "Cadastrado com sucesso" }); 
                });
            });
            
        } else {
            return res.send({ msg: "Usuário já cadastrado" }); 
        }
    });
});

app.post("/login", (req, res) => {
    const { Nickname, Senha } = req.body;
    
    db.query("SELECT * FROM usuario WHERE Nickname = ?", [Nickname], (err, result) => {
        if (err) return res.status(500).send(err);
        
        if (result.length > 0) {
            bcrypt.compare(Senha, result[0].Senha, (err, match) => {
                if (err) return res.status(500).send(err);
                
                if (match) {
                    const token = jwt.sign({ id: result[0].UserID }, secret, { expiresIn: '1h' });
                    return res.json({ msg: "Usuário Logado", token });
                } else {
                    return res.status(401).json({ msg: "Senha incorreta" });
                }
            });
        } else {
            return res.status(404).json({ msg: "Conta não encontrada" });
        }
    });
});

app.get("/user/:nickname", (req, res) => {
    const nickname = req.params.nickname;

    const sql = `
        SELECT 
            u.UserID,
            u.Nome,
            u.Sobrenome,
            u.Nickname,
            u.Email,
            i.Caminho AS ImageCaminho,
            p.Porcentagem
        FROM Usuario u
        LEFT JOIN ImagemPerfil i ON u.ImageID = i.ImageID
        LEFT JOIN Progresso p ON u.ProgressoID = p.ProgressoID
        WHERE u.Nickname = ?
    `;

    db.query(sql, [nickname], (err, result) => {
        if (err) {
            console.error(err); 
            return res.status(500).send(err);
        }
        
        console.log(result);
        if (result.length > 0) {
            res.json(result[0]); 
        } else {
            res.status(404).json({ msg: "Usuário não encontrado" });
        }
    });
});

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ msg: "Acesso negado!" });

    jwt.verify(token.split(' ')[1], secret, (err, user) => {
        if (err) return res.status(403).json({ msg: "Token inválido!" });
        req.userId = user.id;
        next();
    });
};

app.get("/profile", authenticateToken, (req, res) => {
    const userId = req.userId;

    const sql = `
        SELECT 
            u.UserID,
            u.Nome,
            u.Sobrenome,
            u.Nickname,
            u.Email,
            i.Caminho AS ImageCaminho,
            p.Porcentagem
        FROM Usuario u
        LEFT JOIN ImagemPerfil i ON u.ImageID = i.ImageID
        LEFT JOIN Progresso p ON u.ProgressoID = p.ProgressoID
        WHERE u.UserID = ?
    `;

    db.query(sql, [userId], (err, result) => {
        if (err) return res.status(500).send(err);

        if (result.length > 0) {
            res.json(result[0]);
        } else {
            res.status(404).json({ msg: "Usuário não encontrado" });
        }
    });
});



app.listen(3001, () => {
    console.log("Rodando na porta 3001");
});