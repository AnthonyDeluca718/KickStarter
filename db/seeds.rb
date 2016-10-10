# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create!({name: 'guest', password: 'password', photo_url: 'http://www.gaelholidayhomes.co.uk/wp-content/uploads/2015/06/guest_login.png', bio: 'I am a guest'})

crovaxProj = Project.create!(description:"Crovax?", end_date: "2016-10-21", goal: 1000,
head_photo_url: "https://hydra-media.cursecdn.com/mtgsalvation.gamepedia.com/9/9e/Crovaxar.jpg?version=932bfd5c6a2b3225118659498b8257ea",
title: "Test Project", user_id: 1 )
