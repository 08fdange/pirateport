class UserSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :username, :email, :id, :phone_number

    attribute :avatar do |user|
        {
            image_url: user.get_avatar_url()
        }
    end
end