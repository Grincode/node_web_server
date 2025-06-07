const { envs } = require('../config/env')
const { startServer } = require('../server/server')

const main = () =>{
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

// Funcion agnostica autoinvocada
// Agnostica porque no tiene nombre 
// Autoinvocada porque se ejecuta inmediatamente con los parentesis
( async () => {
    main()
})()