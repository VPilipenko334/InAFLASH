# @pictures.each do |picture|
#     json.set! picture.id do
#         json.extract! picture, :id, :title, :description, :userId
#         # json.pictureUrl url_for(picture.photo)
#     end
# end

json.array! @pictures do |picture|
  json.extract! picture, :id, :title, :private, :description, :user_id
  json.picture url_for(picture.picture)
end
