import React from 'react';
import {Link} from 'react-router-dom';


const HomePage = () => {
    return (
        <div>
            <div>
                <Link to={'cars'}>Cars</Link>
            </div>
            <div>
                <Link to={'users'}>Users</Link>
            </div>
            <div>
                <Link to={'posts'}>Posts</Link>
            </div>
            <div>
                <Link to={'comments'}>Comments</Link>
            </div>
        </div>
    );
};

export {HomePage};
