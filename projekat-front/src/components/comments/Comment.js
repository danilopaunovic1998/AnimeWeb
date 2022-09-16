import React, { useState, useEffect } from "react";
import axios from "axios";

function Comment({ comment, replies, loggedIn, deleteHandler }) {
  const canReply = Boolean(window.sessionStorage.getItem("auth_token"));
  const canEdit = loggedIn == comment.user_id;
  const canDelete = loggedIn == comment.user_id;
  const createdAt = new Date(comment.created_at).toLocaleDateString();
  //console.log(canEdit + comment.username);
  return (
    <div className="comment">
      <div className="comment-img-container">
        <img src="" alt="user img"></img>
      </div>
      <div className="comment-content">
        <div className="comment-author">{comment.username}</div>
        <div>{createdAt}</div>
      </div>
      <div className="comment-text">{comment.body}</div>
      <div className="comment-actions">
        {canReply && <div className="comment-action">Reply</div>}
        {canEdit && <div className="comment-action">Edit</div>}
        {canDelete && (
          <div
            className="comment-action"
            onClick={() => deleteHandler(comment.id)}
          >
            Delete
          </div>
        )}
      </div>

      {replies.length > 0 && (
        <div className="replies">
          {replies.map((reply) => (
            <Comment
              comment={reply}
              key={reply.id}
              replies={[]}
              canEdit={loggedIn}
              deleteHandler={deleteHandler}
            ></Comment>
          ))}
        </div>
      )}
    </div>
  );
}

export default Comment;
