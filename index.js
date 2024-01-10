const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 4000;
const productRoutes = require('./routes/product.routes.js');
const userRoutes = require('./routes/user.routes.js');
const dbConnection = require('./database/config.js');

//Middleware's
app.use(cors());
app.use(express.json());

//Función asincrona
( async ()=> {

    await dbConnection();
    //Carga de rutas.
    app.use(productRoutes);
    app.use(userRoutes);

})();

app.listen(port, (req, res) => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});