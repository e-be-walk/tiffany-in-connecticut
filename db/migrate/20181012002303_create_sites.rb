class CreateSites < ActiveRecord::Migration[5.2]
  def change
    create_table :sites do |t|
      t.integer :user_id
      t.string :name
      t.string :address
      t.string :city
      t.text :description
      t.decimal :lat, precision:10, scale:6
      t.decimal :lng, precision:10, scale:6

      t.timestamps
    end
  end
end
