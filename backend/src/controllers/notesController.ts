import { Request, response, Response } from 'express'
import { getRepository } from 'typeorm'

import '../models/Note'
import Note from '../models/Note'
import NoteView from '../view/NoteView'

export default {


    async index(request: Request, response: Response) {
        const notesRepo = getRepository(Note)

        let notes = await notesRepo.find()

        return response.json(NoteView.renderMany(notes))
    },

    async show(request: Request, response: Response) {

        const notesRepo = getRepository(Note)
        const { id } = request.params

        let note = await notesRepo.findOneOrFail(id)
        
        return response.json(NoteView.render(note))

    },

    async create(request: Request, response: Response) {

        const { title, body } = request.body
        
        const notesRepo = getRepository(Note)
        
        const data = {title, body}

        
        const note = notesRepo.create(data)
    
        await notesRepo.save(note)

        return response.status(201).json(note)

    },

    async delete(request: Request, response: Response) {

        const notesRepo = getRepository(Note)

        const { id } = request.params

        await notesRepo.delete(id)

        return response.json({message: "Deleted"})

    },

}