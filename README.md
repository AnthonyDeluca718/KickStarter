# ClonedStarter

[Live site][Live-Site]

[Live-Site]: http://clonedstarter.tech

ClonedStarter is a clone of KickStarter. The backend database is written in Rails. The frontend uses React/Redux.


# Features
- [ ] Hosting on Heroku
- [ ] Search for Projects on the site
- [ ] Secure User log in and sign up
- [ ] Project Creation including rewards
- [ ] Users can back projects
- [ ] User profile page can be edited
- [ ] Frontend securely communicates with backend

# Technical features

- [ ] Routes

```JavaScript
<Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>/>
    <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>/>
    <Route path="/profile" component={UserProfileContainer} onEnter={_ensureLoggedIn}/>
    <Route path="/projects/new" component={ProjectFormContainer} onEnter={_ensureLoggedIn} />
    <Route path="/projects/:id" component={ProjectShowContainer} />
    <Route path="/search" component = {SearchContainer} />
    <Route path="/about" component = {About} />
    <Route path="/discover" component = {Discover} />
    <Route path="/discover/:id" component = {CategoryContainer} />
  </Route>
  <Route path="*" component={Error}/>
</Router>
```

- [ ] DB Schema
```Ruby
ActiveRecord::Schema.define(version: 20161013211206) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name",        null: false
    t.string "picture_url"
  end

  add_index "categories", ["name"], name: "index_categories_on_name", unique: true, using: :btree

  create_table "projects", force: :cascade do |t|
    t.string   "title",                                null: false
    t.integer  "user_id",                              null: false
    t.integer  "category_id"
    t.text     "description",             default: ""
    t.date     "end_date"
    t.integer  "goal"
    t.string   "head_image_file_name"
    t.string   "head_image_content_type"
    t.integer  "head_image_file_size"
    t.datetime "head_image_updated_at"
  end

  add_index "projects", ["category_id"], name: "index_projects_on_category_id", using: :btree
  add_index "projects", ["user_id"], name: "index_projects_on_user_id", using: :btree

  create_table "reward_buys", force: :cascade do |t|
    t.integer "user_id",   null: false
    t.integer "reward_id", null: false
  end

  add_index "reward_buys", ["reward_id"], name: "index_reward_buys_on_reward_id", using: :btree
  add_index "reward_buys", ["user_id"], name: "index_reward_buys_on_user_id", using: :btree

  create_table "rewards", force: :cascade do |t|
    t.integer "cost",       null: false
    t.string  "title",      null: false
    t.integer "limit"
    t.text    "body",       null: false
    t.integer "project_id", null: false
  end

  add_index "rewards", ["project_id"], name: "index_rewards_on_project_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name",                             null: false
    t.string   "password_digest",                  null: false
    t.string   "session_token",                    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "photo_url",           default: ""
    t.text     "bio",                 default: ""
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  add_index "users", ["name"], name: "index_users_on_name", unique: true, using: :btree

end

```
