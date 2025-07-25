import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../store/contactSlice';
import newsletterReducer from '../store/newsletterSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    newsletter: newsletterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

// TypeScript types moved to TypeScript file
