import promotionApi from "../../api/promotionApi";
import {
  createFailed,
  createStart,
  createSuccess,
  deleteFailed,
  deleteStart,
  deleteSuccess,
  getAllPromotionsFailed,
  getAllPromotionsStart,
  getAllPromotionsSuccess,
  updateFailed,
  updateStart,
  updateSuccess,
} from "../slice/promotionSlice";

export const getAllPromotions = async (dispatch) => {
  dispatch(getAllPromotionsStart());
  try {
    const res = await promotionApi.getAllPromotions();
    dispatch(getAllPromotionsSuccess(res.data.data));
  } catch (error) {
    dispatch(getAllPromotionsFailed());
  }
};

export const createPromotion = async (dispatch, toast, data, accessToken) => {
  dispatch(createStart());
  try {
    const res = await promotionApi.createNewPromotion(data, accessToken);
    const reGetPromotions = await promotionApi.getAllPromotions();
    dispatch(getAllPromotionsSuccess(reGetPromotions.data.data));
    toast.success("Tạo thành công");
    dispatch(createSuccess());
  } catch (error) {
    toast.error("Tạo thất bại");
    dispatch(createFailed);
  }
};
export const updatePromotion = async (
  dispatch,
  toast,
  data,
  promotionId,
  accessToken
) => {
  dispatch(updateStart());
  try {
    const res = await promotionApi.updatePromotion(
      data,
      promotionId,
      accessToken
    );
    const reGetPromotions = await promotionApi.getAllPromotions();
    dispatch(getAllPromotionsSuccess(reGetPromotions.data.data));
    toast.success("Cập nhật thành công");
    dispatch(updateSuccess());
  } catch (error) {
    toast.error("Cập nhật thất bại");
    dispatch(updateFailed());
  }
};

export const deletePromotion = async (
  dispatch,
  toast,
  promotionId,
  accessToken
) => {
  dispatch(deleteStart());
  try {
    const res = await promotionApi.deletePromotion(promotionId, accessToken);
    const reGetPromotions = await promotionApi.getAllPromotions();
    dispatch(getAllPromotionsSuccess(reGetPromotions.data.data));
    toast.success("Xóa thành công");
    dispatch(deleteSuccess());
  } catch (error) {
    console.log(error);
    toast.error("Xóa thất bại");
    dispatch(deleteFailed());
  }
};
