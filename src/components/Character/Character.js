import React from 'react';
import './Character.css';
import Button from "../UI/Button/Button";

const Character = props => {
    let occupations;
    if (props.occupations.length > 0) {
        occupations = props.occupations.map(occupation => {
            return (
                <li>{occupation}</li>
            );
        });
    } else {
        occupations = null;
    }
    return (
        <div className="Character">
            <img src={props.imageUrl} alt={`Image of ${props.name}`}/>
            <h4>{props.name}</h4>
            <ul>
                {occupations}
            </ul>
            <Button
                value={props.value}
                btnType={props.btnType}
                click={props.click}
            />
        </div>
    );
};

export default Character;