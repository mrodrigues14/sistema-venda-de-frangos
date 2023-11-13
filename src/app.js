const express = require('express');
const app = express();
const path = require('path');

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname,'..', 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
