import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { client } from "./client";
// f38

const initialState = {
     status: "idle",
};

// baraye daryafte todo ha
// in fetchTodos darvaghe ye actionCreator(dispatch,getState,extra) hastesh
export const fetchTodos = createAsyncThunk(
     "todos/fetchTodos",
     async (params, thunkApi) => {
          // logic baraye daryafte todos az server
          return await client.get("todos");
     }
);
// console.log(fetchTodos);
// console.log(fetchTodos());
// console.log(fetchTodos.pending());
// console.log(fetchTodos.fulfilled());
// console.log(fetchTodos.rejected());

const todosReducer = createReducer(initialState, (builder) => {
     builder
          // fetchTodos.pending hamoon action type hast
          .addCase(fetchTodos.pending, (state, action) => {
               state.status = "pending";
          })
          .addCase(fetchTodos.fulfilled, (state, action) => {
               const todos = action.payload;
               const newEntities = {};
               todos.forEach((todo) => {
                    newEntities[todo.id] = todo;
               });
               state.entities = newEntities;
               state.status = "idle";
          })
          .addCase(fetchTodos.rejected, (state,action)=>{
               
          })
});

export default todosReducer;
