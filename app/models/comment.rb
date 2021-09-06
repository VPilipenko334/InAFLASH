class Comment < ApplicationRecord

    validates :commenter_id, :picture_id, :comment, presence: true

    belongs_to :picture
       
    belongs_to :commenter,
        foreign_key: :commenter_id,
        class_name: :User

end
