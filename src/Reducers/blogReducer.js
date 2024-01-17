import  {createReducer} from '@reduxjs/toolkit'

const initialState={
    loading: false,
    isCreated: false,
    isUpdated: false,
    isDeleted: false,
    blogsFetched:false,
    userBlogsFetched:false,
    singleBlog:{},
    blog:{},
    allBlogs:[],
    userBlogs:[],
    blogs2:{},
    
    error: '',
    // createBlogError:""
}

export const blogReducers= createReducer(initialState,(builder)=>{
    builder
      .addCase('createBlogRequest', (state) => {
        state.loading = true;
      })
      .addCase('createBlogSuccess', (state, action) => {
        state.loading = false;
        // state.blog = action.payload;
        state.isCreated = true;
      })
      .addCase('createBlogFailure', (state, action) => {
        state.loading = false;
        state.isCreated=false;
        state.error = action.payload;
      })
      .addCase('createBlogClearErrors', (state, action) => {
        state.error = null;
        state.isCreated = false;
      })
      .addCase('updateBlogRequest', (state) => {
        state.loading = true;
      })
      .addCase('updateBlogSuccess', (state, action) => {
        state.loading = false;
        state.blog = action.payload;
        state.isUpdated = true;
      })
      .addCase('updateBlogFailure', (state, action) => {
        state.loading = false;
        state.isUpdated=false;
        state.error = action.payload;
      })
      .addCase('updateBlogClearErrors', (state, action) => {
        state.error = null;
        state.isUpdated = false;
      })
      .addCase('showUserBlogsRequest', (state) => {
        state.loading = true;
      })
      .addCase('showUserBlogsSuccess', (state, action) => {
        state.loading = false;
        state.userBlogs = action.payload;
        state.userBlogsFetched = true;
      })
      .addCase('showUserBlogsFailure', (state, action) => {
        state.loading = false;
        state.userBlogsFetched=false;
        state.error = action.payload;
      })
      .addCase('showUserBlogsClearErrors', (state, action) => {
        state.error = null;
        state.userBlogsFetched = false;
        // state.userBlogs=null
      })
      .addCase('showUserBlogsClearBlogs', (state, action) => {
        state.userBlogs={}
      })
      
      .addCase('showAllBlogsRequest', (state) => {
        state.loading = true;
      })
      .addCase('showAllBlogsSuccess', (state, action) => {
        state.loading = false;
        state.allBlogs = action.payload;
        state.blogsFetched = true;
      })
      .addCase('showAllBlogsFailure', (state, action) => {
        state.loading = false;
        state.blogsFetched=false;
        state.error = action.payload;
      })
      .addCase('showAllBlogsClearErrors', (state, action) => {
        state.error = null;
        state.blogsFetched = false;
      })
      .addCase('showAllBlogsClearBlogs', (state, action) => {
        state.allBlogs={}
      })
      .addCase('getSingleBlogRequest', (state) => {
        state.loading = true;
      })
      .addCase('getSingleBlogSuccess', (state, action) => {
        state.loading = false;
        state.singleBlog= action.payload;
      })
      .addCase('getSingleBlogFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase('getSingleBlogClearErrors', (state, action) => {
        state.error = null;
        // state.isCreated = false;
      })
      .addCase('deleteBlogRequest', (state) => {
        state.loading = true;
      })
      .addCase('deleteBlogSuccess', (state, action) => {
        state.loading = false;
        state.isDeleted=true;
        state.blog=action.payload
      })
      .addCase('deleteBlogFailure', (state, action) => {
        state.loading = false;
        state.isDeleted=false;
        state.error = action.payload;
      })
      .addCase('deleteBlogClearErrors', (state, action) => {
        state.error = null;
        state.isDeleted = false;
      })
})