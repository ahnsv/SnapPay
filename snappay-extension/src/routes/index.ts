import * as express from 'express'
import addRouter from './addRouter'
import cartRouter from './cartRouter'
import removeRouter from './removeRouter'

export = (() => {
    let r = express.Router()
    r.use('/add/:id', addRouter)
    r.use('/card', cartRouter)
    r.use('/remove', removeRouter)
})

