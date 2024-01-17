import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "../Actions/blogActions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const POST_CATEGORIES = [
  "Agriculture",
  "Business",
  "Education",
  "Entertainment",
  "Art",
  "Investment",
  "Uncategorized",
  "Weather",
];
const CreatePost = () => {
  const { user } = useSelector((state) => state.user);
  const { error,isCreated } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const navigate=useNavigate();
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    withCredentials: true,
  };
  const uploadImage = async() => {
    const formData = new FormData();
    formData.append("file",thumbnail);
    formData.append("upload_preset","zmcyqn6m");
    try {
      const url="https://api.cloudinary.com/v1_1/dp8qit2et/image/upload"
      const response = await axios.post(url,formData);
      console.log(response);
      setThumbnail(response.data.secure_url);
      window.alert("image uploaded successfullly");
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const regex = /<[^>]*>/g;

    const new_d = description.replace(regex, '');
    const data = {
      userId: user._id,
      userName: user.name,
      title,
      category,
      description:new_d,
      thumbnail
    };
    console.log(data);
    dispatch(createBlog(data));
    setTitle("");
    setCategory("Uncategorized");
    setDescription("");
    setThumbnail("");


  };
  useEffect(()=>{
    dispatch({type:"createBlogClearErrors"});
    if(isCreated){
      navigate("/myPosts") 
     }
  },[isCreated])


  return (
    <section className="create-post">
      <div className="container">
        <h2> Create Post</h2>
        {error && <p className="form_error-message">{error}</p>}
        <form className="form create-post_form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {POST_CATEGORIES.map((cat) => (
              <option key={cat}> {cat}</option>
            ))}
          </select>
          <ReactQuill
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
          />
          <div style={{display:"flex"}}>
          <input
            type="file"
            onChange={(e) => setThumbnail(e.target.files[0])}
            accept="png, jpg, jpeg"
          />
          <button type="button" className="btn primary" onClick={uploadImage}>upload</button>
          </div>
          <button
            type="button"
            className="btn primary"
            onClick={onSubmitHandler}
          >

            Create
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
