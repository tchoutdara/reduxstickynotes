import React from 'react'
import { connect } from 'react-redux'
import { incId } from '../reducers/nextId'
import { addNote } from '../reducers/notes'
import { Button } from 'semantic-ui-react'


class NoteForm extends React.Component {
    state = { name: '' }

    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, id } = this.props
        const { name } = this.state
        const note = { name, id, complete: false }
        dispatch(addNote(note))
        dispatch(incId())
        this.setState({ name: '' })
    }

    handleChange = (e) => {
        this.setState({ name: e.target.value })
    }

    render() {
        const { name } = this.state

        return(
            <div>
                <h3>Make a Note</h3>
                <form onSubmit={this.handleSubmit}>
                <input value={name} onChange={this.handleChange} required />
                </form>
                <Button basic color='green' size='tiny' onClick={this.handleSubmit}>Create Note</Button>
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return { id: state.nextId }
}


export default connect(mapStateToProps) (NoteForm)