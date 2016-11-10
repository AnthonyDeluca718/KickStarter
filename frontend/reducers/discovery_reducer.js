const CategoryReducer = (state = [], action) => {
  switch(action.type){
    case "RECEIVE_CATEGORY":
      console.log(action.type);
      return category;
    default:
      return state;
  }
};

export default CategoryReducer;
