import React from "react";

function Comment({ comment, replies }) {
  return (
    <div className="comment">
      <div className="comment-img-container">
        <img src="" alt="user img"></img>
      </div>
      <div className="comment-content">
        <div className="comment-author">{comment.username}</div>
        <div>{comment.created_at}</div>
      </div>
      <div className="comment-text">{comment.body}</div>
      {replies.length > 0 && (
        <div className="replies">
          {replies.map((reply) => (
            <Comment comment={reply} key={reply.id} replies={[]}></Comment>
          ))}
        </div>
      )}
    </div>
  );
}

export default Comment;
