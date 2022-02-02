import React from 'react';
import {useSelector} from 'react-redux';

import {Users, Loading} from '../../components';

const UsersPage = () => {
    const {status} = useSelector(state => state['userReducer']);

    return (<div>
        {status === 'pending' && <Loading/>}
        <Users/>
    </div>);
};

export {UsersPage};
