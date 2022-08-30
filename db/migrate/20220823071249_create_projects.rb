class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.integer :projectid
      t.string :name
      t.string :projecttype
      t.string :projectmanager
      t.date :startdate
      t.date :enddate
      t.string :projectclosurestatus
      t.integer :clientid 

      t.timestamps
    end
  end
end
