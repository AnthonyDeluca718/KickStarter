export const getSearch = function(success, search){
  $.ajax({
    method: "GET",
    url: "api/search",
    success,
    data: {data: search},
    error: () => console.log('Search error')
  });
};

export const getCategory = function(success, category){
  $.ajax({
    method: "GET",
    url: `api/search/${category}`,
    success,
    error: () => console.log('Search error')
  });
};
