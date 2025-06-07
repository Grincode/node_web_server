import { envs }  from '../config/env.js'
import { startServer }  from '../server/server.js'

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