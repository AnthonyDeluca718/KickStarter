export const getSearchUtil = function(success, search){
  $l.ajax({
    method: "GET",
    url: "api/search",
    success,
    data: {data: search},
    error: () => console.log('Search error')
  });
};

export const getCategoryUtil = function(success, category){
  $l.ajax({
    method: "GET",
    url: `api/search/${category}`,
    success,
    error: () => console.log('Search error')
  });
};
