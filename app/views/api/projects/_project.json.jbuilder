json.extract! project, :id, :title, :user_id, :head_photo_url, :description, :end_date, :goal
json.set! :rewards, rewards
json.set! :funding, project.funding
