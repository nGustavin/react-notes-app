import Note from '../models/Note'

export default {

    render(note: Note) {

        let { id, title, body } = note

        return {
            id,
            title,
            name
        }

    },

    renderMany(notes: Note[]){
        return notes.map(note => this.render(note))
    }

}