import React from 'react'
import { connect } from 'react-redux'
import { toggleNote, deleteNote } from '../reducers/notes'
import { Button } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'

const styles = {
  pointer: {
    cursor: 'pointer',
  },
  review: {
    textDecoration: 'line-through',
    color: 'green',
  }
}

const Note = ({ id, name, review, dispatch }) => (
<div>
    <Message>
        <Message.Header>Note: {id + 1}</Message.Header>
        <h4
            onClick={() => dispatch(toggleNote(id)) }
            style={ review ? {...styles.pointer, ...styles.review} : styles.pointer }
        >
        <Button basic color='red' size='mini' floated='top right' onClick={ () => dispatch(deleteNote(id)) }>Delete</Button>
            {name}  
        </h4>
    </Message>
</div>
)

export default connect()(Note)