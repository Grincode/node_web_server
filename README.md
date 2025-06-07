# 🌐 Proyecto Web Server con Express.js

Servidor básico de archivos estáticos utilizando Node.js y Express. Ideal para servir aplicaciones front-end como React, Vue o Angular desde un backend minimalista.

---

## 🚀 Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📁 Estructura de carpetas

    proyecto-web-server/  
    ├── config/  
    │ └── env.js # Configuración de variables de entorno  
    ├── public/ # Archivos estáticos (HTML, CSS, JS, imágenes)  
    │ └── index.html  
    ├── server/  
    │ └── server.js # Lógica de arranque del servidor Express  
    ├── src/  
    │ └── app.js # Punto de entrada de la aplicación  
    ├── .env # Variables de entorno  
    └── package.json

---

## ⚙️ Configuración

1. Cloná el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/proyecto-web-server.git
    cd proyecto-web-server
    ```

2. Instalá las dependencias:

    ```bash
    npm install
    ```

3. Configurá el archivo `.env`:

    ```env
    PORT=3000
    PUBLIC_PATH=public
    ```

---

## 🏁 Uso

Iniciá el servidor en modo desarrollo con:

```bash
npm run dev
