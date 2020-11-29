class Item < ApplicationRecord
    include Rails.application.routes.url_helpers
    belongs_to :user
    has_one_attached :picture

    validates :title, :category, :state, :city, :price, presence: true

    def get_picture_url
        if self.picture.attached?
            url_for(self.picture)
        end
    end

end
