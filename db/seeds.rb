# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Category.delete_all
User.delete_all
Reward.delete_all
RewardBuy.delete_all
Project.delete_all

game = Category.create!({name: "Game", picture_url: 'images/GamesCat.jpg' })
doc = Category.create!({name: "Documentary", picture_url: 'images/DocumentaryCat.png'})
art = Category.create!({name: "Art", picture_url: 'images/ArtCat.jpg'})
music = Category.create!({name: "Music", picture_url: 'images/MusicCat.jpg'})



guest = User.create({name: 'guest', password: 'password', bio: 'I am a guest'})
guest.avatar = File.open('app/assets/images/user_seeds/guest_login.png')
guest.save!
blue = User.create!({name: 'blue', password: 'password', bio: 'I am the trainer Blue'})
blue.avatar = File.open('app/assets/images/user_seeds/trainer_blue.png')
blue.save!
red = User.create!({name: 'red', password: 'password', bio: 'I am the trainer Red'})
red.avatar = File.open('app/assets/images/user_seeds/trainer_red.png')
red.save!
silver = User.create!({name: 'silver', password: 'password', bio: 'I am the trainer Silver'})
silver.avatar = File.open('app/assets/images/user_seeds/trainer_silver.jpg')
silver.save!
sapphire = User.create!({name: 'sapphire', password: 'password', bio: 'I am the trainer Sapphire'})
sapphire.avatar = File.open('app/assets/images/user_seeds/trainer_sapphire.png')
sapphire.save!

# Games
pokeBlue = Project.create!({title: "Pokemon Blue", user_id: blue.id, category_id: game.id, goal: 1000, end_date: "2016-11-12" ,
  description: File.open("app/assets/descriptions/poke_blue_description.txt", "rb").read
  })
  pokeBlue.head_image = File.open('app/assets/images/project_seeds/pokeBlue.jpg')
  pokeBlue.save!
pokeRed = Project.create!({title: "Pokemon Red", user_id: red.id, category_id: game.id, goal: 2000, end_date: "2016-12-25" ,
  description: File.open("app/assets/descriptions/poke_red_description.txt", "rb").read
  })
  pokeRed.head_image = File.open('app/assets/images/project_seeds/pokeRed.jpeg')
  pokeRed.save!
pokeSilver = Project.create!({title: "Pokemon Silver", user_id: silver.id, category_id: game.id, goal: 5000, end_date: "2016-12-25",
  description: File.open("app/assets/descriptions/poke_silver_description.txt", "rb").read
  })
  pokeSilver.head_image = File.open('app/assets/images/project_seeds/pokeSilver.png')
  pokeSilver.save!
pokeSapphire = Project.create!({title: "Pokemon Sapphire", user_id: sapphire.id, category_id: game.id, goal: 10000, end_date: "2016-12-25",
  description: File.open("app/assets/descriptions/poke_sapphire_description.txt", "rb").read
  })
  pokeSapphire.head_image = File.open('app/assets/images/project_seeds/pokeSapphire.jpg')
  pokeSapphire.save!



blueReward1 = Reward.create({cost: 50, title: "Support Blue", body: "This would help Blue a ton. You get a personal message and a copy of the game.", project_id: pokeBlue.id})
blueReward2 = Reward.create({cost: 200, title: "Become a patron of Blue", body: "You get two copies of the game, a personalized message, and Blue-themed gameboy case. Also Blue's gratitude", project_id: pokeBlue.id})
blueReward3 = Reward.create({cost: 500, title: "Become am amazing super patron", body: "It would really be incredible if you gave this much. Don't give unless you are LOADED! You get everything in the previous tier times two. Plus a handwritten thnak you from BLUE.", project_id: pokeBlue.id})
redReward1 = Reward.create({cost: 50, title: "Support Red", body: "This would help Red a ton. you get the game. Red will remember you when they become the world's greatest pokemon trainer.", project_id: pokeRed.id})

