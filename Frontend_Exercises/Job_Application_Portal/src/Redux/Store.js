import {configureStore} from '@reduxjs/toolkit';
import applicationReducer from './State/ApplicationSlice';

export default configureStore({
    reducer: {
        application: applicationReducer,
    }
});