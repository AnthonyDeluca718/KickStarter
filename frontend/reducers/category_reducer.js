const CategoryReducer = (state = [], action) => {
  switch(action.type){
    case "RECEIVE_CATEGORY":
      return action.search;
    default:
      return state;
  }
};

export default CategoryReducer;
