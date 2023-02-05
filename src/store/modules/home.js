import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getArticlesData, getImageData } from '../../services'

export const fetchMainData = createAsyncThunk('fetchmaindata', (payload, { dispatch }) => {
    getArticlesData().then(res => dispatch(changeArticlesData(res)))

    // dispatch(changeArticlesData(res))
    getImageData().then(res => dispatch(changeImagesData(res)))


})
const homeSlice = createSlice({
    name: 'home',
    initialState: {
        articlesData: {},
        imagesData: {},

    },
    reducers: {
        changeArticlesData(state, { payload }) {
            state.articlesData = payload

        },
        changeImagesData(state, { payload }) {
            state.imagesData = payload
        }
    }
})
export const { changeArticlesData, changeImagesData } = homeSlice.actions

export default homeSlice.reducer