import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type DashboardState = {
    count:number;
}

const initialState: DashboardState = {
    count:0
}

const dashboardSlice = createSlice({
    name:"dashboard",
    initialState,
    reducers:{
        increment(state){
            state.count += 1;
        },
        decrement(state){
            state.count -= 1;
        },
        incrementByAmount(state, action: PayloadAction<number>){
            state.count += action.payload;
        }

    }
})

export const {increment, decrement, incrementByAmount} = dashboardSlice.actions;
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;