const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        msg: 'Hola desde Express',
        code: 'OK'
    });
});

app.get('/products', (req, res) => {
    res.status(200).json({
        msg: 'GET | Hola desde Products',
        code: 'OK'
    });
});

app.post('/products', (req, res) => {
    res.status(200).json({
        msg: 'POST | Hola desde Products',
        code: 'OK'
    });
});

app.put('/products', (req, res) => {
    res.status(200).json({
        msg: 'PUT | Hola desde Products',
        code: 'OK'
    });
});

app.delete('/products', (req, res) => {
    res.status(200).json({
        msg: 'DELETE | Hola desde Products',
        code: 'OK'
    });
});

app.listen(port, (req, res) => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});