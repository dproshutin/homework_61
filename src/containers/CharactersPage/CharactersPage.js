import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './CharactersPage.css';

function CharactersPage() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios.get("/characters?limit=10&offset=0")
            .then(characters => {
                const people = characters.data.map(character => {
                    const person = {
                        id: character.char_id,
                        name: character.name,
                        occupation: character.occupation,
                        picture: character.img
                    };
                    return person;
                });
                return people;
            })
            .then(people => {
                setFilms(people);
            })
    }, []);
    console.log(films);
    return (
        <div className="CharactersPage">
        </div>
    );
}

export default CharactersPage;