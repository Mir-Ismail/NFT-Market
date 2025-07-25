import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for submitting contact form
export const submitContactForm = createAsyncThunk(
  'contact/submit',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || 'Failed to submit form');
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    formData: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
    isSubmitting: false,
    success: false,
    error: null,
  },
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetForm: (state) => {
      state.formData = {
        name: '',
        email: '',
        company: '',
        message: '',
      };
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
      .addCase(submitContactForm.pending, (state) => {
        state.isSubmitting = true;
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.isSubmitting = false;
        state.success = true;
        state.formData = {
          name: '',
          email: '',
          company: '',
          message: '',
        };
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.isSubmitting = false;
        state.error = action.payload || 'Failed to submit form';
      });
  },
});

export const { updateFormData, resetForm, clearError, clearSuccess } = contactSlice.actions;
export default contactSlice.reducer;
