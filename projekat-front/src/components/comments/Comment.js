import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";

function Comment({
  comment,
  replies,
  loggedIn,
  deleteHandler,
  addComment,
  activeComment,
  setActiveComment,
  parentId = null,
}) {
  const canReply = Boolean(window.sessionStorage.getItem("auth_token"));
  const canEdit = loggedIn === comment.user_id;
  const canDelete = loggedIn === comment.user_id;
  const createdAt = new Date(comment.created_at).toLocaleDateString();
  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment.id;
  const isEditing =
    activeComment &&
    activeComment.type === "editing" &&
    activeComment.id === comment.id;
  const replyId = parentId ? parentId : comment.id;
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
        {canReply && (
          <div
            className="comment-action"
            onClick={() =>
              setActiveComment({ id: comment.id, type: "replying" })
            }
          >
            Reply
          </div>
        )}
        {canEdit && (
          <div
            className="comment-action"
            onClick={() =>
              setActiveComment({ id: comment.id, type: "editing" })
            }
          >
            Edit
          </div>
        )}
        {canDelete && (
          <div
            className="comment-action"
            onClick={() => deleteHandler(comment.id)}
          >
            Delete
          </div>
        )}
      </div>
      {isReplying && (
        <CommentForm
          submitLable="Reply"
          handleSubmit={(text) => addComment(text, replyId)}
        />
      )}

      {replies.length > 0 && (
        <div className="replies">
          {replies.map((reply) => (
            <Comment
              comment={reply}
              key={reply.id}
              replies={[]}
              loggedIn={loggedIn}
              addComment={addComment}
              parentId={comment.id}
              deleteHandler={deleteHandler}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
            ></Comment>
          ))}
        </div>
      )}
    </div>
  );
}

export default Comment;
