import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    isAuthenticated: false,
    user: {},
    updatedUser:{},
    error: {},
    isUpdatedUser: false,
    message: '',
    signUpSuccess: false,
    loginSuccess: false,
    users: [],
    isDeleted: false,
  };

export const userReducer = createReducer(initialState,(builder)=>{
  builder
      .addCase('signUpRequest', (state) => {
        state.loading = true;
      })
      .addCase('signUpSuccess', (state, action) => {
        state.loading = false;
        state.user = action.payload;
        // state.isAuthenticated = true;
        state.signUpSuccess = true;
      })
      .addCase('signUpFailure', (state, action) => {
        state.loading = false;
        // state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase('signUpClearErrors', (state, action) => {
        state.error = null;
        state.signUpSuccess = false;
      })
      //login Reducers
      .addCase('userUpdateRequest', (state) => {
        state.loading = true;
      })
      .addCase('userUpdateSuccess', (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isUpdatedUser = true;
      })
      .addCase('userUpdateFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isUpdatedUser = false;
      })
      .addCase('userUpdateClearErrors', (state, action) => {
        state.error = null;
        state.isUpdatedUser = false;
      })
      .addCase('loginRequest', (state) => {
        state.loading = true;
      })
      .addCase('loginSuccess', (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loginSuccess = true;
      })
      .addCase('loginFailure', (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase('loginClearErrors', (state, action) => {
        state.error = null;
        state.loginSuccess = false;
      })
      //loadUser Reducers
      .addCase('loadUserRequest', (state) => {
        state.loading = true;
      })
      .addCase('loadUserSuccess', (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loginSuccess = true;
      })
      .addCase('loadUserFailure', (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.loginSuccess = false;
        state.error = action.payload;
      })
      .addCase('loadUserClearErrors', (state, action) => {
        state.error = null;
        state.loginSuccess = false;
        state.isAuthenticated = false;
      })
      //logout Reducers
      .addCase('logoutRequest', (state) => {
        state.loading = true;
      })
      .addCase('logoutSuccess', (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.loginSuccess = false;
      })
      .addCase('logoutFailure', (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase('logoutClearErrors', (state, action) => {
        state.error = null;
        state.loginSuccess = false;
        state.isAuthenticated = false;
        state.user=null
      })
      .addCase('getAllUsersRequest', (state) => {
        state.loading = true;
      })
      .addCase('getAllUsersSuccess', (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase('getAllUsersFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase('getAllUsersClearErrors', (state, action) => {
        state.error = null;
      })
})