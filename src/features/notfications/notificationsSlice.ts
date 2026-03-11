import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Notification = {
  id: number;
  message: string;

}

type NotificationState = {
    items: Notification[],
    loading: boolean,
    error: string | null
}


const initialState: NotificationState ={
    items:[],
    loading:false,
    error:null
}

const fetchNotifications = createAsyncThunk('notifications/fetchNotifications',async ()=>{

    await new Promise((resolve) => setTimeout(()=>resolve(null),2000))

    return [
        {id:1, message:"New Message received"},
        {id:2, message:"Your report is ready"},
        {id:3, message:"System maintenance tonight" }
    ]
})

const notificationsSlice = createSlice({
    name:"notifications",
    initialState:initialState,
    reducers:{
        addNotification(state, action:PayloadAction<Notification>){
            state.items.push(action.payload);
        },

        clearNotifications(state){
            state.items=[]
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchNotifications.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchNotifications.fulfilled, (state, action)=>{
            state.loading=false;
            state.items=action.payload;
        })
        .addCase(fetchNotifications.rejected,(state)=>{
            state.loading=false;
            state.error='Failed to fetch notifications';
        })
    }
})



const notificationsReducer = notificationsSlice.reducer;
export default notificationsReducer;

export const {addNotification, clearNotifications} = notificationsSlice.actions;

export  {fetchNotifications};