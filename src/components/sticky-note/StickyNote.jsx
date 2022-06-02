import React from "react";
import Col from 'react-bootstrap/Col';
import "./StickyNote.css";

const StickyNote = (props) => {
  return (
    <Col className="cell">
      <a href="#">
        <h2>{props.name}</h2>
        <p>{props.msg}</p>
      </a>
    </Col>
  );
};

export default StickyNote;
