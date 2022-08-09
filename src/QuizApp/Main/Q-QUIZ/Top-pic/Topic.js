import React from "react";
import "../Top-pic/Topic.scss";
const Topic = () => {
  return (
    <>
      <div className="container">
        <div className="topic">Choose your favorite topic</div>
        <p>Select topic</p>
      </div>
      <div className="tag">
        <button className="mini-tag" tabindex="1">
          TagBadge
        </button>
        <button className="mini-tag" tabindex="1">
          TagBadge
        </button>
        <button className="mini-tag" tabindex="1">
          TagBadge
        </button>
        <button className="mini-tag" tabindex="1">
          TagBadge
        </button>
        <button className="mini-tag" tabindex="1">
          TagBadge
        </button>
        <button className="mini-tag" tabindex="1">
          TagBadge
        </button>
      </div>
      <div className="start">
        <button className="btn">Start</button>
      </div>
    </>
  );
};

export default Topic;
