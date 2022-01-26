import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import css from './CharactersPage.module.css';
import {characterServices} from '../../services/character.services';
import {episodeServices} from '../../services/episode.services';
import {Character} from '../../components/Character/Character';

const CharactersPage = () => {
    const [characterArr, setCharacterArr] = useState([]);
    const [charactersNew, setCharactersNew] = useState([]);

    const location = useLocation();

    const {state} = location;

    const {id} = useParams();

    let ids = [];

    useEffect(() => {

        if (state?.characters) {
            state?.characters.map(value => ids.push(value.split('/')[5]));
        } else {
            episodeServices.getById(id).then(value => {
                setCharacterArr(value.characters);
            });

            characterArr.map(value => ids.push(value.split('/')[5]));
        }

        characterServices.getById(ids).then(value => setCharactersNew(value));

    }, [characterArr.length]);


    return (<div className={css.charactersBlock}>
        {!!charactersNew.length ? charactersNew.map((itemCharacter, index) => <Character key={index}
                                                                                         character={itemCharacter}/>) : "Loading page..."}
    </div>);
}

export {CharactersPage};
