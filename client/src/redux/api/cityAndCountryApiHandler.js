import cityAndCountryApi from "../../api/cityAndCountryApi";
import {
  createFailed,
  createStart,
  createSuccess,
  deleteFailed,
  deleteStart,
  deleteSuccess,
  getAllCitesFailed,
  getAllCitesStart,
  getAllCitesSuccess,
  getAllCountriesFailed,
  getAllCountriesStart,
  getAllCountriesSuccess,
  updateFailed,
  updateStart,
  updateSuccess,
} from "../slice/cityAndCountrySlice";

export const getAllCites = async (dispatch) => {
  dispatch(getAllCitesStart());
  try {
    const res = await cityAndCountryApi.getCityAndCountry();
    dispatch(getAllCitesSuccess(res.data.data));
  } catch (error) {
    dispatch(getAllCitesFailed());
  }
};

export const getAllCountries = async (dispatch) => {
  dispatch(getAllCountriesStart());
  try {
    const res = await cityAndCountryApi.getCountryAndCity();
    dispatch(getAllCountriesSuccess(res.data.data));
  } catch (error) {
    dispatch(getAllCountriesFailed());
  }
};

export const createCity = async (dispatch, toast, data, accessToken) => {
  dispatch(createStart());
  try {
    const res = await cityAndCountryApi.createCity(data, accessToken);
    const resGetCities = await cityAndCountryApi.getCityAndCountry();
    dispatch(getAllCitesSuccess(resGetCities.data.data));
    toast.success("Tạo thành công");
    dispatch(createSuccess());
  } catch (error) {
    toast.error("Tạo thất bại");
    dispatch(createFailed());
  }
};

export const createCountry = async (dispatch, toast, data, accessToken) => {
  dispatch(createStart());
  try {
    const res = await cityAndCountryApi.createCountry(data, accessToken);
    const resGetCountries = await cityAndCountryApi.getCountryAndCity();
    dispatch(getAllCountriesSuccess(resGetCountries.data.data));
    toast.success("Tạo thành công");
    dispatch(createSuccess());
  } catch (error) {
    toast.error("Tạo thất bại");
    dispatch(createFailed());
  }
};

export const updateCity = async (
  dispatch,
  toast,
  data,
  cityId,
  accessToken
) => {
  dispatch(updateStart());
  try {
    const res = await cityAndCountryApi.updateCity(data, cityId, accessToken);
    const resGetCities = await cityAndCountryApi.getCityAndCountry();
    dispatch(getAllCitesSuccess(resGetCities.data.data));
    toast.success("Cập nhật thành công");
    dispatch(updateSuccess());
  } catch (error) {
    toast.error("Cập nhật thất bại");
    dispatch(updateFailed());
  }
};

export const updateCountry = async (
  dispatch,
  toast,
  data,
  countryId,
  accessToken
) => {
  dispatch(updateStart());
  try {
    const res = await cityAndCountryApi.updateCoutry(
      data,
      countryId,
      accessToken
    );
    const resGetCountries = await cityAndCountryApi.getCountryAndCity();
    dispatch(getAllCountriesSuccess(resGetCountries.data.data));
    toast.success("Cập nhật thành công");
    dispatch(createSuccess());
  } catch (error) {
    toast.error("Cập nhật thất bại");
  }
};

export const deleteCity = async (dispatch, toast, cityId, accessToken) => {
  dispatch(deleteStart());
  try {
    const res = await cityAndCountryApi.deleteCity(cityId, accessToken);
    const resGetCities = await cityAndCountryApi.getCityAndCountry();
    dispatch(getAllCitesSuccess(resGetCities.data.data));
    toast.success("Xóa thành công");
    dispatch(deleteSuccess());
  } catch (error) {
    toast.error("Xóa thất bại");
    dispatch(deleteFailed());
  }
};

export const deleteCountry = async (
  dispatch,
  toast,
  countryId,
  accessToken
) => {
  dispatch(deleteStart());
  try {
    const res = await cityAndCountryApi.deleteCountry(countryId, accessToken);
    const resGetCountries = await cityAndCountryApi.getCountryAndCity();
    dispatch(getAllCountriesSuccess(resGetCountries.data.data));
    toast.success("Xóa thành công");
    dispatch(deleteSuccess());
  } catch (error) {
    toast.error("Xóa thất bại");
    dispatch(deleteFailed());
  }
};
