import React from "react";

function Popup({ data, setTrigger }) {
  return data.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <p>{data.text}</p>
        <button
          className="close-btn"
          onClick={() => setTrigger({ trigger: false, text: "" })}
        >
          Ok
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
