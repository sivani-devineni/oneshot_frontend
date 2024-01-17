import React, { useEffect, useState } from "react";
import Avatar from "../images/avatar15.jpg";
import { Link,useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateUserProfile } from "../Actions/userActions";
// import up

const UserProfile = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.blog);
  const [name, setName] = useState(user?user.name:"");
  const [email, setEmail] = useState(user.email);

  const [profileImage, setProfileImage] = useState(user && user.profileImage);
  const [thumb,setThumb]=useState();

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", thumb);
    formData.append("upload_preset", "zmcyqn6m");
   console.log("Entered upload");
    try {
      const url = "https://api.cloudinary.com/v1_1/dp8qit2et/image/upload";
      const response = await axios.post(url, formData);
      console.log(response);
      setProfileImage(response.data.secure_url);
      window.alert("Image uploaded successfully");
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };
  console.log(user);
  

  useEffect(() => {
    console.log("Entered use effect");
    dispatch({ type: "showUserBlogsClearErrors" });
    if(thumb){
      console.log("entered useEfffedct u oploas");
      uploadImage();
    }
  }, [thumb]);


   const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      name,email,profileImage
    };
    console.log(data);
    dispatch(updateUserProfile(id,data))
  };

  return (
    <>
      { user &&
        <section className="profile">
          <div className="container profile_container">
            <Link to={"/myPosts"} className="btn">
              My posts
            </Link>
            <div className="profile_details">
              <div className="avatar_wrapper">
                <div className="profile_avatar">
                  <img src={profileImage} alt="" />
                </div>
                <form className="avatar_form">
                  <input
                    type="file"
                    name="avatar"
                    id="avatar"
                    onChange={(e) => setThumb(e.target.files[0])}
                    accept="png, jpg, jpeg"
                  />

                  <label htmlFor="avatar">
                    {" "}
                    <FaEdit />{" "}
                  </label>
                </form>
                {/* <button className='profile_avatar-btn'> <FaCheck/></button> */}
              </div>
              <h1>{user.name}</h1>

              <form className="form profile_form">
                {error && <p className="form_error-message">{error}</p>}

                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button type="button" className="btn primary" onClick={onSubmitHandler}>
                  Update Details
                </button>
              </form>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default UserProfile;
