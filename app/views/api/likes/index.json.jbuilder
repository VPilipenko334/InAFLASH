@likes.each do |like|
    json.set! like.id do
        json.extract! like, :id, :picture_id, :liker_id
    end
end