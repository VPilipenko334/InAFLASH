json.extract! picture, :id, :title, :description, :user_id, :pictureUrl
json.pictureUrl url_for(picture.picture)
