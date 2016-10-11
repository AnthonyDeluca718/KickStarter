
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const GET_SEARCH = "GET_SEARCH";
export const GET_CATEGORY = "GET_CATEGORY";

export const getSearch = (data) => ({
  type: GET_SEARCH,
  data
});

export const receiveSearch = (search) => ({
  type: RECEIVE_SEARCH,
  search
});

export const getCategory = (category) => ({
  type: GET_CATEGORY,
  category
});
