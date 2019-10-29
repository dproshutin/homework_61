import React from 'react';
import './Character.css';

const Character = props => {
    const occupations = props.occupations.join(' ');
    return (
        <div>
            <img src={props.imageUrl} alt={`Image of ${props.name}`}/>
            <h4>{props.name}</h4>
            <p>{occupations}</p>
        </div>
    );
};

export default Character;