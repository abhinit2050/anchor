import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../features/dashboard/dashboardSlice";
import notificationsReducer from "../features/notfications/notificationsSlice";

export const store = configureStore({
    reducer:{
        dashboard: dashboardReducer,
        notifications:notificationsReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch