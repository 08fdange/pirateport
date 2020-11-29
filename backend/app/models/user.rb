class User < ApplicationRecord
    include Rails.application.routes.url_helpers

    has_secure_password
    has_many :items
    has_one_attached :avatar 
    # default_url: "./assets/images/no-profile-photo.png"

    # mount_uploader :avatar, AvatarUploader
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :username, presence: true, uniqueness: true
    validates :password,
              length: { minimum: 6 },
              if: -> { new_record? || !password.nil? }

    def get_avatar_url
        if self.avatar.attached?
            url_for(self.avatar)
        end
    end
end
