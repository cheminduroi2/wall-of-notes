import axios from "axios";

export const fetchNotes = async () => {
  let notes;
  try {
    const resp = await axios.get("https://localhost:5001/api/Notes");
    notes = resp.data;
  } catch (err) {
    console.log(err);
    notes = [];
  } finally {
    return notes;
  }
};

export const postNote = async (data) => {
  let newNote;
  try {
    const resp = await axios.post("https://localhost:5001/api/Notes", data);
    newNote = resp.data;
  } catch (err) {
    console.log(err);
    newNote = {};
  } finally {
    return newNote;
  }
};
