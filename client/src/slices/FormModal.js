import { createSlice } from "@reduxjs/toolkit";
export const FormModal = createSlice({
  name: "modal",
  initialState: {
    modal: "",
  },
  reducers: {
    setOpenModal: (state, action) => {
      const { payload } = action;
      return { ...state, modal: payload };
    },
    setCloseModal: (state, action) => {
      const { payload } = action;
      return { ...state, modal: payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOpenModal, setCloseModal } = FormModal.actions;
export default FormModal.reducer;
