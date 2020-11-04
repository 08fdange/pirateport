require 'test_helper'

class ItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @item = items(:one)
  end

  test "should get index" do
    get items_url, as: :json
    assert_response :success
  end

  test "should create item" do
    assert_difference('Item.count') do
      post items_url, params: { item: { city: @item.city, description: @item.description, img_url: @item.img_url, img_url2: @item.img_url2, img_url3: @item.img_url3, img_url4: @item.img_url4, img_url5: @item.img_url5, location: @item.location, state: @item.state, title: @item.title } }, as: :json
    end

    assert_response 201
  end

  test "should show item" do
    get item_url(@item), as: :json
    assert_response :success
  end

  test "should update item" do
    patch item_url(@item), params: { item: { city: @item.city, description: @item.description, img_url: @item.img_url, img_url2: @item.img_url2, img_url3: @item.img_url3, img_url4: @item.img_url4, img_url5: @item.img_url5, location: @item.location, state: @item.state, title: @item.title } }, as: :json
    assert_response 200
  end

  test "should destroy item" do
    assert_difference('Item.count', -1) do
      delete item_url(@item), as: :json
    end

    assert_response 204
  end
end
