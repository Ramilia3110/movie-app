import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { IFilmsData, INullable } from "../types";
import { filmsAPIs } from "../../axios";
import { log } from "console";

type HomeState = {
  loading: boolean;
  error: INullable<string>;
  films: IFilmsData[];
};
const initialState: HomeState = {
  error: null,
  loading: false,
  films: [],
};

export const fetchBySearchedFilm = createAsyncThunk<
  IFilmsData[],
  string,
  { rejectValue: string }
>("home/fetchBySearchedFilm", async (search, { rejectWithValue }) => {
  try {
    const res = await filmsAPIs.getSearchedFilm(search);
    if (res.status !== 200) {
      throw new Error("Server Error");
    }
    console.log(res.data.films);
    return res.data.films as IFilmsData[];
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const fetchByAllFilms = createAsyncThunk<
  IFilmsData[],
  void,
  { rejectValue: string }
>("home/fetchByAllFilms", async (_, { rejectWithValue }) => {
  try {
    const res = await filmsAPIs.getAllFilms();
    if (res.status !== 200) {
      throw new Error("Server Error");
    }

    return res.data.items as IFilmsData[];
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(fetchByAllFilms.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    addCase(fetchByAllFilms.fulfilled, (state, action) => {
      state.films = action.payload;
      state.loading = false;
    });
    addCase(fetchByAllFilms.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      }
      state.loading = false;
    });
    //============================================================
    addCase(fetchBySearchedFilm.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    addCase(fetchBySearchedFilm.fulfilled, (state, action) => {
      state.films = action.payload;
      state.loading = false;
    });
    addCase(fetchBySearchedFilm.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      }
      state.loading = false;
    });
    //============================================================
  },
});

export default homeSlice.reducer;
