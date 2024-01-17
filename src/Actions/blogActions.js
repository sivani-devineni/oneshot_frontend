import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const createBlog = (blogDetails) => async (dispatch) => {
  try {
    dispatch({ type: "createBlogRequest" });
    const url = "https://blogapplication-xvm2.onrender.com/blog/create";
    const response = await axios.post(url, blogDetails, config);
    // console.log(response.data);
    dispatch({ type: "createBlogSuccess", payload: response.data.blog });
  } catch (error) {
    // console.log(error);
    dispatch({ type: "createBlogFailure", payload: error.response.data.error });
  }
};

export const getUserBlogs = (id) => async (dispatch) => {
  try {
    dispatch({ type: "showUserBlogsRequest" });
    const url = `https://blogapplication-xvm2.onrender.com/blog/userBlogs/${id}`;
    const response = await axios.get(url, config);
    // console.log(response.data);
    dispatch({ type: "showUserBlogsSuccess", payload: response.data.blogs });
  } catch (error) {
    // console.log(error);

    dispatch({ type: "showUserBlogsFailure", payload: error.message });
  }
};

export const getAllBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: "showAllBlogsRequest" });
    const url = "https://blogapplication-xvm2.onrender.com/blog/allBlogs";
    const response = await axios.get(url, config);
    // console.log(response.data);
    dispatch({ type: "showAllBlogsSuccess", payload: response.data.blogs });
  } catch (error) {
    // console.log(error);
    dispatch({ type: "showAllBlogsFailure", payload: error });
  }
};

export const updateBlog = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: "updateBlogRequest" });
    const url = `https://blogapplication-xvm2.onrender.com/blog/update/${id}`;
    const response = await axios.put(url, formData, config);
    // console.log(response);
    dispatch({ type: "updateBlogSuccess", payload: response.data.blog });
  } catch (error) {
    // console.log(error);
    dispatch({ type: "updateBlogFailure", payload: error.response.data.error });
  }
};

export const getBlogById=(id)=>async(dispatch)=>{
  try {
    dispatch({type:"getSingleBlogRequest"});
    const url = `https://blogapplication-xvm2.onrender.com/blog/${id}`;
    const response = await axios.get(url, config);
    // console.log(response);
    dispatch({ type: "getSingleBlogSuccess", payload: response.data.blogs });
    
  } catch (error) {
    // console.log(error);
    dispatch({ type: "getSingleBlogFailure", payload: error.response.data.error });
  }
}

export const deleteBlog=(id)=>async(dispatch)=>{
  try{
    dispatch({type:"deleteBlogRequest"})
    const url=`https://blogapplication-xvm2.onrender.com/blog/delete/${id}`
    const response = await axios.delete(url,config);
    // console.log(response);
    dispatch({type:"deleteBlogSuccess",payload:response.data.blog})
  }catch(error){
    // console.log(error)
    dispatch({ type: "deleteBlogFailure", payload: error.response.data.error });
  }
  
}
