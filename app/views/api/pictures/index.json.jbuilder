# @pictures.each do |picture|
    json.array! @pictures do |picture|
    # json.extract! picture.id do
        json.extract! picture, :id, :title, :description, :user_id, :created_at, :updated_at
        json.picture url_for(picture.picture)
end


# json.array! @pictures do |picture|
#     json.extract! picture, :id, :title, :description, :user_id
#         json.pictureUrl url_for(picture.picture)
#     end