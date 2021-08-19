import React from 'react'
import "./skills.css"
import { useHistory } from 'react-router-dom'

const Skills = () => {
    const history = useHistory()
    return (
        <div>
            <h1>Hello Skill Page</h1>
            <button onClick={() => history.replace('/')}>Back</button>
        </div>
    )
}

export default Skills
