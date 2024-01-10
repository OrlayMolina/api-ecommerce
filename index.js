const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.listen(port, (req, res) => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});