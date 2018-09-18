import React, { Fragment } from 'react'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import Footer from './components/Footer'

const App = () => (
  <Fragment>
    <NoteForm />
    <NoteList />
    <Footer />
  </Fragment>
)

export default App