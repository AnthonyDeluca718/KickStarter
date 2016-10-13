json.extract! user, :id, :name, :photo_url, :bio
json.set! :avatar_url, asset_path(user.avatar.url)
