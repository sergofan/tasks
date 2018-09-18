class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :name
      t.references :status, index: true, foreign_key: true
    end
  end
end
