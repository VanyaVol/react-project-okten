import React from 'react';
import {useLocation, useParams} from "react-router-dom";

const PostsDetailsPage = () => {
    const {id} = useParams();
    const {state: post} = useLocation();

    return (
        <div>

        </div>
    );
};

export {PostsDetailsPage};
