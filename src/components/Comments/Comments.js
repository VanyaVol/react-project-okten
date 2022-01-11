import {useEffect, useState} from "react";

import "./Comments.css";
import {getComments} from "../../API";
import Comment from "../Comment/Comment";

function Comments() {

    useEffect(() => {
        getComments().then(arrComments => setComments(arrComments));
    }, [])

    let [comments, setComments] = useState([]);

    return (
        <div className={'comments-block'}>

            {
                comments.map(itemComment => <Comment key={itemComment.id} itemComment={itemComment}/>)
            }

        </div>
    );
}

export default Comments;