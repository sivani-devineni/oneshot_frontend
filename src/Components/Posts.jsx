import React, { useState, useEffect } from "react";
import PostItem from "./PostItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Posts = () => {
  // const navigate = useNavigate();
  const { allBlogs} = useSelector((state) => state.blog);
  const [blogs,setBlogs] =useState(allBlogs||[]);
  const updateByUser=(data)=>{

  }
  const updateByCategory=(data)=>{
    console.log("Entered cat");
    if(blogs){
      console.log("Entered if  cat");
      const filteredBlogs  = allBlogs.filter(blog=>blog.category===data)
      setBlogs(filteredBlogs)
    }
  }
  useEffect(()=>{
    if(allBlogs){
      setBlogs(allBlogs)
    }
  },[allBlogs])
  return (
    <section className="posts">
      {blogs.length>0 ? (
        <div className="container posts_container">
          {blogs.map(
            ({ _id, userId, userName, title, category, description,thumbnail, date }) => (
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
                // updateByCategory={updateByCategory}
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

export default Posts;
