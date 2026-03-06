import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit'

type DashboardState = {
    count:number,
     loading: boolean
    error: string | null
}

export const fetchCount = createAsyncThunk('dashboard/fetchCount',async ()=>{
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return 5;
})

const initialState: DashboardState = {
    count:0,
    loading:false,
    error:null
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

    },
    extraReducers: (builder) => {
  builder
    .addCase(fetchCount.pending, (state) => {
      state.loading = true
      state.error = null
    })
    .addCase(fetchCount.fulfilled, (state, action) => {
      state.loading = false
      state.count = action.payload
    })
    .addCase(fetchCount.rejected, (state) => {
      state.loading = false
      state.error = 'Failed to fetch count'
    })
}
})

export const {increment, decrement, incrementByAmount} = dashboardSlice.actions;
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;