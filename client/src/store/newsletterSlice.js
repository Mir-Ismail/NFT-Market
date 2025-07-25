import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for newsletter subscription
export const subscribeNewsletter = createAsyncThunk(
  'newsletter/subscribe',
  async (email, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || 'Failed to subscribe');
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

const newsletterSlice = createSlice({
  name: 'newsletter',
  initialState: {
    email: '',
    isSubmitting: false,
    success: false,
    error: null,
  },
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    resetNewsletter: (state) => {
      state.email = '';
      state.success = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscribeNewsletter.pending, (state) => {
        state.isSubmitting = true;
        state.error = null;
      })
      .addCase(subscribeNewsletter.fulfilled, (state) => {
        state.isSubmitting = false;
        state.success = true;
        state.email = '';
      })
      .addCase(subscribeNewsletter.rejected, (state, action) => {
        state.isSubmitting = false;
        state.error = action.payload || 'Failed to subscribe';
      });
  },
});

export const { updateEmail, resetNewsletter, clearError, clearSuccess } = newsletterSlice.actions;
export default newsletterSlice.reducer;
