import React,{useState,useEffect} from 'react'
import PostAuthor from '../Components/PostAuthor'
import { Link, useNavigate } from 'react-router-dom'
import{useParams} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { deleteBlog } from '../Actions/blogActions'
import { getBlogById } from '../Actions/blogActions'
const PostDetail = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const {singleBlog,isDeleted} = useSelector((state)=>state.blog)
  const {user} = useSelector((state)=>state.user)

  useEffect(()=>{
    dispatch({type:"deleteBlogClearErrors"});
    dispatch(getBlogById(id));
    if(isDeleted){
      navigate('/myPosts')
    }
  },[id,isDeleted])


  return (
    <>
    {singleBlog[0] &&
    <section className="post-detail">
      <div className="container post-detail_container">
      <div className="post-detail_header">
        <PostAuthor  authorId={singleBlog[0].userId}  name={singleBlog[0].userName} date={singleBlog[0].date}/>
        {(user._id==singleBlog[0].userId) &&
        <div className="post-detail_buttons">
          <Link to={`/posts/${singleBlog[0]._id}/edit`} className='btn sm primary'> Edit</Link>
          <div className='btn sm danger' onClick={()=>dispatch(deleteBlog(singleBlog[0]._id))}> Delete </div>
        </div>
}
        </div> 
        <h1>{singleBlog[0].title}</h1>


      <div className='post-detail_thumbnail'>
        <img src={singleBlog[0].thumbnail} alt="NO Image" />
      </div>
      <p>
        {singleBlog[0].description}
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, maiores! Reiciendis, repudiandae, facilis saepe minima delectus eum sapiente veniam quas soluta, deserunt explicabo alias itaque corrupti modi molestiae inventore ipsa ratione dolore! Voluptatum voluptatem molestias aperiam a. Dolores itaque dolorem nam totam omnis, aspernatur similique aperiam reiciendis ipsum non molestias voluptate dolore inventore incidunt laborum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nesciunt. Atque iste nam molestias, sed maiores enim mollitia illo dolorum, modi unde adipisci fugiat explicabo laboriosam aspernatur tempore voluptatum. Sapiente quam hic molestias rerum voluptatum consectetur illo temporibus ipsa, ullam magnam maxime quisquam cupiditate et nostrum veritatis blanditiis, dignissimos consequatur ratione vitae explicabo. Maxime dolores, sequi quisquam eius iste est placeat, atque quos ratione laboriosam sunt qui in quis animi veritatis omnis adipisci autem reiciendis soluta pariatur. Consequatur quae, asperiores ratione ad, eos earum aliquam ab culpa veritatis alias amet eaque, sint voluptate tempore! Id aperiam aspernatur consequatur omnis earum? Nam, pariatur? Nostrum eum tempora at sint facere, voluptatem esse cumque.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsam, aliquam veritatis optio et saepe similique omnis eaque debitis labore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae, incidunt eaque aspernatur magni quasi suscipit numquam, sit earum, quos sapiente maiores dolorum corrupti? Ad qui earum magnam ullam ut hic quidem illo. Harum fugit nemo vero, minus nostrum cupiditate placeat voluptates impedit! Saepe quisquam incidunt at distinctio. Possimus corrupti praesentium modi, cupiditate et fugit ducimus suscipit veniam aperiam necessitatibus quam tempore nobis eligendi aspernatur eveniet harum placeat facilis dolorum dolor fuga corporis dicta! Temporibus ipsam, aliquam corporis harum pariatur, ab dolorem velit quo ea ullam minus tempora. Dicta error, harum delectus molestias voluptatum eum debitis quam reiciendis, beatae reprehenderit ducimus aliquam. Perferendis autem sed eligendi recusandae tempore voluptatum, tenetur, pariatur accusamus, velit eius quos provident corrupti! Delectus magni eveniet rem non ad quos dolores deleniti veritatis! Molestias distinctio dolore sed a quisquam ducimus doloremque voluptate deserunt dolorem itaque placeat quo minima ipsa nam ratione debitis voluptas eius, sapiente, repellendus necessitatibus nobis nulla sequi reprehenderit. Porro omnis nemo iste soluta temporibus illum a ut quae, consequatur maxime sed repellendus ipsam aliquam molestias id atque dicta explicabo quia voluptatum laudantium at assumenda voluptates eum quis? Cum saepe nesciunt, praesentium soluta corrupti aut doloribus quis enim iure at, reiciendis amet dolorum aliquid.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae, incidunt eaque aspernatur magni quasi suscipit numquam, sit earum, quos sapiente maiores dolorum corrupti? Ad qui earum magnam ullam ut hic quidem illo. Harum fugit nemo vero, minus nostrum cupiditate placeat voluptates impedit! Saepe quisquam incidunt at distinctio. Possimus corrupti praesentium modi, cupiditate et fugit ducimus suscipit veniam aperiam necessitatibus quam tempore nobis eligendi aspernatur eveniet harum placeat facilis dolorum dolor fuga corporis dicta! Temporibus ipsam, aliquam corporis harum pariatur, ab dolorem velit quo ea ullam minus tempora. Dicta error, harum delectus molestias voluptatum eum debitis quam reiciendis, beatae reprehenderit ducimus aliquam. Perferendis autem sed eligendi recusandae tempore voluptatum, tenetur, pariatur accusamus, velit eius quos provident corrupti! Delectus magni eveniet rem non ad quos dolores deleniti veritatis! Molestias distinctio dolore sed a quisquam ducimus doloremque voluptate deserunt dolorem itaque placeat quo minima ipsa nam ratione debitis voluptas eius, sapiente, repellendus necessitatibus nobis nulla sequi reprehenderit. Porro omnis nemo iste soluta temporibus illum a ut quae, consequatur maxime sed repellendus ipsam aliquam molestias id atque dicta explicabo quia voluptatum laudantium at assumenda voluptates eum quis? Cum saepe nesciunt, praesentium soluta corrupti aut doloribus quis enim iure at, reiciendis amet dolorum aliquid.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae, incidunt eaque aspernatur magni quasi suscipit numquam, sit earum, quos sapiente maiores dolorum corrupti? Ad qui earum magnam ullam ut hic quidem illo. Harum fugit nemo vero, minus nostrum cupiditate placeat voluptates impedit! Saepe quisquam incidunt at distinctio. Possimus corrupti praesentium modi, cupiditate et fugit ducimus suscipit veniam aperiam necessitatibus quam tempore nobis eligendi aspernatur eveniet harum placeat facilis dolorum dolor fuga corporis dicta! Temporibus ipsam, aliquam corporis harum pariatur, ab dolorem velit quo ea ullam minus tempora. Dicta error, harum delectus molestias voluptatum eum debitis quam reiciendis, beatae reprehenderit ducimus aliquam. Perferendis autem sed eligendi recusandae tempore voluptatum, tenetur, pariatur accusamus, velit eius quos provident corrupti! Delectus magni eveniet rem non ad quos dolores deleniti veritatis! Molestias distinctio dolore sed a quisquam ducimus doloremque voluptate deserunt dolorem itaque placeat quo minima ipsa nam ratione debitis voluptas eius, sapiente, repellendus necessitatibus nobis nulla sequi reprehenderit. Porro omnis nemo iste soluta temporibus illum a ut quae, consequatur maxime sed repellendus ipsam aliquam molestias id atque dicta explicabo quia voluptatum laudantium at assumenda voluptates eum quis? Cum saepe nesciunt, praesentium soluta corrupti aut doloribus quis enim iure at, reiciendis amet dolorum aliquid.
      </p>
      </div>
    </section>
}
    </>
  )
}

export default PostDetail