@pictures.each do |picture|
    json.set! picture.id do
        json.extract! picture, :id, :title, :description, :user_id
        json.pictureUrl url_for(picture.picture)
    end
end