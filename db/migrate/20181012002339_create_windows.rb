class CreateWindows < ActiveRecord::Migration[5.2]
  def change
    create_table :windows do |t|
      t.integer :site_id
      t.string :name
      t.string :date
      t.text :dedication
      t.text :description

      t.timestamps
    end
  end
end
