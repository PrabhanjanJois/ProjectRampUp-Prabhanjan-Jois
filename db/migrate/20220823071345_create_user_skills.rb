class CreateUserSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :user_skills do |t|
      t.integer :userid
      t.integer :skillid

      t.timestamps
    end
  end
end
