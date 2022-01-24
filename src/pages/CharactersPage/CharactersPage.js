import React, {useEffect, useState} from 'react';
import {characterServices} from "../../services/character.services";
import {Character} from "../../components/Character/Character";
import {useLocation, useParams} from "react-router-dom";

const CharactersPage = () => {
    const location = useLocation();
    console.log(location);
    const strings = useParams();
    console.log(strings);


    return (
        <div>
            Character page
        </div>);
};

export {CharactersPage};
