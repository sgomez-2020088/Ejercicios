'use strict'

import express from 'express' 
import morgan from 'morgan' 
import helmet from 'helmet' 
import cors from 'cors' 


import passRoutes from '../src/Ejercicio4/pass.routes.js'
<<<<<<< HEAD
import temperatureRoutes from '../src/ejercicio3/temperature.routes.js'
=======
import romanRoutes from '../src/Ejercicio2/romano.routhes.js'
>>>>>>> f040c698297b301e0702557f330feb8d5a825b6f


const configs = (app)=>{
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(cors())
    app.use(morgan('dev'))
}

const routes = (app)=>{
    app.use('/v1/randomPass', passRoutes)
<<<<<<< HEAD
    app.use('/v1/temperature', temperatureRoutes)
=======
    app.use('/v1/romano', romanRoutes)
>>>>>>> f040c698297b301e0702557f330feb8d5a825b6f
   
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