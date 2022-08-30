class CreateMasterTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :master_types do |t|
      t.string :name
      t.text :description
      t.string :status
      t.string :type

      t.timestamps
    end
  end
end
