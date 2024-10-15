import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDetailedFilmsData, INullable } from "../types";
import { filmsAPIs } from "../../axios";

type DetailState = {
  loading: boolean;
  error: INullable<string>;
  film: INullable<IDetailedFilmsData>; // Add the film data to the state
};

const initialState: DetailState = {
  error: null,
  loading: false,
  film: null,
};

// Updated fetchByDetails function
export const fetchByDetails = createAsyncThunk<
  IDetailedFilmsData, // Expecting to return IDetailedFilmsData
  string, // The argument is a string (id)
  { rejectValue: string }
>("detail/fetchByDetails", async (id, { rejectWithValue }) => {
  try {
    const res = await filmsAPIs.getDetail(id);
    if (res.status !== 200) {
      throw new Error("Server Error");
    }
    // console.log(res.data);

    return res.data as IDetailedFilmsData; // Return the data on success
  } catch (error: any) {
    return rejectWithValue(error.message); // Return the error message on failure
  }
});

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchByDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchByDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.film = action.payload; // Update the state with the film data
      })
      .addCase(fetchByDetails.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export default detailSlice.reducer;
