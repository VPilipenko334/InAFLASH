json.extract! @picture, :id, :title, :private, :description, :user_id
json.pictureUrl url_for(@picture.picture)
# json.likes @picture.likes