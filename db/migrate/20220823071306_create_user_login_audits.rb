class CreateUserLoginAudits < ActiveRecord::Migration[7.0]
  def change
    create_table :user_login_audits do |t|
      t.string :loginerror
      t.string :loginstatus
      t.integer :userid
      t.date :logindatetime
      t.date :logoutdatetime
      t.timestamps
    end
  end
end
