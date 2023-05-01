import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOnboardingDisabled: false,
    isLoggedIn: false,
    user: {},
    accessToken: "",
  };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
     authReducer : (state = initialState, action) => {
        const { status, type, isLoggedIn, user, accessToken } = action;
      
        switch (type) {
          case UPDATE_ONBOARDING_STATUS:
            state = { ...state, isOnboardingDisabled: status };
      
          case UPDATE_USER_LOGIN:
            state = { ...state, user, isLoggedIn };
      
          case UPDATE_USER_ACCESS_TOKEN:
            state = { ...state, accessToken };
      
          default:
             state;
        }
      }
      
  },
})

// Action creators are generated for each case reducer function
export const {authReducer} = authSlice.actions

import {
    UPDATE_ONBOARDING_STATUS,
    UPDATE_USER_LOGIN,
    UPDATE_USER_ACCESS_TOKEN,
  } from "../slices/constants";
  
  export const updateOnboarding = (status) => {
    return {
      type: UPDATE_ONBOARDING_STATUS,
      status,
    };
  };
  
  export const updateUserLogin = (user, isLoggedIn) => {
    return {
      type: UPDATE_USER_LOGIN,
      user,
      isLoggedIn,
    };
  };
  
  export const updateUserAccessToken = (accessToken) => {
    return {
      type: UPDATE_USER_ACCESS_TOKEN,
      accessToken,
    };
  };
  
  export const getUsers = (state) => state.auth.user;



export default authSlice.reducer