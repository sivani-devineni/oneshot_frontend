import React from 'react'
import PostAuthor from './PostAuthor'
import { Link } from 'react-router-dom'
const PostItem = ({postID, category,title,description,thumbnail,date,authorName,authorID}) => {
  const shortDescription = description.length > 300 ? description.substr(0,300) + '...' : description;
  const postTitle = title.length >40 ? description.substr(0,40) + '...' : title;
  return (
    <article className="post">
       <div className='post_thumbnail'>
        <img src={thumbnail} alt={title} />
       </div>
       <div className="post_content">
        <Link to={`/posts/${postID}`}>
          <h3>{postTitle}</h3>
           </Link>
           <p>{shortDescription}</p>
       </div>
       <div className="post_footer">
        <PostAuthor name={authorName} authorId={authorID} date={date} />
        <Link to={`/posts/${category}/category`}  className='btn category'> {category}</Link>

       </div>
    </article>
  )
}

export default PostItem