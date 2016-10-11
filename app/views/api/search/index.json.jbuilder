json.array! @search do |proj|

    json.extract! proj, :id, :title, :user_id, :head_photo_url, :description, :end_date, :goal

end
