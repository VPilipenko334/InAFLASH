json.extract! @picture, :id, :title, :description, :user_id, :private
json.pictureUrl url_for(@picture.picture)
# json.likes @picture.likes