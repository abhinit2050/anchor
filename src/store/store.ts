import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../features/dashboard/dashboardSlice";
import notificationsReducer from "../features/notfications/notificationsSlice";
import { api } from "../services/api";

export const store = configureStore({
    reducer:{
        dashboard: dashboardReducer,
        notifications:notificationsReducer,
        [api.reducerPath]:api.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch