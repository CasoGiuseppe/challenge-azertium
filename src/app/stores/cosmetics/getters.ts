export const GET_BUTTON_LOAD_STATE = "getButtonLoadState";

export default {
  [GET_BUTTON_LOAD_STATE]: (state: any): boolean => state.allowLoadMore,
};