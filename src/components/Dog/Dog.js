import React from 'react';

const Dog = ({item, deleteDog}) => {
    return (<div>
        {item.dog && <div>
            {item.dog}
            <button onClick={() => {
                deleteDog(item.id)
            }}>Del
            </button>
        </div>}
    </div>);
};

export {Dog};
