// @ts-nocheck
import { configureStore } from '@reduxjs/toolkit'
import entireSlice from './modules/entire'
import homeSlice from './modules/home'
const store = configureStore({
    reducer:{
        home:homeSlice,
        entire:entireSlice

    }
})

export default store
