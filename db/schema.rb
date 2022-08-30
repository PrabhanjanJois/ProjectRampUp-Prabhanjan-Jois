# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_23_073729) do
  create_table "clients", force: :cascade do |t|
    t.integer "clientid"
    t.string "clientname"
    t.text "description"
    t.string "clientemail"
    t.string "clientphone"
    t.string "clientprimarycontactname"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jwt_denylist", force: :cascade do |t|
    t.string "jti", null: false
    t.datetime "exp", null: false
    t.index ["jti"], name: "index_jwt_denylist_on_jti"
  end

  create_table "master_types", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "status"
    t.string "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "project_statuses", force: :cascade do |t|
    t.integer "projectid"
    t.date "month"
    t.string "projectmonthlystatus"
    t.string "utilization"
    t.string "revenuelost"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.integer "projectid"
    t.string "name"
    t.string "projecttype"
    t.string "projectmanager"
    t.date "startdate"
    t.date "enddate"
    t.string "projectclosurestatus"
    t.integer "clientid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_login_audits", force: :cascade do |t|
    t.string "loginerror"
    t.string "loginstatus"
    t.integer "userid"
    t.date "logindatetime"
    t.date "logoutdatetime"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_profiles", force: :cascade do |t|
    t.integer "userid"
    t.string "firstname"
    t.string "lastname"
    t.string "email"
    t.string "phone"
    t.string "status"
    t.date "joiningdate"
    t.string "employeetype"
    t.string "salary"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_projects", force: :cascade do |t|
    t.integer "userid"
    t.integer "projectid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_skills", force: :cascade do |t|
    t.integer "userid"
    t.integer "skillid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_utilizations", force: :cascade do |t|
    t.integer "userid"
    t.integer "projectid"
    t.date "month"
    t.date "year"
    t.string "utilization"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
