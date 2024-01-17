import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateBlog } from "../Actions/blogActions";
import { getBlogById } from "../Actions/blogActions";
import axios from "axios";
import { getAllBlogs } from "../Actions/blogActions";
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
const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isUpdated, singleBlog } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch({ type: "updateBlogClearErrors" });
    dispatch(getBlogById(id));

    if (isUpdated) {
      navigate("/myPosts");
      dispatch(getAllBlogs());
    }
  }, [id, isUpdated]);

  const [title, setTitle] = useState(singleBlog[0] && singleBlog[0].title);
  const [category, setCategory] = useState(
    singleBlog[0] && singleBlog[0].category
  );
  const [description, setDescription] = useState(
    singleBlog[0] && singleBlog[0].description
  );
  const [thumbnail, setThumbnail] = useState(
    singleBlog[0] && singleBlog[0].thumbnail
  );

  const onUpdateBlogHandler = async (e) => {
    e.preventDefault();
    const regex = /<[^>]*>/g;

    const new_d = description.replace(regex, "");
    const blogDetails = {
      title,
      category,
      description: new_d,
      thumbnail,
    };
    dispatch(updateBlog(id, blogDetails));
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", thumbnail);
    formData.append("upload_preset", "zmcyqn6m");
    try {
      const url = "https://api.cloudinary.com/v1_1/dp8qit2et/image/upload";
      const response = await axios.post(url, formData);
      console.log(response);
      setThumbnail(response.data.secure_url);
      window.alert("image uploaded successfullly");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {singleBlog[0] && (
        <section className="create-post">
          <div className="container">
            <h2> Edit Post</h2>
            {error && <p className="form_error-message">{error}</p>}
            <div className="form create-post_form">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
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
              <div style={{ display: "flex" }}>
                <input
                  type="file"
                  onChange={(e) => setThumbnail(e.target.files[0])}
                  accept="png, jpg, jpeg"
                />
                <button
                  type="button"
                  className="btn primary"
                  onClick={uploadImage}
                >
                  {" "}
                  Upload
                </button>
              </div>
              <button
                type="button"
                className="btn primary"
                onClick={onUpdateBlogHandler}
              >
                {" "}
                Update
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default EditPost;
