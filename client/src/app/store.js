import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../modules/auth/slices/authSlice";
import propertyReducer from "../modules/properties/slices/propertySlice";

export const store = configureStore({
  reducer: {
    properties: propertyReducer,
    auth: authReducer,
  },
});
