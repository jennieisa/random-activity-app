import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getActivity = createAsyncThunk("activity/getActivity", async (value) => {
    return fetch(`http://www.boredapi.com/api/activity?participants=${value}`)
        .then((response) => response.json());
});

const activitySlice = createSlice({
    name: "activity",
    initialState: {
        slumpedActivity: null,
        status: "No data",
    },
    reducers: {
        //actions
    }, 
    extraReducers: {
        [getActivity.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.slumpedActivity = action.payload;
            state.status = "Fetched data";
        }
    }
});

export default activitySlice.reducer;