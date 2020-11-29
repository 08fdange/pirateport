class PictureSerializer

    def initialize(picture: nil, item:)
        @picture = picture
        @item = item
    end

    def serialize_new_picture()
        serialized_new_picture = serialize_picture(@picture, @item)
        serialized_new_picture.to_json()
    end

    private
 
    def serialize_picture(picture, item)
        {
            item: {
                item_id: item.id,
                picture_url: item.get_picture_url(),
                created_at: picture.created_at
            }
        }
    end
end