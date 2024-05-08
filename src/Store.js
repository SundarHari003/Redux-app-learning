import { configureStore } from '@reduxjs/toolkit';
import reducerAction from './Reducer'; // Adjusted import to match the slice name

const store = configureStore({
  reducer: {
    reducerAction: reducerAction, // Changed key name to match the slice name
  },
});

export default store; // Exporting the store as default
