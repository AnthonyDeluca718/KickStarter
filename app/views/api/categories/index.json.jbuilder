json.array! @categories do |cat|

  json.partial! "api/categories/category", category: cat

end
