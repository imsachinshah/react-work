import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

// store 

// reducer 

// useSelector()        useDispatch()
const store = configureStore({
    reducer: todoReducer
})

export default store 