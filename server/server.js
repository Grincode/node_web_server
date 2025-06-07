import  express from 'express';
import  path from 'path';

export const startServer = (options) => {
    const { port, public_path = 'public' } = options;

    const app = express();

    // Para poder usar middlewares se usa la palabra use (express)
    app.use(express.static(public_path)); // Para poder usar archivos estaticos
    
   app.get('/', (req, res) => {
        const indexPath = path.join(__dirname,`../../../${public_path}/index.html`);
        res.sendFile(indexPath);
    

    });

    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });

}

