import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  images: [],
  favorites: [],
  status: 'idle',
  error: null,
  authorFilter: '', // Novo estado para o filtro de autor
};

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const response = await axios.get('https://picsum.photos/v2/list');
  return response.data;
});

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const image = action.payload;
      if (!state.favorites.some(fav => fav.id === image.id)) {
        state.favorites.push(image);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(fav => fav.id !== action.payload.id);
    },
    setAuthorFilter: (state, action) => {
      state.authorFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addFavorite, removeFavorite, setAuthorFilter } = imageSlice.actions;

export default imageSlice.reducer;
