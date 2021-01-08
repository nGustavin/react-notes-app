import {Router} from 'express'

import ListNotesController from './controllers/notesController'
import ShowNotesController from './controllers/notesController'
import CreateNotesController from './controllers/notesController'
import DeleteNotesController from './controllers/notesController'
import EditNotesController from './controllers/notesController'

const routes = Router()

routes.get('/notes', ListNotesController.index)
routes.get('/notes/:id', ShowNotesController.show)
routes.post('/notes', CreateNotesController.create)
routes.delete('/notes/:id', DeleteNotesController.delete)
routes.put('/notes/:id', EditNotesController.edit)


export default routes