import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import userReducer from "./slice/userSlice";
import contactReducer from "./slice/contactSlice";
import newsReducer from "./slice/newSlice";
import categoryReducer from "./slice/categorySlice";
import cityAndCountryReducer from "./slice/cityAndCountrySlice";
import departureDayReducer from "./slice/departureDaySlice";
import promotionReducer from "./slice/promotionSlice";
import serviceReducer from "./slice/serviceSlice";
import tourReducer from "./slice/tourSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    contact: contactReducer,
    news: newsReducer,
    categories: categoryReducer,
    cityAndCountries: cityAndCountryReducer,
    departureDays: departureDayReducer,
    promotions: promotionReducer,
    services: serviceReducer,
    tours: tourReducer,
  },
});
