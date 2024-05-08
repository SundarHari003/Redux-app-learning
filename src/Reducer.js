import { createSlice } from "@reduxjs/toolkit";

const reducerAction = createSlice({
  name: "TODO",
  initialState: {
    tododata: [],
    temp:{},
  },
  reducers: {
    AddList: (state, action) => {
      state.tododata = [...state.tododata, action.payload];
    },
    DeleteList: (state, action) => {
        const idToDelete = action.payload;
        state.tododata = state.tododata.filter(item => item.id !== idToDelete);
        state.temp={}
      },
    EditList:(state,action)=>{
        state.temp=action.payload;
    },
    UpdateLists:(state,action)=>{
        const updatedItem = action.payload;
        state.tododata = state.tododata.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      );
  }
}
});

export const { AddList, DeleteList, EditList, UpdateLists } = reducerAction.actions;
export default reducerAction.reducer;
