import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./Comment";

function Comments({ anime_id }) {
  const [comments, setComments] = useState([]);
  const rootComments = comments.filter((comment) => comment.parent_id === null);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/comments/" + anime_id)
      .then((response) => {
        setComments(response.data.comments);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [anime_id]);
  const getReplies = (commentid) => {
    return comments
      .filter((comment) => comment.parent_id === commentid)
      .sort(
        (a, b) =>
          new Date(a.created_at).getTime() -
          new DataTransfer(b.created_at).getTime()
      );
  };
  console.log(comments);
  console.log(rootComments);
  return (
    <div className="comment-list">
      <h3>Comments</h3>
      <div className="comment-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Comments;
