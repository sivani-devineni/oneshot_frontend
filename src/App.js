import Header from './Components/Header';
import Footer from './Components/Footer';
import Auth from './pages/Auth';
import UpdateSuccess from './pages/UpdateSuccess';
import Layout from './Components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile'; 
import CreatePost from './pages/CreatePost'; 
import EditPost from './pages/EditPost'; 
import DeletePost from './pages/DeletePost';
import SuccessPost from './pages/SuccessPost';
import CategoryPosts from './pages/CategoryPosts'; 
import AuthorPosts from './pages/AuthorPosts'; 
import Dashboard from './pages/Dashboard' ;
import Logout from './pages/Logout';
import Authors from './pages/Authors';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { loadUser } from "./Actions/userActions";
import { getAllUsers } from './Actions/userActions';
import { getAllBlogs } from "./Actions/blogActions";
function App() {
  const dispatch = useDispatch();
  const { isAuthenticated,isUpdatedUser } = useSelector((state) => state.user);
  const { isCreated,isDeleted } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(loadUser());
    
    if(isAuthenticated){
      dispatch(getAllBlogs());
      dispatch(getAllUsers());
    }
  }, [isAuthenticated,isCreated,isDeleted,isUpdatedUser]);


  return (

      <BrowserRouter>
        <Header/>
        <Routes>

          <Route path="/" element={isAuthenticated?<Home/>:<Auth/>}/>
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createBlog" element={<CreatePost />} />
          <Route path="/profile/:id" element={<UserProfile/>} />
          <Route path="/myPosts" element={<Dashboard />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
          <Route path="/posts/deleteSuccess" element={<DeletePost />} />
          <Route path="/posts/success" element={<SuccessPost />} />
          <Route path="/posts/updateSuccess" element={<SuccessPost />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/posts/:category/category" element={<CategoryPosts />} />
          <Route path="/posts/:author/author" element={<AuthorPosts />} />
          {/* <Route path="/userLibrary" element={<DisplayUserBlogs />} /> */}
          {/* <Route path="/userUpdateBlog" element={<Update />} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>

  );
}

export default App;
