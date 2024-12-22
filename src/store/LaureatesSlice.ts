import {
    ActionReducerMapBuilder,
    PayloadAction,
    createSlice,
  } from "@reduxjs/toolkit";
import { fetchGetLaureates } from "./actionLaureat";
import { ILauret } from "../models/response/LaureatesResponse";

interface ILaureatesSlice {
  load: boolean;
  error: string;
  data:  ILauret[];
  count : number
}

const initialState: ILaureatesSlice = {
  load: false,
  error: "",
  data: [],
  count : 0
};

  const laureatesSlice = createSlice({
    name: "laureates",
    initialState,
    reducers:{

    },
    extraReducers(builder: ActionReducerMapBuilder<ILaureatesSlice>){
        builder.addCase(fetchGetLaureates.fulfilled,(state:ILaureatesSlice,{payload}: PayloadAction<any>)=>{
          state.data = payload.laureates
          state.load = false
          state.error = ""
          state.count = payload.meta.count
          console.log(payload)
        }).addCase(fetchGetLaureates.pending,(state:ILaureatesSlice)=>{
         state.load = true
        }).addCase(fetchGetLaureates.rejected,(state:ILaureatesSlice,{payload}: PayloadAction<any>)=>{
          state.error = payload
          state.load = false
        })
    }
  })



  export default laureatesSlice.reducer