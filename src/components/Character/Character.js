import React from 'react';

const Character = ({character}) => {
    const {id, name, status, species, type, gender, image} = character;
    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{status}</p>
            <p>{species}</p>
            <p>{type}</p>
            <p>{gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};
