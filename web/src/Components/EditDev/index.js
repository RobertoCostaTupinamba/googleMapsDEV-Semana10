import React from 'react';
import api from '../../services/api'
import './styles.css'

export default function Edit({ github_username , reload }) {

    async function remove() {
        console.log({ github_username });
        let teste = await api.delete(`/devs/${github_username}`)
        console.log(teste);
        
        const response = await api.get('/devs')
        reload(response.data)
    }
    return (

        <div className="edit">
            <button onClick={remove}>
                <img src="https://img.icons8.com/plasticine/100/000000/filled-trash.png" alt="Deletar" />
            </button>
        </div>
    )
}