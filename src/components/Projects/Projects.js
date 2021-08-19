import React from 'react'
import "./projects.css"
import { useHistory } from 'react-router-dom'

const Projects = () => {
    const history = useHistory()
    return (
        <div>
            <h1>Hello Projects Page</h1>
            <button onClick={() => history.replace('/')}>Back</button>
        </div>
    )
}

export default Projects
