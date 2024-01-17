import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const registerUser = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    dispatch({ type: "signUpRequest" });
    const url = "https://blogapplication-xvm2.onrender.com/user/register";
    const response = await axios.post(url, formData, config);
    // console.log(response);
    dispatch({ type: "signUpSuccess", payload: response.data.user });
  } catch (error) {
    console.log(error);
    dispatch({ type: "signUpFailure", payload: error.response.data.error });
  }
};

export const loginUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });
    const url = "https://blogapplication-xvm2.onrender.com/user/login";
    const response = await axios.post(url, formData, config);
    // console.log(response);
    dispatch({
      type: "loginSuccess",
      payload: response.data.user,
    });
  } catch (error) {
    // console.log(error);
    dispatch({
      type: "loginFailure",
      payload: error.response.data.error,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });
    const url = "https://blogapplication-xvm2.onrender.com/user/check";
    const response = await axios.get(url, config);
    // console.log(response.data);
    if(!response.data.success){
      dispatch({
        type: "loadUserFailure",
      });
    }
    else{
    dispatch({
      type: "loadUserSuccess",
      payload: response.data.user,
    });}
  } catch (error) {
    dispatch({
      type: "loadUserFailure",
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });
    const url="https://blogapplication-xvm2.onrender.com/user/logout"
    const response = await axios.get(url, config);
    // await axios.get(url, config);
    console.log(response);
    dispatch({
        type:"logoutSuccess"
    })
  } catch (error) {
    dispatch({ type: "logoutFailure", payload: error });
  }
};

export const updateUserProfile=(id,formData)=>async(dispatch)=>{
  try {
    dispatch({type:"userUpdateRequest"});
    const url=`https://blogapplication-xvm2.onrender.com/user/update/${id}`
    const response = await axios.put(url, formData, config);
    // console.log(response);
    dispatch({ type: "userUpdateSuccess", payload: response.data.user });
  } catch (error) {
    // console.log(error);
    dispatch({type:"userUpdateFailure",payload:error.response.data.error})
  }
}


export const getAllUsers=()=>async(dispatch)=>{
  try {
    dispatch({type:"getAllUsersRequest"});
    const url=`https://blogapplication-xvm2.onrender.com/user/allUsers`
    const response = await axios.get(url, config);
    // console.log(response);
    dispatch({ type: "getAllUsersSuccess", payload: response.data.users});
  } catch (error) {
    console.log(error);
    dispatch({type:"getAllUsersFailure",payload:error.response.data.error})
  }
}


