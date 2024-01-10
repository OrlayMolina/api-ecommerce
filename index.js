const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 4000;
const productRoutes = require('./routes/product.routes.js');

//Middleware's
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        msg: 'Hola desde Express',
        code: 'OK'
    });
}); 

//Función asincrona
( async ()=> {

    //Carga de rutas.
    app.use(productRoutes);

})();

app.listen(port, (req, res) => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});