silver500Blue = RewardBuy.create!({user_id: silver.id, reward_id: blueReward3.id})
sapphire200Blue = RewardBuy.create!({user_id: sapphire.id, reward_id: blueReward2.id})
blue50Red = RewardBuy.create!({user_id: blue.id, reward_id: redReward1.id})
red50Blue = RewardBuy.create!({user_id: red.id, reward_id: blueReward1.id})
silver50Blue = RewardBuy.create!({user_id: silver.id, reward_id: blueReward1.id})


# Art

vanGogh = Project.create!({title: "Van Gogh", user_id: blue.id, category_id: art.id, goal: 1500, end_date: "2016-11-12" ,
  description: File.open("app/assets/descriptions/van_gogh_description.txt", "rb").read
  })
  vanGogh.head_image = File.open('app/assets/images/project_seeds/Starry_Night.jpg')
  vanGogh.save!
deChirico = Project.create!({title: "Giorgio de Chirico", user_id: red.id, category_id: art.id, goal: 2000, end_date: "2016-12-25" ,
  description: File.open("app/assets/descriptions/de_chirico_description.txt", "rb").read
  })
  deChirico.head_image = File.open('app/assets/images/project_seeds/De_Chirico_Love_Song.jpg')
  deChirico.save!
mondrian = Project.create!({title: "Piet Mondrian", user_id: silver.id, category_id: art.id, goal: 5000, end_date: "2016-12-25",
  description: File.open("app/assets/descriptions/mondrian_description.txt", "rb").read
  })
  mondrian.head_image = File.open('app/assets/images/project_seeds/BroadwayBoogie.jpg')
  mondrian.save!
elGreco = Project.create!({title: "El Greco", user_id: sapphire.id, category_id: art.id, goal: 10000, end_date: "2016-12-25",
  description: File.open("app/assets/descriptions/el_greco_description.txt", "rb").read
  })
  elGreco.head_image = File.open('app/assets/images/project_seeds/El_Greco_View_Toledo.jpg')
  elGreco.save!


# doc

jiroDreams = Project.create!({title: "Jiro Dreams of Sushi", user_id: blue.id, category_id: doc.id, goal: 1500, end_date: "2017-9-12" ,
  description: File.open("app/assets/descriptions/jiro_dreams_description.txt", "rb").read
  })
  jiroDreams.head_image = File.open('app/assets/images/project_seeds/Jiro_Dreams.jpg')
  jiroDreams.save!
encountersEnd = Project.create!({title: "Encounters at the End of the World", user_id: red.id, category_id: doc.id, goal: 2000, end_date: "2017-4-13" ,
  description: File.open("app/assets/descriptions/encounters_end_description.txt", "rb").read
  })
  encountersEnd.head_image = File.open('app/assets/images/project_seeds/Encounters_End.jpg')
  encountersEnd.save!




# Music

beatles = Project.create!({title: "Jiro Dreams of Sushi", user_id: blue.id, category_id: music.id, goal: 3500, end_date: "2017-2-2" ,
  description: File.open("app/assets/descriptions/beatles_description.txt", "rb").read
  })
  beatles.head_image = File.open('app/assets/images/project_seeds/Abbey_Road.jpeg')
  beatles.save!
beck = Project.create!({title: "Encounters at the End of the World", user_id: red.id, category_id: music.id, goal: 1600, end_date: "2017-1-23" ,
  description: File.open("app/assets/descriptions/beck_description.txt", "rb").read
  })
  beck.head_image = File.open('app/assets/images/project_seeds/Sea_Changes.png')
  beck.save!
fleetwoodMac = Project.create!({title: "Jiro Dreams of Sushi", user_id: blue.id, category_id: music.id, goal: 1800, end_date: "2017-6-12" ,
  description: File.open("app/assets/descriptions/fleetwood_mac_description.txt", "rb").read
  })
  fleetwoodMac.head_image = File.open('app/assets/images/project_seeds/Rumors.jpg')
  fleetwoodMac.save!
brianEno = Project.create!({title: "Encounters at the End of the World", user_id: red.id, category_id: music.id, goal: 400, end_date: "2017-2-1" ,
  description: File.open("app/assets/descriptions/brain_eno_description.txt", "rb").read
  })
  brianEno.head_image = File.open('app/assets/images/project_seeds/Another_Green_World.jpg')
  brianEno.save!
