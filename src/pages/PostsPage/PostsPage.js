import React from 'react';
import {useSelector} from 'react-redux';

import {Posts, Loading} from '../../components';

const PostsPage = () => {
    const {status} = useSelector(state => state['postReducer']);

    return (
        <div>
            {status === 'pending' && <Loading/>}
            <Posts/>
        </div>
    );
};

export {PostsPage};
