import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './CharactersPage.css';
import Character from "../../components/Character/Character";
import Modal from "../../components/UI/Modal/Modal";

function CharactersPage() {
    const [heroes, setHeroes] = useState([]);
    const [modalShow, setModalShow] = useState("");
    const localHeroes =
        [
            {
                "id": 1,
                "name": "Walter White",
                "occupation": [
                    "High School Chemistry Teacher",
                    "Meth King Pin"
                ],
                "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
            },
            {
                "id": 2,
                "name": "Jesse Pinkman",
                "occupation": [
                    "Meth Dealer"
                ],
                "img": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg",
            },
            {
                "id": 3,
                "name": "Skyler White",
                "occupation": [
                    "House wife",
                    "Book Keeper",
                    "Car Wash Manager",
                    "Taxi Dispatcher"
                ],
                "img": "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
            },
            {
                "id": 4,
                "name": "Walter White Jr.",
                "occupation": [
                    "Teenager"
                ],
                "img": "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
            },
            {
                "id": 5,
                "name": "Henry Schrader",
                "occupation": [
                    "DEA Agent"
                ],
                "img": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Hank_Schrader2.jpg/220px-Hank_Schrader2.jpg",
            },
            {
                "char_id": 6,
                "name": "Marie Schrader",
                "occupation": [
                    "Housewife",
                    "Clepto"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645",
            },
            {
                "id": 7,
                "name": "Mike Ehrmantraut",
                "occupation": [
                    "Hitman",
                    "Private Investigator",
                    "Ex-Cop"
                ],
                "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg",
            },
            {
                "id": 8,
                "name": "Saul Goodman",
                "occupation": [
                    "Lawyer"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846",
            },
            {
                "id": 9,
                "name": "Gustavo Fring",
                "occupation": [
                    "Los-Pollos co-Founder",
                    "Philanthropist",
                    "Cartel Leader"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg/revision/latest?cb=20180824195925",
            },
            {
                "id": 10,
                "name": "Hector Salamanca",
                "occupation": [
                    "Former Senior Cartel Leader"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Hector_BCS.jpg/revision/latest?cb=20170810091606",
            }
        ];
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

    const useGetQuote = () => {
        setModalShow(modalShow => !modalShow);
    };

    let characters;
    if (localHeroes.length > 0) {
        characters = localHeroes.map(hero => (
            <Character
                key={hero.id}
                occupations={hero.occupation}
                imageUrl={hero.picture}
                name={hero.name}
                value="Get quotes"
                btnType="get_quote"
                click={useGetQuote}
            />
        ));
    } else {
        characters = <p>Error! There are no characters to display...</p>
    }
    console.log(modalShow);
    return (
        <div className="CharactersPage">
            <section className="Characters">
                {characters}
            </section>
            <Modal
                show={modalShow}
                closed={useGetQuote}
                title="John Doe says:"
                btnType="Close"
                value="X"
                array={[{type: 'Close', label: 'Close', closed: useGetQuote}]}
            >
                <p>Fuck you, man!</p>
            </Modal>
        </div>
    );
}

export default CharactersPage;