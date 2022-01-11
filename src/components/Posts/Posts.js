import {useEffect, useState} from "react";

import "./Posts.css";
import {getPosts} from "../../API";
import Post from "../Post/Post";

function Posts() {

    useEffect(() => {

        getPosts().then(arrPosts => setPosts(arrPosts))

    }, []);

    let [posts, setPosts] = useState([]);

    return (
        <div className={'posts-block'}>

            {
                posts.map(itemPost => <Post key={itemPost.id} itemPost={itemPost}/>)
            }

        </div>
    );
}

export default Posts;