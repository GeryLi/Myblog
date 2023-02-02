// @ts-nocheck
import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './modules/home'
const store = configureStore({
    reducer: {
        home: homeSlice,

    }
})

export default store
