class AddAttachmentImageToSites < ActiveRecord::Migration[5.2]
  def change
    add_column :sites, :image, :attachment
  end
end
