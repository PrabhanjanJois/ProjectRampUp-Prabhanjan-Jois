class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.integer :clientid
      t.string :clientname
      t.text :description
      t.string :clientemail
      t.string :clientphone
      t.string :clientprimarycontactname

      t.timestamps
    end
  end
end
