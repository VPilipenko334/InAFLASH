json.extract! picture, :id, :title, :description, :user_id, :created_at, :updated_at
json.pictureUrl url_for(picture.picture)
