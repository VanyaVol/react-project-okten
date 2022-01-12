import {useEffect, useState} from "react";

import "./Comments.css";
import {getComments} from "../../API";
import Comment from "../Comment/Comment";

function Comments() {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(arrComments => setComments(arrComments));
    }, [])

    return (<div className={'comments-block'}>

        {comments.map(itemComment => <Comment key={itemComment.id} itemComment={itemComment}/>)}

    </div>);
}

export default Comments;