class Like < ApplicationRecord

    validates :liker_id, :picture_id, presence: true

    # belongs_to :picture

    # belongs_to :liker, 
    #     foreign_key: :liker_id,
    #     class_name: :User

end
