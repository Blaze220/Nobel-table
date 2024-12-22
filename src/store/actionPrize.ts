import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../models/http";

export const fetchGetNobelPrizes = createAsyncThunk(
  "prize/fetchGetProducts",
  async (payload: number, { rejectWithValue }) => {
    try {
      let response = await fetch(`${API_URL}/nobelPrizes?limit=${payload}&sort=desc`)
        if(!response.ok){
            if(response.status == 400){
                throw new Error("Bad request.The request could not be understood by the server due to malformed syntax, modifications needed.")
            }else if(response.status == 404){
                throw new Error("Not Found. The requested resource could not be found but may be available again in the future.")
            }else if(response.status == 422){
                throw new Error("Unprocessable Entity. The request was well-formed but was unable to be followed due to semantic errors")
            }else{
                throw new Error("Bad request")
            }
        }
        response = await response.json()
        console.log(response)
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
