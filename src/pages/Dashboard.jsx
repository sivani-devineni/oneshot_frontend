import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getUserBlogs } from '../Actions/blogActions';
import { deleteBlog } from '../Actions/blogActions';
const Dashboard = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {user}=useSelector((state)=>state.user)
  const id=user._id;
  const {userBlogs,isDeleted} = useSelector((state)=>state.blog)
  useEffect(()=>{
    dispatch({type:"deleteBlogClearErrors"})
    dispatch(getUserBlogs(id));
    if(isDeleted){
      navigate('/myPosts')
    }
  },[id,isDeleted])
  return (
   <section className="dashboard">
    {
      
      userBlogs.length>0 ? <div className="container dashboard_container">
        {
          userBlogs.map(post => {
             return <article key={post._id} className='dashboard_post'>
              <div className="dashboard_post-info">
                 <div className="dashboard_post-thumbnail">
                  <img src={post.thumbnail} alt=""/>
                 </div>
                 <h5>{post.title}</h5>
              </div>
              <div className="dashboard_post-actions">
                   <Link to={`/posts/${post._id}`} className='btn sm'> View </Link>
                   <Link to={`/posts/${post._id}/edit`} className='btn sm primary'> Edit </Link>
                   <div className='btn sm danger' onClick={()=>dispatch(deleteBlog(post._id))}> Delete </div>
                   {/* <Link to={`/posts/${post._id}/delete`} className='btn sm danger' onClick={()=>dispatch(deleteBlog(post._id))}> Delete </Link> */}
              </div>

             </article>
          })
        }
      </div> : <h2 className="center"> You have no posts yet</h2>
    }
   </section>
  )
}

export default Dashboard