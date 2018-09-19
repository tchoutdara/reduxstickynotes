import React from 'react'
import FilterLink from './FilterLink'

const Footer = () => (
    <div>
        <FilterLink>All</FilterLink>
        {' '}
        <FilterLink>Reviewed</FilterLink>
        {' '}
        <FilterLink>Active</FilterLink>
    </div>
)


export default Footer