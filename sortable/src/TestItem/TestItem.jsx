import React from "react";
import "./TestItem.css";

const TestItem = ({ data, index }) => {
  return (
    <div>
      <div className="test-item">
        <div>
          <p>content: {data.content}</p>
          <p>index: {index}</p>
        </div>
      </div>
    </div>
  );
};

export default TestItem;
