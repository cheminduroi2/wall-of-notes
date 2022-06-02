import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { postNote } from "../../axios-util";
import "./NewNoteForm.css";

const NewNoteForm = (props) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = (e) => setName(e.target.value);
  const onMessageChange = (e) => setMessage(e.target.value);
  const onSubmit = async () => {
    await postNote({ Name: name, Message: message });
    props.onDone();
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          type="text"
          placeholder="James"
          onChange={onNameChange}
          required
          maxLength={12}
        />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={message}
          onChange={onMessageChange}
          placeholder="I hope anyone who see this has a great day!"
          required
          maxLength={70}
        />
        <Form.Text className="text-muted text-right">
          {message.length} / 70
        </Form.Text>
      </Form.Group>
      <div className="btn-footer">
        <Button variant="primary" type="submit" required>
          Post
        </Button>
      </div>
    </Form>
  );
};

export default NewNoteForm;
