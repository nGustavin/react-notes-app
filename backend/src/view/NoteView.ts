import Note from '../models/Note'

export default {

    render(note: Note) {

        return {
            id: note.id,
            title: note.title,
            body: note.body,
        }

    },

    renderMany(notes: Note[]){
        return notes.map(note => this.render(note))
    }

}