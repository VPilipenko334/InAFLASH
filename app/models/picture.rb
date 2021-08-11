class Picture < ApplicationRecord

    validates :title, :description, :user_id, presence: true
    validates :title, uniqueness: {scope: :user_id}
    # validate :ensure_post
    has_one_attached :picture


    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    # has_many :likes, 
    #     foreign_key: :picture_id,
    #     class_name: :Like

    # def ensure_post
    #     unless self.post.attached?
    #         errors[:post] << "Must be attached"
    #     end
    # end
end
