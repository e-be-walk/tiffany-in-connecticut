class Site < ApplicationRecord
  #belongs_to :user
  has_many :windows, dependent: :destroy
  accepts_nested_attributes_for :windows, allow_destroy: true

  has_attached_file :image, styles: { large: "600x600>", medium: "300x300>", thumb: "100x100>"}, default_url: "./assets/images/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  validates :name, presence: true

  def as_json(_opts = {})
    {
      id: id,
      #user_id: user_id,
      name: name,
      address: address,
      city: city,
      description: description,
      errors: errors,
      #windows: windows.map do |x|
      #  {
      #    url: x.photo.url.absolute_url,
      #    name: x.photo_file_name,
      #    id: x.id
       }
  end
end
