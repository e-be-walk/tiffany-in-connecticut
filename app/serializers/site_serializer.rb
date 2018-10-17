class SiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :description, :lat, :lng
end
