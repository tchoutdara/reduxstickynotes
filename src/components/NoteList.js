import React from 'react'
import { connect } from 'react-redux'
import Note from './Note'

const filtered = (notes, activeFilter) => {
    switch (activeFilter) {
        case 'Active':
        return notes.filter( n => !n.review )
        case 'Reviewed':
        return notes.filter( n => n.review )
        default:
        return notes
    }
}

const NoteList = ({ notes, activeFilter }) => (
    <ul>
        { filtered(notes, activeFilter).map( (n) => 
        <Note key={n.id} {...n} /> 
        )
        }
    </ul>
    )
        const mapStateToProps = (state) => {
            return { notes: state.notes, activeFilter: state.filter }
        }


export default connect(mapStateToProps) (NoteList)