import React,{useState,useEffect} from 'react'
import Avatar from '../images/avatar1.jpg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostAuthor = ({authorId,name,date}) => {
  const {users} = useSelector((state)=>state.user)
  const [author,setAuthor] = useState();
  useEffect(()=>{
    if(users){
      const auth=users.find(user => user._id === authorId)
      // console.log(auth);
      setAuthor(auth)
    };
  
  },[users,authorId])
  return (
    <>
    {author ?
   <Link to={`posts/${name}/author`} className='post_author'>
    <div className="post_author-avatar">
      <img src={author?.profileImage || Avatar} alt=""/>
    </div>
    <div className="post_author-details">
      <h5>By: {name}</h5>
      <small>{date}</small>
    </div>
   </Link>:
      <Link to={`posts/${name}/author`} className='post_author'>
      <div className="post_author-avatar">
        <img src={'DF'} alt=""/>
      </div>
      <div className="post_author-details">
        <h5>By: {name}</h5>
        <small>{date}</small>
      </div>
     </Link>
}
   </>
  )
}

export default PostAuthor