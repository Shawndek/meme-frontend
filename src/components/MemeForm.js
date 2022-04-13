import React from "react";
import { useState /* , useEffect */ } from "react";

import axios from "axios";

export default function App() {
  const [uploadedImage] = useState(null);
  const [{ title, author, category, imageurl }, setFormState] = useState({
    title: "",
    author: "",
    imageurl: "",
    category: "",
  });

  const uploadImage = /* useEffect( */ () => {
    /* const id = crypto.randomUUID(); */
    const createMeme = "http://localhost:3001/memes/";
    axios
      .post(createMeme, {
        title: title,
        author: author,
        category: category,
        imageurl: imageurl,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }; /*, [] ) */

  const handleChange = (e) => {
    /* 
    if (e.target.nodeName === "SELECT") {
      setFormState((prev) => ({
        ...prev,
        [e.target.name]: Array.from(
          e.target.selectedOptions,
          (option) => option.value
        ),
      }));
    } else { */
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="App">
      <h2>Create a meme</h2>
      <form onSubmit={uploadImage}>
        <input
          type="text"
          placeholder="Title..."
          value={title}
          name="title"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="URL"
          value={imageurl}
          name="imageurl"
          onChange={handleChange}
        />
        <label>Category</label>
        <select name="category" value={category} onChange={handleChange}>
          <option value="Trending">trending</option>
          <option value="Classics">classics</option>
          <option value="Animals">animals</option>
          <option value="Crypto">crypto</option>
          <option value="Cooking">cooking</option>
          <option value="Relationship">relationship</option>
        </select>
        <br />
        <input
          type="text"
          placeholder="Author..."
          value={author}
          name="author"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Upload" />
      </form>
      {uploadedImage && (
        <img
          src={uploadedImage.imageurl}
          width="300"
          alt={uploadedImage.title}
        />
      )}
    </div>
  );
}
