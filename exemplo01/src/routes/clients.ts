import { Request, Response, Router }from'express'
import { ClientController } from '../controllers/ClientController'
import { Client } from '../models/Client'

export const clientsRouter = Router()
const clientCtrl = new ClientController()
let idCounter = 1

clientsRouter.post('/', (req: Request, res: Response) => {
    /*const name = req.body.name
    const phone = req.body.phone*/

    /**
     * Associação por desestruturação
     */
    const { name, phone } = req.body
    const client = new Client(idCounter, name, phone)
    if (clientCtrl.save(client)) {
        idCounter++
        /**
         * 201 - Created
         */
        return res.status(201).json({
            message: 'Client created'
        })
    } else {
        /**
         * 409 - Conflict
         */
        return res.status(409).json({
            message: 'A client with this id already exists'
        })
    }
})  
clientsRouter.post('/', (req: Request, res: Response) => {
    const { name, phone } = req.body
    const Client = new  clientsRouter (idCounter, name, phone)
    if (clientCtrl.delete(Client)){
        idCounter++
        /**
         * 204 -Content
         */
        return res.status(204).json({
            message: 'Client delete'
        })
     }   else {
            /**
             *202   - Accepted
             */
        return res.status(202).json({
            message: 'clent  atualizando'
        })  
     }
})
clientsRouter.get('/', (req: Request, res: Response) => {
    return res.json({ clients: clientCtrl.findAll() })
})