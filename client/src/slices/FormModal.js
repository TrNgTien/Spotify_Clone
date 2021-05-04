import { createSlice } from "@reduxjs/toolkit";
export const FormModal = createSlice({
  name: "modal",
  initialState: {},
  reducers: {
    setOpenModal: (state, action) => {
      return action.payload;
    },
    setCloseModal: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOpenModal, setCloseModal } = FormModal.actions;
export default FormModal.reducer;
