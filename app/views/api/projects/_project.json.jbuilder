json.extract! project, :id, :title, :user_id, :head_photo_url, :description, :end_date, :goal
json.totalFunding project.total_funding
json.rewards project.rewards
