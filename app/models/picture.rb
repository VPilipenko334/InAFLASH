class Picture < ApplicationRecord

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :likes, 
        foreign_key: :picture_id,
        class_name: :Like

    has_one :picture 

end
