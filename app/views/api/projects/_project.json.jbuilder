json.extract! project, :id, :title, :user_id, :description, :end_date, :goal
json.set! :rewards, rewards
json.set! :funding, project.funding
json.set! :head_photo_url, project.head_image.url
