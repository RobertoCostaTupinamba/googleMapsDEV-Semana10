import React from 'react'
import './styles.css'
import Edit from '../EditDev'

export default function DevItem({ dev, reload }) {

    
    return (
        <li className="dev-item">
            <Edit github_username={dev.github_username} reload={reload} />
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
        </li>
    )
}