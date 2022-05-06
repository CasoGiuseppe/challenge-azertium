export const GET_LOADING_STATE = "getLoadingState";
export const GET_BUTTON_LOAD_STATE = "getButtonLoadState";

export default {
  [GET_LOADING_STATE]: (state: any): boolean => state.isLoading,
  [GET_BUTTON_LOAD_STATE]: (state: any): boolean => state.allowLoadMore,
};