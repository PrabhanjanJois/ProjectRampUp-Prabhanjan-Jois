class CreateUserProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_profiles do |t|
      t.integer :userid
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :phone
      t.string :status
      t.date :joiningdate
      t.string :employeetype
      t.string :salary
       

      t.timestamps
    end
  end
end
