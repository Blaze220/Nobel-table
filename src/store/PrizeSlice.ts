import {
  ActionReducerMapBuilder,
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";

import { fetchGetNobelPrizes } from "./actionPrize";
import {
  NobelPrize,

} from "../models/response/NobelPrizeResponse";

interface IPrizeSlice {
  load: boolean;
  error: string;
  prizes: NobelPrize[];
  count: number;
  dispalay : string
}

const initialState: IPrizeSlice = {
  load: false,
  error: "",
  prizes: [],
  count: 0,
  dispalay : "block"
};

const prizeSlice = createSlice({
  name: "prize",
  initialState,
  reducers: {
    editDispalay(state, { payload }: PayloadAction<string>) {
      state.dispalay = payload;
    },
    
  },
  extraReducers(builder: ActionReducerMapBuilder<IPrizeSlice>) {
    builder
      .addCase(
        fetchGetNobelPrizes.fulfilled,
        (state: IPrizeSlice, { payload }: PayloadAction<any>) => {
          state.prizes = payload.nobelPrizes;
          state.load = false;
          state.error = "";
          state.count = payload.meta.count;
          console.log(payload.nobelPrizes);
        }
      )
      .addCase(
        fetchGetNobelPrizes.rejected,
        (state: IPrizeSlice, action: PayloadAction<any>) => {
          state.load = false;
          console.log(action.payload)
          state.error = action.payload;
        }
      )
      .addCase(fetchGetNobelPrizes.pending, (state: IPrizeSlice) => {
        state.load = true;
      });
  },
});
export const { editDispalay} = prizeSlice.actions;
export default prizeSlice.reducer;
