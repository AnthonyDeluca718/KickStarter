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

game = Category.create!({name: "Game", picture_url: 'images/ArtCat.jpg' })
doc = Category.create!({name: "Documentary", picture_url: 'images/DocumentaryCat.png'})
art = Category.create!({name: "Art", picture_url: 'images/GamesCat.jpg'})
music = Category.create!({name: "Music", picture_url: 'images/MusicCat.jpg'})

guest = User.create!({name: 'guest', password: 'password', photo_url: 'http://www.gaelholidayhomes.co.uk/wp-content/uploads/2015/06/guest_login.png', bio: 'I am a guest'})
blue = User.create!({name: 'blue', password: 'password', photo_url: 'http://cdn.bulbagarden.net/upload/thumb/8/84/HeartGold_SoulSilver_Blue.png/165px-HeartGold_SoulSilver_Blue.png', bio: 'I am the trainer Blue'})
red = User.create!({name: 'red', password: 'password', photo_url: 'http://wallpapercave.com/wp/d08sleK.png', bio: 'I am the trainer Red'})
silver = User.create!({name: 'silver', password: 'password', photo_url: 'http://static.zerochan.net/Silver.(Pok%C3%A9mon).full.445618.jpg', bio: 'I am the trainer Silver'})
sapphire = User.create!({name: 'sapphire', password: 'password', photo_url: 'http://cdn.bulbagarden.net/upload/thumb/f/f9/Sapphire_Adventures.png/200px-Sapphire_Adventures.png', bio: 'I am the trainer Sapphire'})

pokeBlue = Project.create!({title: "Pokemon Blue", user_id: blue.id, category_id: game.id, goal: 1000, end_date: "2016-11-12" ,
  head_photo_url: "https://cdn.tutsplus.com/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/17.jpg",
  description: 'Pokémon Red Version and Pokémon Blue Version, originally released in Japan as Pocket Monsters: Red & Green[a] are role-playing video gamesdeveloped by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon series. They were first released in Japan in 1996 as Red and Green. "Blue" was released later in the year as a special edition. They were later released as Red and Blue in North America, Europe and Australia over the following three years. Pokémon Yellow, a special edition version, was released roughly a year later. Red andGreen have subsequently been remade for the Game Boy Advance as Pokémon FireRed and LeafGreen, released in 2004.
    The player controls the protagonist from an overhead perspective and navigates him throughout the fictional region of Kanto in a quest to masterPokémon battling. The goal of the games is to become the champion of the Pokémon League by defeating the eight Gym Leaders and then the top four Pokémon trainers in the land, the Elite Four. Another objective is to complete the Pokédex, an in-game encyclopedia, by obtaining the 150 available Pokémon. Red and Blue utilize the Game Link Cable, which connects two games together and allows Pokémon to be traded or battled between games. Both titles are independent of each other but feature the same plot,[8] and while they can be played separately, it is necessary for players to trade among both games in order to obtain all of the first 150 Pokémon.
    Red and Blue were well-received with critics praising the multiplayer options, especially the concept of trading. They received an aggregated score of 89% on GameRankings and are perennially ranked on top-game lists including at least four years on IGNs Top 100 Games of All Time. The games releases marked the beginning of what would become a multibillion-dollar franchise, jointly selling millions of copies worldwide. In 2009 they appeared in the Guinness Book of World Records under "Best selling RPG on the Game Boy" and "Best selling RPG of all time". The games were released on theNintendo 3DS Virtual Console service on February 27, 2016, as a commemoration of the franchises 20th anniversary.'
  })
