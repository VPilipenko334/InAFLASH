json.array! @pictures do |picture|
  json.extract! picture, :id, :title, :description, :user_id
  json.picture url_for(picture.picture)
end