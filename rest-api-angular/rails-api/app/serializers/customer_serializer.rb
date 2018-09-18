class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :status
end
