import { createSlice } from "@reduxjs/toolkit";
export const FormModal = createSlice({
  name: "modal",
  initialState: {
    isOpenModal: false,
  },
  reducers: {
    setOpenModal: (state, action) => {
      const isOpen = action.payload;
      state.isOpenModal = !isOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOpenModal } = FormModal.actions;
export default FormModal.reducer;
