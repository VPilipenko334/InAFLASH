class Picture < ApplicationRecord

    validates :title, :description, :user_id, presence: true
    validates :title, uniqueness: {scope: :user_id}
    has_one_attached :picture
    belongs_to :user 

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    # has_many :comments,
    #     foreign_key: :picture_id,
    #     class_name: :Picture 

    # has_many :likes, 
    #     foreign_key: :picture_id,
    #     class_name: :Like

end
