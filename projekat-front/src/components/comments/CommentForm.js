import React, { useState } from "react";

function CommentForm({
  handleSubmit,
  submitLable,
  hasCancelButton = false,
  initialText = "",
  handleCancle,
}) {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
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
          type="submit"
        >
          {submitLable}
        </button>
        {hasCancelButton && (
          <button
            type="button"
            className="comment-form-button comment-form-cancel-button myButton"
            onClick={handleCancle}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default CommentForm;
