class User < ApplicationRecord

    validates :username, presence: true, uniqueness: true 
    validates :password_digest, presence: true 
    validates :password, length: {minimum: 6, allow_nil: true}
    after_initialize :ensure_session_token

    attr_reader :password

    has_many :pictures, 
        foreign_key: :user_id,
        class_name: :Picture
    
    has_many :likes, 
        foreign_key: :liker_id,
        class_name: :Like 

    has_many :comments, 
        foreign_key: :commenter_id,
        class_name: :Comment 

    has_many :Follows, 
        foreign_key: :follower_id,
        class_name: :Follow

    has_many :Followers, 
        foreign_key: :followed_id,
        class_name: :Follow

    #SPIRE 

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)

        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end