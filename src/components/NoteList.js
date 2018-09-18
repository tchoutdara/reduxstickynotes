import React from 'react'
import { connect } from 'react-redux'

const NoteList = ({ notes }) => (
    <ul>
        { notes.map( (n, i) => {
            return (
                <li key={i}>
                 {n}
                 </li>
            )
         })
        }
    </ul>
    )
        const mapStateToProps = (state) => {
            return { notes: state.notes }
        }


export default connect(mapStateToProps) (NoteList)