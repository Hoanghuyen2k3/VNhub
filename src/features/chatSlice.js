import { createSlice } from '@reduxjs/toolkit';

const initialState = false;



export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    showChat: (state)=>{
        return !state
    },
  },
  
  
});

export const {showChat } = chatSlice.actions;


export const selectShow = (state) => state.chat;



export default chatSlice.reducer;
