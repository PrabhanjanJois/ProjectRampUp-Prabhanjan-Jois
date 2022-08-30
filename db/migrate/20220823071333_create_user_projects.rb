class CreateUserProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :user_projects do |t|
      t.integer :userid
      t.integer :projectid

      t.timestamps
    end
  end
end
