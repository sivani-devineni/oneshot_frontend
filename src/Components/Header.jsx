import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import blogger from "../images/blogger.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Actions/userActions";
import { getUserBlogs } from "../Actions/blogActions";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loginSuccess } = useSelector((state) => state.user);
  // const { allBlogs } = useSelector((state) => state.blog);

  const [isNavShowing, setIsNavShowing] = useState(
    window.innerWidth > 800 ? true : false
  );

  useEffect(() => {
    const handleResize = () => {
      // console.log(window.innerWidth);
      setIsNavShowing(window.innerWidth > 800 ? true : false);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  };

  const logoutHandler = async (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    dispatch({type:"showAllBlogsClearBlogs"});
    dispatch({type:"showUserBlogsClearBlogs"});
    navigate('/')
  };

  const blogWriteHandler = () => {
    // console.log("Blog HIi");
    navigate("/userBlog");
  };

  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="nav_logo" onClick={closeNavHandler}>
          <img src={blogger} alt="Navbar Logo" className="Logo" />
        </Link>

        {isNavShowing && (
          <ul className="nav_menu">
            {(user  && loginSuccess) ? (
              <>
                <li>
                  <Link to={`/profile/${user._id}`} onClick={closeNavHandler}>
                    {user.name}
                  </Link>
                </li>
                <li>
                  <Link to="/createBlog" onClick={blogWriteHandler}>
                    Create Post
                  </Link>
                </li>
                <li>
                  <Link to="/authors" onClick={closeNavHandler}>
                    Authors
                  </Link>
                </li>
                <li>
                  <Link to="/logout" onClick={logoutHandler}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" onClick={closeNavHandler}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" onClick={closeNavHandler}>
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        )}

        <button
          className="nav_toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
