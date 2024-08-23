import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [{
        name: "Dipak Mundhe"
    }]
}

const userSlice = createSlice({
    name: "educationSystem",
    initialState,
    reducers: {
        getData: (state, action) => {

        }
    }
})
export default userSlice.reducer;
const {getData}=userSlice.actions;