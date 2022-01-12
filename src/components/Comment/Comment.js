import "./Comment.css";

function Comment({itemComment: {id, postId, name, email, body}}) {
    return (
        <div className={'comment-block'}>
            <h3>ID: {id} --- Post ID: {postId}</h3>
            <h4>Email: {email}</h4>
            <h3>{name}</h3>
            <p>{body}</p>
        </div>
    );
}

export default Comment;