import React, { useState } from "react";

function CommentForm({ handleSubmit, submitLable }) {
  const [text, setText] = useState("");
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text, "");
    setText("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <textarea
          className="comment-form-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          className="comment-form-button myButton"
          disabled={isTextareaDisabled}
        >
          {submitLable}
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
