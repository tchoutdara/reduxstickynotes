const ADD_NOTE = 'ADD_NOTE'
const TOGGLE_NOTE = 'TOGGLE_NOTE'
const DELETE_NOTE = 'DELETE_NOTE'

export const addNote = (note) => {
  return { type: ADD_NOTE, note }
}

export const toggleNote = (id) => {
  return { type: TOGGLE_NOTE, id }
}

export const deleteNote = (id) => {
  return { type: DELETE_NOTE, id }
}

export default ( state = [], action ) => {
    switch(action.type) {
        case ADD_NOTE:
        return [action.note, ...state]
        case TOGGLE_NOTE:
        return state.map( note => {
            if (note.id === action.id)
            return {...note, review: !note.review}
            return note
        })
        case DELETE_NOTE:
        return state.filter( n => n.id !==action.id )
        default:
        return state
    }
}

