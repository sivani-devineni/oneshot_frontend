import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'




const Authors = () => {
  const {user,users} = useSelector((state)=>state.user);
  useEffect(()=>{

  },[user,users])
  return (
   <section className="authors">
   { users.length > 0 ? <div className="contusers_container">
    {
       users.map(({_id, profileImage, name, posts}) => { 

       return <div key={_id} to={`/posts/users/${_id}`} className='author'>
        <div className="author_avatar">
          <img src={profileImage} alt={`Image of ${name}`} />
        </div>
        <div className="author_info">
          <h4>{name}</h4>
          <p>{posts}</p>
        </div>
       </div>
})
}
    </div> : <h2 className='center'>No users/authors found</h2>
}
   </section>
  )
}

export default Authors