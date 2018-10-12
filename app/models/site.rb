class Site < ApplicationRecord
  belongs_to :user
  has_many :windows, dependent: :destroy

  has_attached_file :image, styles: { large: "600x600>", medium: "300x300>", thumb: "100x100>"}, default_url: "./assets/images/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  validates :name, presence: true
end
