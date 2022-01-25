import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";
import {Character} from "../../components/Character/Character";
import {characterServices} from "../../services/character.services";
import {episodeServices} from "../../services/episode.services";



const CharactersPage = () => {
    const [characterArr, setCharacterArr] = useState([]);
    const [charactersNew, setCharactersNew] = useState([]);
    const {state: characters} = useLocation();

    const {id} = useParams();

    let ids = [];


    useEffect(() => {

        if (characters === null) {
            episodeServices.getById(id).then(value => {
                setCharactersNew(value.characters);
            });
        }

        if (characters !== null) {
            characters.map(itemCharacter => ids.push(itemCharacter.split('/')[5]));
        }


        charactersNew.map(itemCharacter => ids.push(itemCharacter.split('/')[5]));


        characterServices.getById(ids).then(value => setCharacterArr(value));

    }, []);



    return (<div>
        {/*{<div>"Loading..."</div> && characterArr.map(itemCharacter => <Character key={itemCharacter.id}*/}
        {/*                                                                         character={itemCharacter}/>)}*/}
    </div>);
}

export {CharactersPage};
