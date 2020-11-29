class ItemSerializer
    include FastJsonapi::ObjectSerializer
    attributes :title, :description, :city, :state, :location, :category, :price, :user_id, :created_at, :updated_at

    attribute :picture do |item|
        {
            picture_url: item.get_picture_url()
        }
    end
end