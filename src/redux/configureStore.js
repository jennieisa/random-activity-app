//import activitySlice from "../components/activity/activitySlice";
import activityFormSlice from "../components/activityForm/activityFormSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        activity: activityFormSlice,
    }
})

export default store;