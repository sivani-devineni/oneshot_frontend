import React, { useState, useEffect } from "react";
import { DUMMY_POSTS } from "../data";
import PostItem from "../Components/PostItem";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const AuthorPosts = () => {
  // const [posts,setPosts] = useState(DUMMY_POSTS)
  const { allBlogs } = useSelector((state) => state.blog);
  const [posts,setPosts] = useState(allBlogs||[]);
  const { author } = useParams();
  useEffect(() => {
    console.log("Entered cat");
    if (allBlogs) {
      console.log("Entered if  cat");
      const filteredBlogs = allBlogs.filter((blog) => blog.userName === author);
      console.log(filteredBlogs);
      setPosts(filteredBlogs)
    } else {
      console.log("NotEntered");
    }
  }, [author, allBlogs]);

  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container posts_container">
          {posts.map(
            ({
              _id,
              userId,
              userName,
              title,
              category,
              description,
              thumbnail,
              date,
            }) => (
              <PostItem
              key={_id}
              postID={_id}
              userName={userName}
              category={category}
              title={title}
              description={description}
              authorID={userId}
              authorName={userName}
              thumbnail={thumbnail}
              date={date}
              />
            )
          )}
        </div>
      ) : (
        <h2 className="center"> No posts Found</h2>
      )}
    </section>
  );
};

export default AuthorPosts;
