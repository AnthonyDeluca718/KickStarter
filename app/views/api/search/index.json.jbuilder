json.array! @search do |proj|

    json.extract! proj, :id, :title, :user_id, :description, :end_date, :goal
    json.set! :head_photo_url, proj.head_picture.url

end
