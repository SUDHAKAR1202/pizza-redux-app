import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    form: {
        name: "",
        email: "",
        phone: "",
        password:"",
        confirmPassword:"",
        gender:"",
        terms: false,
    },
    errors: [],
    isSubmitting: false,
    success: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateField: (state, action) => {
         const {field, value } = action.payload;
         state.form[field] = value;
        },

        setErrors: (state, action) => {
            state.errors = action.payload;
        },

        submitStart: (state) => {
           state.isSubmitting = true;
        },

        submitSuccess: (state) => {
            state.isSubmitting = false;
            state.success = true;

        },
        resetForm: () => initialState,
    },
});

export const { updateField, setErrors, submitStart, submitSuccess, resetForm } = userSlice.actions;
export default userSlice.reducer;