pokeRed = Project.create!({title: "Pokemon Red", user_id: red.id, category_id: game.id, goal: 2000, end_date: "2016-12-25" ,
  head_photo_url:"http://static.srcdn.com/wp-content/uploads/Pokemon-Red-Cover-Art.jpg",
  description: 'Pokémon Red Version and Pokémon Blue Version, originally released in Japan as Pocket Monsters: Red & Green[a] are role-playing video gamesdeveloped by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon series. They were first released in Japan in 1996 as Red and Green. "Blue" was released later in the year as a special edition. They were later released as Red and Blue in North America, Europe and Australia over the following three years. Pokémon Yellow, a special edition version, was released roughly a year later. Red andGreen have subsequently been remade for the Game Boy Advance as Pokémon FireRed and LeafGreen, released in 2004.
    The player controls the protagonist from an overhead perspective and navigates him throughout the fictional region of Kanto in a quest to masterPokémon battling. The goal of the games is to become the champion of the Pokémon League by defeating the eight Gym Leaders and then the top four Pokémon trainers in the land, the Elite Four. Another objective is to complete the Pokédex, an in-game encyclopedia, by obtaining the 150 available Pokémon. Red and Blue utilize the Game Link Cable, which connects two games together and allows Pokémon to be traded or battled between games. Both titles are independent of each other but feature the same plot,[8] and while they can be played separately, it is necessary for players to trade among both games in order to obtain all of the first 150 Pokémon.
    Red and Blue were well-received with critics praising the multiplayer options, especially the concept of trading. They received an aggregated score of 89% on GameRankings and are perennially ranked on top-game lists including at least four years on IGNs Top 100 Games of All Time. The games releases marked the beginning of what would become a multibillion-dollar franchise, jointly selling millions of copies worldwide. In 2009 they appeared in the Guinness Book of World Records under "Best selling RPG on the Game Boy" and "Best selling RPG of all time". The games were released on theNintendo 3DS Virtual Console service on February 27, 2016, as a commemoration of the franchises 20th anniversary.'
  })
pokeSilver = Project.create!({title: "Pokemon Silver", user_id: silver.id, category_id: game.id, goal: 5000, end_date: "2016-12-25",
  head_photo_url: "http://img11.deviantart.net/dcb8/i/2013/350/5/2/pokemon_silver_wallpaper_by_zaros_bobthecat-d6y8x4l.png",
  description: 'Pokémon Gold Version and Silver Version[a] are the second installments of the Pokémon series of role-playing video games, developed by Game Freak and published by Nintendo for the Game Boy Color. They were released in Japan in 1999, Australia and North America in 2000, and Europe in 2001. Pokémon Crystal, a special edition, was released roughly a year later in each region. In 2009, Nintendo remade Gold and Silver for the Nintendo DS as Pokémon HeartGold and SoulSilver.'
  })
pokeSapphire = Project.create!({title: "Pokemon Sapphire", user_id: sapphire.id, category_id: game.id, goal: 10000, end_date: "2016-12-25",
  head_photo_url: "http://techgeek.com.au/wp-content/uploads/2014/05/pokemon-alpha-sapphire-cover-crop_1280.0_cinema_1280.0.jpg",
  description: 'Pokémon Ruby Version and Sapphire Version are the third installments of the Pokémon series of role-playing video games, developed by Game Freak and published by Nintendo for the Game Boy Advance. The games were first released in Japan in late 2002 and internationally in 2003. Pokémon Emerald, a special edition version, was released two years later in each region. These three games (Pokémon Ruby, Sapphire, and Emerald) are part of the third generation of the Pokémon video game series, also known as the "advanced generation". Remakes of the two games, titled Omega Ruby and Alpha Sapphire, were released for the Nintendo 3DS onward worldwide on November 21, 2014, exactly twelve years to the date of the original Ruby and Sapphire release date, with the exception of Europe, where it was released on November 28, 2014.[2]'
  })

blueReward1 = Reward.create({cost: 50, title: "Support Blue", body: "This would help Blue a ton. You get a personal message and a copy of the game.", project_id: pokeBlue.id})
blueReward2 = Reward.create({cost: 200, title: "Become a Patron of Blue", body: "You get two copies of the game, a personalized message, and Blue-themed gameboy case. Also Blue's gratitude", project_id: pokeBlue.id})
blueReward3 = Reward.create({cost: 500, title: "Become am amazing PAtron", body: "It would really be incredible if you gave this much. Don't give unless you are LOADED! You get everything in the previous tier times two. Plus a handwritten thnak you from BLUE.", project_id: pokeBlue.id})
redReward1 = Reward.create({cost: 50, title: "Support Red", body: "This would help Red a ton. you get the game. Red will remember you when they become the world's greatest pokemon trainer.", project_id: pokeRed.id})

silver500Blue = RewardBuy.create!({user_id: silver.id, reward_id: blueReward3.id})
sapphire200Blue = RewardBuy.create!({user_id: sapphire.id, reward_id: blueReward2.id})
blue50Red = RewardBuy.create!({user_id: blue.id, reward_id: redReward1.id})
red50Blue = RewardBuy.create!({user_id: red.id, reward_id: blueReward1.id})
silver50Blue = RewardBuy.create!({user_id: silver.id, reward_id: blueReward1.id})
