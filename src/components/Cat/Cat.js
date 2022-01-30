import React from 'react';

const Cat = ({item, deleteCat}) => {
    return (<div>
            {item.cat && <div>
                {item.cat}
                <button onClick={() => {
                    deleteCat(item.id)
                }}>Del
                </button>
            </div>}
        </div>);
};

export {Cat};
