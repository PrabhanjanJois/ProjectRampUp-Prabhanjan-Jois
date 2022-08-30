class CreateUserUtilizations < ActiveRecord::Migration[7.0]
  def change
    create_table :user_utilizations do |t|
      t.integer :userid
      t.integer :projectid
      t.date :month
      t.date :year
      t.string :utilization

      t.timestamps
    end
  end
end
