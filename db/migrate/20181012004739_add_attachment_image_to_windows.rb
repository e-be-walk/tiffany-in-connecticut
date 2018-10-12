class AddAttachmentImageToWindows < ActiveRecord::Migration[5.2]
  def change
    add_column :windows, :image, :attachment
  end
end
