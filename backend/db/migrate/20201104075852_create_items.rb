class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :img_url
      t.string :img_url2
      t.string :img_url3
      t.string :img_url4
      t.string :img_url5
      t.string :title
      t.text :description
      t.string :state
      t.string :city
      t.string :location

      t.timestamps
    end
  end
end
