const express = require('express');
const path = require('path');

const startServer = (options) => {
    const { port, public_path = 'public' } = options;

    const app = express();

    // Para poder usar middlewares se usa la palabra use (express)
    app.use(express.static(public_path)); // Para poder usar archivos estaticos
    
    app.get("/", (req, res) => {
        const indexPath = path.join(__dirname,`../../../${public_path}/index.html`);
        res.sendFile(indexPath);
    

    });

    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });

}

module.exports = {
    startServer
}
