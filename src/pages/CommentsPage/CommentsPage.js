import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import css from "./CommentsPage.module.css";
import {postsService} from "../../services/posts.service";
import {PostComments} from "../../components/PostComments/PostComments";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);
    const {id: idParams} = useParams();

    useEffect(() => {
        postsService.getCommentsById(idParams).then(arrComments => setComments(arrComments));
    }, [idParams]);

    return (<div className={css.commentsBlock}>
        {comments.map(itemComments => <PostComments key={itemComments.id} comment={itemComments}/>)}
    </div>);
};

export {CommentsPage};
