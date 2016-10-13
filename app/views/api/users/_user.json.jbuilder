json.extract! user, :id, :name, :bio
json.set! :photo_url, user.avatar.url
json.set! :spent, user.spent
