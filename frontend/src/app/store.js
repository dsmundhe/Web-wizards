import { configureStore } from "@reduxjs/toolkit";
import userReduce from "../features/user/userSlice"

const store = configureStore({
    reducer:userReduce
})
export default store