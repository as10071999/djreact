import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  useEffect(async () => {
    let url = "http://127.0.0.1:8000/api/";
    const response = await axios.get(url);
    console.log(response.data);
  }, []);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Submit Button Hitted!");
    let formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    let url = "http://127.0.0.1:8000/api/create/";
    try {
      const response = await axios.post(url, formData);
    } catch (error) {
      console.log(error);
    }

    console.log("Sent ");
  }
  function handleTitleChange(e) {
    console.log("Title:", e.target.value);
    setTitle(e.target.value);
  }
  function handleContentChange(e) {
    console.log("Content:", e.target.value);
    setContent(e.target.value);
  }
  return (
    <>
      <form>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          onChange={handleTitleChange}
        />
        <label>Content:</label>
        <input
          type="text"
          name="title"
          placeholder="Enter Content"
          onChange={handleContentChange}
        />
        <input type="submit" value="Submit" onClick={handleSubmit}></input>
      </form>
    </>
  );
}

export default App;
