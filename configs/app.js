'use strict'

import express from 'express' 
import morgan from 'morgan'  
import cors from 'cors' 


import passRoutes from '../src/Ejercicio4/pass.routes.js'
import validacionContraseñaModel from '../src/Ejercicio1/validacionContraseña.routes.js'
import temperatureRoutes from '../src/ejercicio3/temperature.routes.js'
import romanRoutes from '../src/Ejercicio2/romano.routhes.js'


const configs = (app)=>{
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(cors())
    app.use(morgan('dev'))
}

const routes = (app)=>{
    app.use('/v1/randomPass', passRoutes)
    app.use('/v1/securePassword', validacionContraseñaModel)
    app.use('/v1/temperature', temperatureRoutes)
    app.use('/v1/romano', romanRoutes)
    
}

export const initServer = async()=> {
    const app = express()

    try{
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running in port ${process.env.PORT}`)
    }catch(err){
        console.log('Server init failed', err)
    }
    
}