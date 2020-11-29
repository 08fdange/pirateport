class RemoveImgAttrsFromItems < ActiveRecord::Migration[6.0]
  def change
    remove_column :items, :img_url
    remove_column :items, :img_url2
    remove_column :items, :img_url3
    remove_column :items, :img_url4
    remove_column :items, :img_url5
  end
end