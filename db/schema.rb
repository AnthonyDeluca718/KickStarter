# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161010031317) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "projects", force: :cascade do |t|
    t.string  "title",                       null: false
    t.integer "user_id",                     null: false
    t.integer "category_id"
    t.integer "target"
    t.text    "description",    default: ""
    t.date    "end_date"
    t.text    "head_photo_url",              null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name",                         null: false
    t.string   "password_digest",              null: false
    t.string   "session_token",                null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "photo_url",       default: ""
    t.text     "bio",             default: ""
  end

  add_index "users", ["name"], name: "index_users_on_name", unique: true, using: :btree

end
