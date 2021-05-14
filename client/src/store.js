import { configureStore } from "@reduxjs/toolkit";
import FormModal from "./slices/FormModal";
import LoginForm from "./slices/LoginForm";

export default configureStore({
  reducer: {
    modal: FormModal,
    login: LoginForm,
  },
});
