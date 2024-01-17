import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './Reducers/userReducer';
import { blogReducers } from './Reducers/blogReducer';
const store = configureStore({
    reducer:{
        user:userReducer,
        blog:blogReducers
    }
});

export default store;