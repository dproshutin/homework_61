import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './CharactersPage.css';
import Character from "../../components/Character/Character";

function CharactersPage() {
    const [heroes, setHeroes] = useState([]);

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
                setHeroes(people);
            })
    }, []);
    console.log(heroes);
    let characters;
    if (heroes.length > 0) {
        characters = heroes.map(hero => (
            <Character
                key={hero.id}
                occupations={hero.occupation}
                imageUrl={hero.picture}
                name={hero.name}
            />
        ));
    } else {
        characters = <p>Error! There are no characters to display...</p>
    }
    return (
        <div className="CharactersPage">
            <section className="Characters">
                {characters}
            </section>
        </div>
    );
}

export default CharactersPage;