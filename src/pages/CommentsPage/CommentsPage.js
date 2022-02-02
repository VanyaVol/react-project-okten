import React from 'react';
import {useSelector} from 'react-redux';

import {Comments, Loading} from '../../components';
import commentReducer from '../../store/comment.slice';

const CommentsPage = () => {
    const {status} = useSelector(state => state['commentReducer']);

    return (<div>
        {status === 'pending' && <Loading/>}
        <Comments/>
    </div>);
};

export {CommentsPage};
