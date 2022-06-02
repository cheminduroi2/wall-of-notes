import React, { useState, useEffect } from "react";
import StickyNote from "../sticky-note/StickyNote";
import NewNoteForm from "../new-note/NewNoteForm";
import Container from "react-bootstrap/Container";
import { Row, Button, Modal } from "react-bootstrap";
import { fetchNotes } from "../../axios-util";
import "./Home.css";

const Home = () => {
  const [show, setShow] = useState(false);
  const [notes, setNotes] = useState([]);

  const onClose = () => setShow(false);
  const onShow = () => setShow(true);

  useEffect(
    () => (async () => setNotes(await fetchNotes()))(),
    [show],
  );

  

  return (
    <div id="main">
      <div>
        <span id="title">Wall of Notes</span>
        <Button className="circular" variant="success" onClick={onShow}>
          Add Note&nbsp;&nbsp;+
        </Button>
      </div>

      <Container className="cont">
        <Row>
          {notes.map((n, idx) => <StickyNote key={idx} msg={n['message']} name={n['name']}/>)}
        </Row>
      </Container>
      <br />

      <Modal show={show} onHide={onClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body><NewNoteForm onDone={onClose}/></Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
