class CreateProjectStatuses < ActiveRecord::Migration[7.0]
  def change
    create_table :project_statuses do |t|
      t.integer :projectid
      t.date :month
      t.string :projectmonthlystatus
      t.string :utilization
      t.string :revenuelost

      t.timestamps
    end
  end
end
