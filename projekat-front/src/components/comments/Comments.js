import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FormData from "form-data";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
function Comments({ element_id }) {
  const [comments, setComments] = useState([]);
  const rootComments = comments.filter((comment) => comment.parent_id === null);
  const [loggedIn, setLoggedIn] = useState(false);

  const deleteHandler = (commentId) => {
    var config = {
      method: "delete",
      url: "http://127.0.0.1:8000/api/profile/comments/delete/" + commentId,
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    };

    axios(config)
      .then(function (response) {
        const updatedComments = comments.filter(
          (comment) => comment.id !== commentId
        );
        setComments(updatedComments);
      })
      .catch(function (error) {
        //console.log(error);
      });
  };

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/profile",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    };

    axios(config)
      .then(function (response) {
        setLoggedIn(true);
      })
      .catch(function (error) {
        //console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/comments/" + element_id)
      .then((response) => {
        setComments(response.data.comments);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [element_id]);
  const addComment = (text, parent_id) => {
    var data = new FormData();
    data.append("text", text);
    data.append("parent_id", parent_id);
    data.append("anime_id", element_id);

    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/profile/comments/add",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.comment));
        setComments([response.data.comment, ...comments]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
      {window.sessionStorage.getItem("auth_token") == null ? (
        <></>
      ) : (
        <>
          <div className="comment-form-title">Write comment</div>
          <CommentForm
            submitLable="write"
            handleSubmit={addComment}
          ></CommentForm>
        </>
      )}
      <div className="comment-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            loggedIn={loggedIn}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default Comments;
