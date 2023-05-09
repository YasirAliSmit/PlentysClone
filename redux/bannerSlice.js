import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: []
  },
  reducers: {
    updateBanners: (state, action) => {
      state.value = action.payload;
      //state.value.push(action.payload)
    },
    // ... other reducers
  }
});


export const fetchBanners = () => async (dispatch) => {
    try {
        const response = await fetch('https://api.plentys.pk/api/v1/public/banner?mobile=1&cityId=1');
        const data = await response.json();
        dispatch(updateBanners(data.data));
    } catch (error) {
        console.error('Error fetching banners:', error);
    }
};

export const { updateBanners } = counterSlice.actions;
export default counterSlice.reducer;
