class ItemsController < ApplicationController
  before_action :authenticate_request, only: [:create, :update, :destroy]
  before_action :set_item, only: [:show, :update, :destroy]

  # GET /items
  def index
    @items = Item.all
        
    items_json = ItemSerializer.new(@items).serialized_json
    render json: items_json, status: :ok
    
  end

  # GET users/:username/items/:id
  def show
    render json: ItemSerializer.new(@item).serialized_json, status: :ok
  end

  # POST /items
  def create
    @item = Item.new(item_params)
    @item.user_id = User.find_by(username: params[:username]).id

    if @item.save
      render json: ItemSerializer.new(@item), status: :created
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT users/:username/items/:id
  def update
    if @item.update(item_params)
      render json: ItemSerializer.new(@item), status: :ok
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # DELETE users/:username/items/:id
  def destroy
    @item.destroy
  end

  def upload_picture
    @item = Item.find_by(id: picture_params[:id])
    @item.picture.attach(picture_params[:picture])
    if @item.picture.attached?
        picture_serializer = PictureSerializer.new(picture: @item.picture, item: @item)
        render json: picture_serializer.serialize_new_picture()
    else
        render json: {errors: "No Picture Attached"}, status: 400
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def item_params
      # params.require(:item).permit(:title, :description, :state, :city, :location, :category, :user_id, :price)
      params.permit(:title, :description, :state, :city, :location, :category, :user_id, :price, :id)
    end

    def picture_params
      params.permit(:picture, :id, :username)
    end 
end
