class Window < ApplicationRecord
  belongs_to :site, inverse_of: :windows

  has_attached_file :image, styles: { large: "600x600>", medium: "300x300>", thumb: "100x100>"}, default_url: "./assets/images/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

end
