import "./Post.css";

function Post({itemPost:{id, userId, title, body}}) {
    return (
        <div className={'post-block'}>
            <h4>User ID: {userId} - ID: {id}</h4>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}

export default Post;