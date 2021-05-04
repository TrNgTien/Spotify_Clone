import { configureStore } from "@reduxjs/toolkit";
import FormModal  from "./slices/FormModal";


export default configureStore({
  reducer: {
    modal: FormModal,
  },
});
