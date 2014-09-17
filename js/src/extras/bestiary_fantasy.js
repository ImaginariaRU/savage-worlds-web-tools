/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Fantasy Companion and are owned by Pinnacle Entertainment Group.
*/
if(typeof(extraDatabase) == "undefined")
	var extraDatabase = Array();

if(typeof(extraBooks) == "undefined")
	var extraBooks = Array();

var currentBook = books_list[1];

extraBooks = extraBooks.concat(currentBook);

extraDatabase = extraDatabase.concat(Array(
	{
		name: "Arachnaurs",
		wildcard: 0,
		image: "",
		blurb: "Arachnaurs are a mix of human and spider in the same way centaurs are part human, part horse. They live in dense woodlands, spinning webs to catch unwary intruders. Despite being a sentient race, they have no qualms about eating the flesh of other sentients.",
		attributes: {
			agility: "d10",
			smarts: "d6",
			spirit: "d6",
			strength: "d10",
			vigor: "d8"
		},
		skills: {
			 'Climbing' : "d12",
			 'Fighting' : "d8",
			 'Intimidation' : "d10",
			 'Notice' : "d8",
			 'Shooting' : "d10",
			 'Stealth' : "d8"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "8",
		armor: "1",
		edges: "",
		hindrances: "",
		treasure: "Meager per 3 arachnaurs",
		gear: "Leather armor (+1), long sword (Str+d8)",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d4."
			},
			{
				name: "Poison (-2)",
				description: "The bite of an arachnaur causes instant paralysis for those who fail their Vigor roll. It lasts for 1d6 rounds."
			},
			{
				name: "Size +1",
				description: "Arachnaurs measure 7' in length."
			},
			{
				name: "Webbing",
				description: "Arachnaurs can cast webs from their thorax that are the size of Small Burst Templates. This is a Shooting roll with a range of 3/6/12. Anything in the web must cut or break their way free (Toughness 7). Webbed characters can still fight, but all physical actions are at –4."
			}
		),
		book: currentBook,

		page: "p100"
	},
	{
		name: "Assassin",
		wildcard: 0,
		image: "http://www.wizards.com/dnd/images/dmg35_gallery/DMG35_PG180_WEB.jpg",
		blurb: "Assassins are hired killers. They may be mysterious loners or belong to an organized guild. What they have in common is a lack of scruples about killing for money.",
		attributes: {
			agility: "d10",
			smarts: "d6",
			spirit: "d8",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			 'Climbing' : "d8",
			 'Fighting' : "d8",
			 'Intimidation' : "d6",
			 'Notice' : "d8",
			 'Stealth' : "d8",
			 'Shooting' : "d6",
			 'Streetwise' : "d6",
			 'Throwing' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "6",
		armor: "1",
		edges: "Alertness, First Strike, Thief",
		hindrances: "Varies",
		treasure: "Meager",
		gear: "Leather armor (+1), short sword (Str+d6), throwing knives (Range: 3/6/12, Damage: Str+d4)",
		abilities: Array(
			{
				name: "Poison",
				description: "The quickest way to kill someone is with poison. A typical poison requires a Vigor roll at –2 or take an automatic wound."
			}
		),
		book: currentBook,

		page: "p100-p101"
	},
	{
		name: "Assassin, Master",
		wildcard: 0,
		image: "http://www.wizards.com/dnd/images/dmg35_gallery/DMG35_PG180_WEB.jpg",
		blurb: "Assassins are hired killers. They may be mysterious loners or belong to an organized guild. What they have in common is a lack of scruples about killing for money.",
		attributes: {
			agility: "d12",
			smarts: "d8",
			spirit: "d8",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			 'Climbing' : "d8",
			 'Fighting' : "d12",
			 'Intimidation' : "d8",
			 'Notice' : "d10",
			 'Shooting' : "d6",
			 'Stealth' : "d12",
			 'Streetwise' : "d8",
			 'Throwing' : "d10"
		},
		charisma: "",
		pace: "6",
		parry: "9",
		toughness: "6",
		armor: "1",
		edges: "Acrobat, Alertness, Block, First Strike, Marksman, Level Headed, Quick Draw, Thief",
		hindrances: "Varies",
		treasure: "Meager",
		gear: "Leather armor (+1), short sword (Str+d6), throwing knives (Range: 3/6/12, Damage: Str+d4)",
		abilities: Array(
			{
				name: "Poison",
				description: "Master assassins use more deadly venoms in their trade. Victims must make a Vigor roll at –2 or die in 2d6 rounds."
			}
		),
		book: currentBook,

		page: "p101"
	},
	{
		name: "Bandit",
		wildcard: 0,
		image: "http://cdn.obsidianportal.com/images/315512/akiyoko.jpg",
		blurb: "Bandits are outlaws, earning a living by raiding small settlements or waylaying travelers. Not all bandits are necessarily evil. Some may have been wrongly outlawed or forced to flee their homes by an invading force. Others may be Robin Hood-type figures, fighting against an unjust system.",
		blurb_extra: "The bandits presented here are the standard ruffian sort, out to get what they can by whatever means necessary.",
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d6",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			 'Climbing' : "d6",
			 'Fighting' : "d6",
			 'Notice' : "d6",
			 'Shooting' : "d6",
			 'Stealth' : "d6",
			 'Throwing' : "d6"
		},
		charisma: "-2",
		pace: "6",
		parry: "5",
		toughness: "6",
		armor: "1",
		edges: "",
		hindrances: "Greedy, Mean",
		treasure: "Meager per 5 bandits",
		gear: "Leather armor (+1), various weapons",
		abilities: Array(

		),
		book: currentBook,

		page: "p101"
	},
	{
		name: "Bandit Chief",
		wildcard: 1,
		image: "http://cdn.obsidianportal.com/images/315512/akiyoko.jpg",
		blurb: "Bandits are outlaws, earning a living by raiding small settlements or waylaying travelers. Not all bandits are necessarily evil. Some may have been wrongly outlawed or forced to flee their homes by an invading force. Others may be Robin Hood-type figures, fighting against an unjust system.",
		blurb_extra: "The bandits presented here are the standard ruffian sort, out to get what they can by whatever means necessary.",
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d8",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			 'Climbing' : "d6",
			 'Fighting' : "d10",
			 'Intimidation' : "d8",
			 'Notice' : "d6",
			 'Riding' : "d8",
			 'Shooting' : "d10",
			 'Stealth' : "d8",
			 'Throwing' : "d8"
		},
		charisma: "-2",
		pace: "6",
		parry: "8",
		toughness: "8",
		armor: "2",
		edges: "Block, Combat Reflexes, Command",
		hindrances: "Greedy, Mean",
		treasure: "Worthwhile",
		gear: "Chain mail (+2), various weapons",
		abilities: Array(

		),
		book: currentBook,

		page: "p102"
	},
	{
		name: "Basilisk",
		alternate_names: "cockatrice",
		wildcard: 0,
		image: "http://www.gods-and-monsters.com/images/mythical-creatures-basilisk.jpg",
		blurb: "Called the king of serpents because of its head crest, the gaze of the basilisk can instantly kill. Even its blood is deadly to the touch. The cockatrice is a form of basilisk, but lacks the poisonous blood.",
		attributes: {
			agility: "d8",
			smarts: "d6 (A)",
			spirit: "d12+2",
			strength: "d6",
			vigor: "d8"
		},
		skills: {
			 'Fighting' : "d6",
			 'Notice' : "d10",
			 'Stealth' : "d10"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "4",
		armor: "0",
		edges: "",
		hindrances: "",
		treasure: "Worthwhile around lair",
		gear: "",
		abilities: Array(
			{
				name: "Death Gaze",
				description: "Victims of the basilisk do not have to meet its gaze to be affected by its deadly power. As an action, the basilisk can stare at any creature it can see. Opponents must make a Vigor roll opposed by the basilisk’s Spirit or suffer an automatic wound."
			},
			{
				name: "Poison Blood",
				description: "A basilisk’s blood is highly toxic. When it receives a wound, every adjacent creature must make an Agility roll to avoid the deadly spray. Those who fail take a wound."
			},
			{
				name: "Size -2",
				description: "Basilisks measure only 12” in length."
			},
			{
				name: "Small",
				description: "Opponents must subtract –2 from attack rolls against the basilisk due to its small size."
			}

		),
		book: currentBook,

		page: "p102"
	},
	{
		name: "Bargest",
		alternate_names: "",
		wildcard: 0,
		image: "http://vampirewarzone.yolasite.com/resources/BARGH.jpg",
		blurb: "Bargests are huge, black dogs. It is said that anyone who sees a bargest is destined to die soon.",
		attributes: {
			agility: "d8",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Notice' : "d8"
		},
		charisma: "",
		pace: "10",
		parry: "6",
		toughness: "7",
		armor: "0",
		edges: "",
		hindrances: "",
		treasure: "None",
		gear: "",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d6."
			},
			{
				name: "Curse",
				description: "The first time the characters see an individual bargest, they must make a Spirit roll at –2 or suffer a curse. Those who fail lose all their bennies and cannot earn any more for the remainder of the session. If a character has no bennies left when he sees the bargest, he suffers a –2 penalty to all trait rolls for the rest of the session instead."
			},
			{
				name: "Go fot the Throat",
				description: "Bargests instinctively go for an opponent’s soft spots. With a raise on its attack roll, it hits the target’s most weakly-armored location."
			},
			{
				name: "Fleet-Footed",
				description: "Bargests roll a d10 instead of d6 when running."
			},
			{
				name: "Size +1",
				description: "Bargests average 7’ in length and stand as much as 4’ high."
			}

		),
		book: currentBook,

		page: "p102-103"
	},
	{
		name: "Bee, Giant",
		alternate_names: "",
		wildcard: 0,
		image: "http://farm7.staticflickr.com/6120/6263370588_7162b81b4a_z.jpg",
		blurb: "Giant bees are considerably larger than regular bees but fortunately do not form large swarms.",
		attributes: {
			agility: "d8",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d8",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d8"
		},
		charisma: "",
		pace: "3",
		parry: "5",
		toughness: "4",
		armor: "0",
		edges: "",
		hindrances: "",
		treasure: "Meager, in lair",
		gear: "",
		abilities: Array(
			{
				name: "Flight",
				description: "Giant bees have a Flying Pace of 6\" and Climb of 3\"."
			},
			{
				name: "Poison",
				description: "Any creature Shaken or wounded by a sting attack must make a Vigor roll or take a wound."
			},
			{
				name: "Size -1",
				description: "Giant bees are 3’ long."
			},
			{
				name: "Sting",
				description: "Str+d4"
			}

		),
		book: currentBook,

		page: "p103"
	},
	{
		name: "Bird of Prey",
		tags: "animal,",
		wildcard: 0,
		image: "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/red-tailed-hawk_681_600x450.jpg",
		blurb: "Birds of prey may not be big, but their talons can rip through flesh with ease. The bird of prey could be used for eagles, hawks, and any hunting birds.",
		attributes: {
			agility: "d10",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d4",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d12+4"
		},
		charisma: "",
		pace: "-",
		parry: "5",
		toughness: "3",
		armor: "0",
		edges: "",
		hindrances: "",
		treasure: "None",
		gear: "",
		abilities: Array(
			{
				name: "Blind",
				description: "When attacking large prey (such as characters), birds of prey go for the eyes. If the bird scores a raise on its Fighting roll, it has hit the character’s face. The character must make an Agility roll. On a failure, he suffers the One Eye Hindrance until his wounds heal. A roll of 1, regardless of the Wild Die, he suffers the Blind Hindrance instead."
			},
			{
				name: "Claws",
				description: "Str+d6"
			},
			{
				name: "Flying",
				description: "Flying Pace 8\"."
			},
			{
				name: "Size",
				description: "Birds of prey measure up to 2’ in height."
			},
			{
				name: "Small",
				description: "Attackers suffer a –2 penalty to attack rolls because of the beast’s size."
			}
		),
		book: currentBook,

		page: "p103"
	},
	{
		name: "Boar",
		tags: "animal,",
		wildcard: 0,
		image: "http://www.pennmac.com/blog/wp-content/uploads/2011/12/wild-boar-festival.jpeg",
		blurb: "Wild boars are hunted for their rich meat. They are tenacious fighters, especially when wounded.",
		attributes: {
			agility: "d6",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d8",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d6",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "7",
		armor: "0",
		edges: "",
		hindrances: "",
		treasure: "None",
		gear: "",
		abilities: Array(
			{
				name: "Berserk",
				description: "When a boar is Shaken, it goes berserk. It gains +2 to all Fighting and Strength rolls and its Toughness, but Parry is reduced by 2."
			},
			{
				name: "Gore",
				description: "If a boar can charge at least 6” before attacking, it adds +4 to damage."
			},
			{
				name: "Tusks",
				description: "Str+d4"
			}
		),
		book: currentBook,

		page: "p103"
	},
	{
		name: "Lava Border Elemental",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: "Composed of fire and earth, these creatures have a stony skin overlaying a body of molten rock. They look similar to earth elementals, but have fiery eyes, a mouth that looks like the centre of an active volcano when opened, and smoking, blackened, rocky skin.",
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d6",
			strength: "d12+3",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Shooting' : "d8"
		},
		charisma: "",
		pace: "4",
		parry: "6",
		toughness: "10",
		armor: "3",
		edges: "",
		hindrances: "",
		treasure: "None",
		gear: "",
		abilities: Array(
			{
				name: "Armor +3",
				description: "Rocky hide."
			},
			{
				name: "Burrow (6\")",
				description: "Lava elementals can meld into and out of the ground."
			},
			{
				name: "Elemental",
				description: "No additional damage from called shots; Fearless; Immune to disease and poison."
			},
			{
				name: "Flame Strike",
				description: "Lava elementals can spit a searing blast of flame using the Cone Template. Characters within the cone must beat the elemental’s Shooting roll with Agility or suffer 2d10 damage, plus the chance of catching fire."
			}
		),
		book: currentBook,

		page: "p105"
	},
	{
		name: "Mud Border Elemental",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: "Mud elementals bridge the realms of earth and water. They resemble earth elementals in shape, but are fluid like their water elemental kin.",
		attributes: {
			agility: "d8",
			smarts: "d4",
			spirit: "d6",
			strength: "d12+1",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8"
		},
		charisma: "",
		pace: "5",
		parry: "6",
		toughness: "7",
		armor: "",
		edges: "",
		hindrances: "",
		treasure: "None",
		gear: "",
		abilities: Array(
			{
				name: "Elemental",
				description: "No additional damage from called shots; Fearless; Immune to disease and poison."
			},
			{
				name: "Immunity",
				description: "The semisolid body of a mud elemental gives it limited resistance to attacks. Nonmagical attacks of any sort cause half-damage."
			},
			{
				name: "Seep",
				description: "Mud elementals can squeeze through small gaps as if it were Difficult Ground. Unlike water elementals, they cannot travel through porous substances—there must be an actual hole through the obstacle (such as a keyhole)."
			},
			{
				name: "Slam",
				description: "Str+d6, nonlethal damage."
			},
			{
				name: "Smother",
				description: "If a mud elemental scores a raise on a grapple attack it has enveloped its target. Escaping requires an opposed Strength roll. Each round the victim remains smothered, he suffers a Fatigue level."
			}

		),
		book: currentBook,

		page: "p105"
	},
	{
		name: "Sand Border Elemental",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: "Sand elementals inhabit the dusty border between the realms of earth and air. They manifest as sandy humanoids, but can turn into whirling clouds of flying dust and grit.",
		attributes: {
			agility: "d10",
			smarts: "d6",
			spirit: "d6",
			strength: "d12",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Shooting' : "d8"
		},
		charisma: "",
		pace: "5",
		parry: "6",
		toughness: "7",
		armor: "",
		edges: "",
		hindrances: "",
		treasure: "None",
		gear: "",
		abilities: Array(
			{
				name: "Elemental",
				description: "No additional damage from called shots; Fearless; Immune to disease and poison."
			},
			{
				name: "Immunity",
				description: "Half-damage from all non- magical attacks."
			},
			{
				name: "Sand Blast",
				description: "Sand elementals can send directed blasts of air at foes using the Cone Template and a Shooting roll. Foes may make an opposed Agility roll to avoid the blast. The damage is 2d8."
			},
			{
				name: "Seep",
				description: "Sand elementals can squeeze through small gaps as if it were Difficult Ground. Unlike water elementals, they cannot travel through porous substances—there must be an actual hole through the obstacle (such as a keyhole)."
			},
			{
				name: "Slam",
				description: "Str+d4"
			},
			{
				name: "Whirlwind",
				description: "As long as the elemental does not move that turn it may attempt to pick up a foe. Make an opposed Strength check. If the sand elemental wins, its foe is pulled into the swirling maelstrom of its sandy body. While trapped, the target is at –2 on all rolls (including damage, to hit, and Strength rolls to free himself), and suffers 2d6 damage per round. The elemental cannot move as long as it wants to keep foes trapped inside its form."
			}

		),
		book: currentBook,

		page: "p105"
	},
	{
		name: "Steam Border Elemental",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: "The last of the common border elementals are those inhabiting the overlap of the realms of fire and water. They manifest as clouds of swirling steam.",
		attributes: {
			agility: "d12",
			smarts: "d6",
			spirit: "d6",
			strength: "d6",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Shooting' : "d8"
		},
		charisma: "",
		pace: "-",
		parry: "6",
		toughness: "6",
		armor: "",
		edges: "",
		hindrances: "",
		treasure: "None",
		gear: "",
		abilities: Array(
			{
				name: "Elemental",
				description: "No additional damage from called shots; Fearless; Immune to disease and poison."
			},
			{
				name: "Flight",
				description: "Steam elementals fly at a rate of 6\" with a Climb rate of 4\". They may never \"run\""
			},
			{
				name: "Immunity",
				description: "Steam elementals suffer no damage from non-magical attacks."
			},
			{
				name: "Steam Blast",
				description: "Steam elementals can send directed blasts of superheated air at foes using the Cone Template and a Shooting roll. Foes may make an opposed Agility roll to avoid the blast. The damage is 2d10 and ignores nonmagical Armor."
			},
			{
				name: "Seep",
				description: "Steam elementals can squeeze through any gaps or porous surfaces as if they were Difficult Ground"
			},
			{
				name: "Slam",
				description: "Str+d4"
			},
			{
				name: "Whirlwind",
				description: "As long as the elemental does not move that turn it may attempt to pick up a foe. Make an opposed Strength check. If the elemental wins then its foe is pulled into the swirling maelstrom of its steamy body. While trapped, the target is at –2 on all rolls (including damage, to hit, and Strength rolls to free himself), and suffers 2d6 damage per round. The elemental cannot move as long as it wants to keep foes trapped inside its form."
			}

		),
		book: currentBook,

		page: "p105"
	},
	{
		name: "Caveman Warrior",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"\"Cave man\" is a generic term used to describe a member of a primitive, non- technological society. Some cave men actually live in caves, whereas others inhabit deserts, jungles, or swamps, living in mud or reed huts. They lack an organized society, typically being led by a chief who is advised by one or more shamans.",
			"Cave man culture focuses on hunting and warring with rival tribes—the latter being typically for females. Some tribes fear outsiders, using force to drive them away. Others welcome limited contact, swapping furs and meat for metal tools. Some are cannibals, openly welcoming strangers, only to turn on them and eat them."
		),
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d6",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Notice' : "d4",
			'Stealth' : "d6",
			'Throwing' : "d8"
		},
		charisma: "-2",
		pace: "6",
		parry: "6/7",
		toughness: "7",
		armor: "",
		edges: "Brave, Combat Reflexes",
		hindrances: "All Thumbs, Mean",
		treasure: "Meager",
		gear: "Club (Str+d4) or flint spear (Str+d6; Parry +1; Reach 1)",
		abilities: "",
		book: currentBook,

		page: "p106"
	},
	{
		name: "Caveman Chieftan",
		tags: "",
		wildcard: 1,
		image: "",
		blurb: Array(
			"\"Cave man\" is a generic term used to describe a member of a primitive, non- technological society. Some cave men actually live in caves, whereas others inhabit deserts, jungles, or swamps, living in mud or reed huts. They lack an organized society, typically being led by a chief who is advised by one or more shamans.",
			"Cave man culture focuses on hunting and warring with rival tribes—the latter being typically for females. Some tribes fear outsiders, using force to drive them away. Others welcome limited contact, swapping furs and meat for metal tools. Some are cannibals, openly welcoming strangers, only to turn on them and eat them.",
			"Cave men communities are often lead by a chieftain. Typically, he is the largest and strongest individual in the tribe."
		),
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d6",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d10",
			'Intimidation' : "d10",
			'Notice' : "d4",
			'Stealth' : "d6",
			'Throwing' : "d8"
		},
		charisma: "-2",
		pace: "6",
		parry: "7/8",
		toughness: "8",
		armor: "",
		edges: "Brawny, Combat Reflexes, Sweep",
		hindrances: "All Thumbs, Mean",
		treasure: "Meager",
		gear: "Club (Str+d4) or flint spear (Str+d6; Parry +1; Reach 1)",
		abilities: "",
		book: currentBook,

		page: "p106"
	},
	{
		name: "Caveman Shaman",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"\"Cave man\" is a generic term used to describe a member of a primitive, non- technological society. Some cave men actually live in caves, whereas others inhabit deserts, jungles, or swamps, living in mud or reed huts. They lack an organized society, typically being led by a chief who is advised by one or more shamans.",
			"Cave man culture focuses on hunting and warring with rival tribes—the latter being typically for females. Some tribes fear outsiders, using force to drive them away. Others welcome limited contact, swapping furs and meat for metal tools. Some are cannibals, openly welcoming strangers, only to turn on them and eat them.",
			"Most cave man tribes have at least one shaman in their number. He communes with the spirits and foretells the omens."
		),
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d8",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d6",
			'Intimidation' : "d8",
			'Notice' : "d4",
			'Spellcasting' : "d8",
			'Stealth' : "d6"
		},
		charisma: "-2",
		pace: "6",
		parry: "6",
		toughness: "6",
		armor: "",
		edges: "",
		hindrances: "All Thumbs, Mean",
		treasure: "Meager",
		gear: "Flint spear (Str+d6; Parry +1; Reach +1)",
		abilities: Array (
			{
				name: "Powers",
				description: "Cave men shamans have 15 Power Points and know the following powers: bolt, boost/lower trait, fear, and telekinesis."
			}
		),
		book: currentBook,

		page: "p106-p107"
	},
	{
		name: "Centaur",
		tags: "",
		wildcard: 0,
		image: "http://media1.shmoop.com/images/mythology/characters/centaurs/chiron-centaur-achilles.jpg",
		blurb: "Centaurs have the upper body of a human and the lower body of a horse. In some settings they are reclusive philosophers. In others, they are nomads, wandering the plains and forests in herds.",
		attributes: {
			agility: "d6",
			smarts: "d8",
			spirit: "d8",
			strength: "d10",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d8",
			'Shooting' : "d8",
			'Stealth' : "d6",
			'Survival' : "d8"
		},
		charisma: "",
		pace: "8",
		parry: "7",
		toughness: "9",
		armor: "1",
		edges: "",
		hindrances: "",
		treasure: "Meager per 3 centaurs",
		gear: "Leather armor (+1), spear (Str+d6, Parry +1, Reach 1), bow (Range 12/24/48, Damage 2d6)",
		abilities: Array (
			{
				name: "Fleet Footed",
				description: "Centaurs roll a d8 when running, instead of a d6."
			},
			{
				name: "Hooves",
				description: "Str."
			},
			{
				name: "Size +2",
				description: "Centaurs are the same size as riding horses."
			}
		),
		book: currentBook,

		page: "p107"
	},
	{
		name: "Centipede, Giant",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: "Measuring up to eight yards in length and covered in black chitinous armor, giant centipedes are predominantly found underground or in tropical jungles. Their powerful mandibles can pierce most armor and deliver a lethal poison.",
		attributes: {
			agility: "d6",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d10",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d6",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "13",
		armor: "",
		edges: "",
		hindrances: "",
		treasure: "Meager, in lair",
		gear: "Leather armor (+1), spear (Str+d6, Parry +1, Reach 1), bow (Range 12/24/48, Damage 2d6)",
		abilities: Array (
			{
				name: "Armor +3",
				description: "Thick chitinous armor."
			},
			{
				name: "Bite",
				description: "Str+d8, AP 4."
			},
			{
				name: "Large",
				description: "Attackers add +2 when attacking a giant centipede due to their size."
			},
			{
				name: "Poison",
				description: "Victims must make a Vigor roll at –2 or suffer an automatic wound."
			},
			{
				name: "Size +4",
				description: "Giant centipedes grow up to 24' long."
			}
		),
		book: currentBook,

		page: "p107"
	},
	{
		name: "Chimera",
		tags: "",
		wildcard: 0,
		image: "http://img2.wikia.nocookie.net/__cb20120615060217/dragonsdogma/images/0/06/Chimera01.png",
		blurb: "A chimera has the head of a lion, the body of a goat, and the tail of a dragon, complete with a dragon’s head at the tip. The creature’s leonine head can breathe fire. A few chimera can also breathe fire from their dragon-headed tail.",
		attributes: {
			agility: "d8",
			smarts: "d6 (A)",
			spirit: "d10",
			strength: "d12",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d8"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "8",
		armor: "",
		edges: "",
		hindrances: "",
		treasure: "Meager, in lair",
		gear: "Leather armor (+1), spear (Str+d6, Parry +1, Reach 1), bow (Range 12/24/48, Damage 2d6)",
		abilities: Array (
			{
				name: "Bite/Claw",
				description: "Str+d6."
			},
			{
				name: "Fiery Breath",
				description: "Chimeras breathe fire using the Cone Template. Every target within this cone may make an Agility roll at –2 to avoid the attack. Those who fail suffer 2d10 damage and must check to see if they catch fire. A chimera may not attack with its claws or bite in the same round it breathes fire."
			},
			{
				name: "Improved Frenzy",
				description: "If a chimera does not use its Fiery Breath Ability, it may make an additional Fighting attack with no penalty."
			},
			{
				name: "Size +2",
				description: "Chimera weigh over 500 pounds."
			},
			{
				name: "Two Fisted",
				description: "A chimera may attack with its claws and bite in the same round with no multi-action penalty."
			}
		),
		book: currentBook,

		page: "p107"
	},
	{
		name: "Citizen",
		tags: "farmer,crafter,blacksmith,normal,dude,guy,waitress,bartender,average,joe,",
		wildcard: 0,
		image: "",
		blurb: "\"Citizens\" covers everything from farmers to crafters.",
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d6",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d4",
			'Knowledge (Trade)' : "d6",
			'Notice' : "d6",
			'Shooting' : "d4",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "4",
		toughness: "5",
		armor: "",
		edges: "",
		hindrances: "",
		treasure: "Meager for every 5 citizens, Worthwhile for crafters, merchants, and the like",
		gear: "Knife (Str+d4), improvised weapons (Str+d4)",
		abilities: Array (

		),
		book: currentBook,

		page: "p108"
	},
	{
		name: "Crab, Giant",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: "Giant crabs live on beaches, hiding under the sand ready to leap out at passing prey.",
		attributes: {
			agility: "d8",
			smarts: "d4 (A)",
			spirit: "d8",
			strength: "d10",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d8",
			'Stealth' : "d10",
			'Swim' : "d8",
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "10",
		armor: "3",
		edges: "",
		hindrances: "",
		treasure: "Meager, in lair",
		gear: "",
		abilities: Array (
			{
				name: "Armor +3",
				description: "Giant crabs have thick shells."
			},
			{
				name: "Claws",
				description: "Str+d6."
			},
			{
				name: "Size +1",
				description: "These creatures weigh over 400 pounds."
			}
		),
		book: currentBook,

		page: "p108"
	},
	{
		name: "Crocotta",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: "The crocotta looks like a wolf except for its jaws, which are as long as a crocodile’s. Its jaws are powerful enough to bite through almost any material.",
		attributes: {
			agility: "d8",
			smarts: "d6 (A)",
			spirit: "d6",
			strength: "d8",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d10"
		},
		charisma: "",
		pace: "8",
		parry: "5",
		toughness: "4",
		armor: "",
		edges: "",
		hindrances: "",
		treasure: "Meager, in lair.",
		gear: "",
		abilities: Array (
			{
				name: "Bite",
				description: "Str+d10, AP 10"
			},
			{
				name: "Fleet Footed",
				description: "The crocotta rolls a d10 when running instead of a d6."
			},
			{
				name: "Size -1",
				description: "A crocotta is the same size as a dog."
			}
		),
		book: currentBook,

		page: "p108"
	},
	{
		name: "Cyclops",
		tags: "giant,giants,",
		wildcard: 0,
		image: "http://www.cartuneland.com/cyclops1.jpg",
		blurb: "Cyclopses are a race of one-eyed giants. Despite raising herds of goats, they have a taste for human flesh. In some legends, they crafted lightning bolts for the gods.",
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d6",
			strength: "d12+3",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Notice' : "d6",
			'Throwing' : "d8"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "8",
		armor: "",
		edges: "",
		hindrances: "",
		treasure: "Meager",
		gear: "Big club (Str+d10)",
		abilities: Array (
			{
				name: "Lightning Bolts",
				description: "A cyclops may throw a lightning bolt as an action. Range: 5/10/20; Damage: 3d6; Small Burst Template."
			},
			{
				name: "One Eye",
				description: "–2 to all trait rolls involving depth perception, such as Throwing."
			},
			{
				name: "Size +2",
				description: "Cyclops stand over 8’ tall."
			}
		),
		book: currentBook,

		page: "p108"
	},
	{
		name: "Black Knight",
		tags: "demon,devil,",
		wildcard: 0,
		image: "http://www.pixel77.com/wp-content/uploads/2010/03/dark_knight_by_zeo_x.jpg",
		blurb: Array (
				"Clad in jet-black plate armor and armed with weapons swathed in balefire, black knights are the elite troops of the demon lords. Beneath their armor is a mummified corpse with burning green eyes.",
				"They most often serve as unit commanders in demonic armies, but can sometimes be found as bodyguards for powerful, evil wizards and priests. Many ride nightmares."
			),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d10",
			strength: "d12",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d10",
			'Intimidation' : "d10",
			'Knowledge (Battle) ' : "d10",
			'Riding' : "d10"
		},
		charisma: "",
		pace: "6",
		parry: "9",
		toughness: "11",
		armor: "3",
		edges: "",
		hindrances: "",
		treasure: "None",
		gear: "",
		abilities: Array (
			{
				name: "Arcane Resistance",
				description: "+2 Armor against damage-causing powers and +2 on trait rolls to resist opposed powers."
			},
			{
				name: "Armor +3",
				description: "Black plate armor and a closed helm."
			},
			{
				name: "Balefire Weapon",
				description: "Great sword (Str+d10) and lance (Str+d10), if mounted. Anyone struck by a weapon, whether injured or not, has a chance of catching fire."
			},
			{
				name: "Demon",
				description: "+2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron."
			},
			{
				name: "Elite Soldiers",
				description: "Black knights have the following Combat Edges: Combat Reflexes, Improved Block, Improved Frenzy, Improved Sweep, and Level Headed."
			},
			{
				name: "Size +1",
				description: "Black knights stand over 7’ tall."
			},
			{
				name: "Summon Reinforcements",
				description: "Once per day a black knight can summon forth 1d6 demonic soldiers per success and raise on a Spirit roll. The minions appear within 6” of the knight."
			},
			{
				name: "Weakness (Cold Iron)",
				description: "Demons take normal damage from cold iron weapons."
			}
		),
		book: currentBook,

		page: "p109"
	},
	{
		name: "Changeling",
		tags: "demon,devil,",
		wildcard: 0,
		image: "",
		blurb: Array (
				"In their natural form, changelings resemble skinless humans devoid of any distinguishing features, save for their gruesome appearance. Changelings have the ability to assume the exact form of their victims, taking on their mannerisms and retaining their memories.",
				"Regardless of the form they assume, they keep their own attributes. Thus, a changeling who assumes the form of a human with a d10 Strength may look physically impressive but lacks the muscle power of the original. However, a changeling absorbs its victim’s memories. It gains all its victim’s skills at one die type lower (minimum d4) unless its own skills are higher—in which case it retains its own levels.",
				"Changelings are used as infiltrators and assassins."
			),
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d6",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d8",
			'Stealth' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "5",
		armor: "0",
		edges: "",
		hindrances: "",
		treasure: "None",
		gear: "As last victim",
		abilities: Array (
			{
				name: "Change Form",
				description: "A changeling can assume the form of the last person it has killed. This requires an action and a Smarts roll at –2. Changing back to their natural form requires a Smarts roll. Changelings only assume the physical form—clothing and equipment must be taken from the corpse."
			},
			{
				name: "Demon",
				description: "+2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron."
			},
			{
				name: "Fear -2",
				description: "Anyone who sees a changeling in its natural form must make a Fear check at –2."
			},
			{
				name: "Weakness (Cold Iron)",
				description: "Demons take normal damage from cold iron weapons."
			}
		),
		book: currentBook,

		page: "p109"
	},
	{
		name: "Collector",
		tags: "demon,devil,",
		wildcard: 0,
		image: "",
		blurb: Array (
				"Mortals sometimes make deals with powerful demon lords in the hope of accruing power—sometimes they try to renege on the deal. When this happens, the demon lords despatch a demon whose task it is to drain souls and return them to Hell. Collectors are sometimes used as common assassins, but they are at best halfhearted in this role, finding it beneath them.",
				"Although powerful, they are not interested in wanton destruction—all that matters to them is their quarry. Of course, any creature foolish enough to stand in its way is slaughtered without mercy.",
				"Collectors always wear black, heavy cowls. They reveal their face only to those they are hunting, for it is said that to gaze on one is to lose one’s soul.",
				"Beneath their cowls, collectors resemble bipedal vultures with rotting flesh. Their eyes are empty hollows, in which a vortex of balefire swirls."
			),
		attributes: {
			agility: "d10",
			smarts: "d8",
			spirit: "d12",
			strength: "d12",
			vigor: "d12"
		},
		skills: {
			'Fighting' : "d10",
			'Intimidation' : "d12",
			'Notice' : "d8",
			'Stealth' : "d12",
			'Tracking' : "d12+2"
		},
		charisma: "",
		pace: "8",
		parry: "7",
		toughness: "9",
		armor: "0",
		edges: "",
		hindrances: "",
		treasure: "None",
		gear: "",
		abilities: Array (
			{
				name: "Claws",
				description: "Str+d6. The claws of a collector ignore all mundane and magical Armor."
			},
			{
				name: "Demon",
				description: "+2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron."
			},
			{
				name: "Fear -2",
				description: "Collectors exude an aura of terror. Anyone seeing one must make a Fear roll at –2."
			},
			{
				name: "Improved Arcane Resistance",
				description: "+4 Armor against damage-causing powers and +4 on trait rolls to resist opposed powers."
			},
			{
				name: "Single Minded",
				description: "Collectors are not easily swayed from their goal. They receive a +2 bonus to resist Tests of Will."
			},
			{
				name: "Size +1",
				description: "These cowled demons stand over 7’ tall."
			},
			{
				name: "Soul Drain",
				description: "The uncowled stare of a collector can literally rip the soul from a living being. Fortunately, they usually reserve this fate for their quarry. To use this Ability, the collector must grapple its foe, at which point it removes its cowl and forces its prey to stare into its demonic eyes. The victim must make an opposed Spirit roll or die instantly."
			},
			{
				name: "Unnatural Senses",
				description: "A collector can detect arcana as if it were part of its normal vision. It also ignores all pentalties for bad lighting, including complete darkness"
			},
			{
				name: "Weakness (Cold Iron)",
				description: "Demons take normal damage from cold iron weapons."
			}
		),
		book: currentBook,

		page: "p110"
	},
	{
		name: "Demonic Soldier",
		tags: "demon,devil,",
		wildcard: 0,
		image: "",
		blurb: Array (
				"Making up the bulk of the legions of Hell are demonic soldiers, small, feral creatures with sharp teeth and claws and only a limited capacity for reasoning. They attack with berserk fury, ripping their prey to shreds with howls of glee. Demon lords use them in “human-wave” tactics and rarely bother to provide them with armor or weapons."
			),
		attributes: {
			agility: "d8",
			smarts: "d4",
			spirit: "d6",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "5",
		armor: "0",
		edges: "",
		hindrances: "",
		treasure: "None",
		gear: "",
		abilities: Array (
			{
				name: "Berserk",
				description: "Demonic soldiers can go berserk at will."
			},

			{
				name: "Bite/Claws",
				description: "Str+d6."
			},
			{
				name: "Demon",
				description: "+2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron."
			},
			{
				name: "Size -1",
				description: "Demonic soldiers are rarely larger than 4’ tall."
			},
			{
				name: "Weakness (Cold Iron)",
				description: "Demons take normal damage from cold iron weapons."
			}
		),
		book: currentBook,

		page: "p110-111"
	},
	{
		name: "Imp",
		tags: "demon,devil,",
		wildcard: 0,
		image: "",
		blurb: Array (
				"Imps are small, winged demons. They are often sent to the material world to serve as familiars to honored wizards. Although they aid their new masters, they also report back to their demonic overlords and are thus useful spies."
			),
		attributes: {
			agility: "d10",
			smarts: "d10",
			spirit: "d6",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d10",
			'Spellcasting' : "d8",
			'Stealth' : "d8"
		},
		charisma: "",
		pace: "4",
		parry: "5",
		toughness: "4",
		armor: "0",
		edges: "",
		hindrances: "",
		treasure: "None",
		gear: "",
		abilities: Array (
			{
				name: "Arcane Resistance",
				description: "+2 Armor against damage-causing powers and +2 on trait rolls to resist opposed powers."
			},
			{
				name: "Claws",
				description: "Str+d4."
			},
			{
				name: "Demon",
				description: "+2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron."
			},
			{
				name: "Powers",
				description: "Imps have 20 Power Points and know the following powers: bolt, detect/ conceal arcana, entangle, invisibility, obscure, and shape change."
			},
			{
				name: "Lending",
				description: "An imp can share its Power Points with its master. It cannot be forced to share its power."
			},
			{
				name: "Size -1",
				description: "Imps are the size of small children."
			},
			{
				name: "Weakness (Cold Iron)",
				description: "Demons take normal damage from cold iron weapons."
			}
		),
		book: currentBook,

		page: "p111"
	},
	{
		name: "Lasher",
		tags: "demon,devil,",
		wildcard: 0,
		image: "",
		blurb: Array (
				"Lashers are demonic taskmasters, using their barbed whips to keep lesser demons in line. Considerably larger than humans, they resemble an unholy giant bat with blackened, iron scales. They can be summoned into the world through dark rituals, but are usually only employed when a number of lesser demons need controlling."
			),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d10",
			strength: "d12+3",
			vigor: "d12"
		},
		skills: {
			'Fighting' : "d10",
			'Intimidation' : "d12",
			'Knowledge (Battle)' : "d6",
			'Notice' : "d8"
		},
		charisma: "",
		pace: "8",
		parry: "7",
		toughness: "14",
		armor: "3",
		edges: "",
		hindrances: "",
		treasure: "None",
		gear: "",
		abilities: Array (
			{
				name: "Arcane Resistance",
				description: "+2 Armor against damage-causing powers and +2 on trait rolls to resist opposed powers."
			},
			{
				name: "Armor +3",
				description: "Iron Scales"
			},
			{
				name: "Barbed Whip",
				description: "Str+d8, Reach 2. Anyone struck by the whip, whether they are injured or not, must make a Vigor roll or be Shaken by the immense pain caused by the barbs. They cannot attempt to recover for 1d6 rounds after the attack."
			},
			{
				name: "Demon",
				description: "+2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron."
			},
			{
				name: "Fear",
				description: "Anyone seeing a lasher must make a Fear check at –2."
			},
			{
				name: "Flight",
				description: "Lashers have a Flying Pace of 12\" and a Climb of 6\""
			},
			{
				name: "Infravision",
				description: "Lashers halve penalties for poor lighting against living targets."
			},
			{
				name: "Size +3",
				description: "Lashers stand 9’ tall and weigh over 1000 pounds."
			},
			{
				name: "Sweep",
				description: "By whirling its whip round, a lasher can attack all opponents within 2” at no penalty."
			},
			{
				name: "Weakness (Cold Iron)",
				description: "Demons take normal damage from cold iron weapons."
			}
		),
		book: currentBook,

		page: "p111"
	},
	{
		name: "Succubus/Incubus",
		tags: "demon,devil,",
		wildcard: 0,
		image: "http://blaine.org/sevenimpossiblethings/wp-content/uploads/2009/08/incubus.jpg",
		image2: "http://viciousmim.files.wordpress.com/2012/05/succubi.png",
		blurb: Array (
				"Succubi and incubi resemble beautiful females and males respectively. This form is illusory, however, and in their natural form they are winged demons with grotesque faces, leathery skin, and long claws. They use their illusory looks to lure unsuspecting victims into their deadly embrace."
			),
		attributes: {
			agility: "d8",
			smarts: "d8",
			spirit: "d10",
			strength: "d10",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d6",
			'Persuasion' : "d12+2"
		},
		charisma: "+6",
		pace: "6",
		parry: "6",
		toughness: "6",
		armor: "",
		edges: "",
		hindrances: "",
		treasure: "None",
		gear: "",
		abilities: Array (
			{
				name: "Claws",
				description: "Str+d4."
			},
			{
				name: "Demon",
				description: "+2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron."
			},
			{
				name: "Life Drain",
				description: "These foul creatures have more than one way to kill. If a succubus or incubus kisses a victim, they must make a Vigor roll opposed by the demon’s Spirit or lose one die of Vigor. If Vigor drops to zero, the demon has sucked out the victim’s life force, killing him. Assuming the victim survives, lost Vigor returns at the rate of one die per day."
			},
			{
				name: "Lure",
				description: "Sometimes good looks aren’t enough to lure prey to their doom. These demons can use the puppet power using their Spirit as their arcane skill. They have 20 Power Points for this purpose."
			},
			{
				name: "Very Attractive",
				description: "Succubi and Incubi resemble stunningly beautiful creatures in their illusory form. They can assume the shape of any sentient being. Their illusory appearance gives them +6 Charisma. A detect arcana spell can penetrate the illusion."
			},
			{
				name: "Weakness (Cold Iron)",
				description: "Demons take normal damage from cold iron weapons."
			}
		),
		book: currentBook,

		page: "p111-p112"
	},
	{
		name: "Dire Wolf",
		wildcard: 0,
		image: "",
		blurb: "Dire wolves are very large and feral wolves often used by orcs as attack dogs. They may also be found roaming in packs in the deepest, darkest woods.",
		attributes: {
			agility: "d8",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			 'Fighting' : "d8",
			 'Intimidation' : "d8",
			 'Notice' : "d8"
		},
		charisma: "",
		pace: "10",
		parry: "6",
		toughness: "6",
		armor: "",
		edges: "",
		hindrances: "",
		treasure: "None.",
		gear: "",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d6"
			},
			{
				name: "Go for the Throat",
				description: "Wolves instinctively go for an opponent’s soft spots. With a raise on its attack roll, it hits the target’s most weakly-armored location."
			},
			{
				name: "Fleet-Footed",
				description: "Dire wolves roll d10s instead of d6s when running."
			}
		),
		book: currentBook,

		page: "p112"
	},
	{
		name: "Dissolver",
		wildcard: 0,
		image: "",
		blurb: "These vile terrors are black, amorphous blobs whose secretions are highly acidic. Their favorite tactic is to grapple their prey, subjecting them to constant attack.",
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d4",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			 'Fighting' : "d6"
		},
		charisma: "",
		pace: "2",
		parry: "5",
		toughness: "6",
		armor: "",
		edges: "",
		hindrances: "",
		treasure: "Meager.",
		gear: "",
		abilities: Array(
			{
				name: "Acid",
				description: "Str+d6"
			},
			{
				name: "Camouflage",
				description: "When lying still, dissolvers gain +4 to Stealth rolls."
			},
			{
				name: "Envelope",
				description: "If a dissolver succeeds in a Fighting roll it has enveloped part of its target. Each round the victim remains enveloped, he suffers 2d6 damage. All equipment permanently loses 1 point of Toughness (Protection for armor) per round until it reaches zero, at which point it is destroyed. Trying to escape from a grapple requires a Strength roll at –6. A dissolver may only envelope one foe at a time, regardless of its size."
			},
			{
				name: "Pseudopod",
				description: "A dissolver can extend a single pseudopod out to 1\". Damage 2d6."
			}
		),
		book: currentBook,

		page: "p112"
	},
	{
		name: "Dragon",
		wildcard: 1,
		image: "http://www.gamefront.com/wp-content/uploads/2008/12/red-dragon.jpg",
		blurb: "This dragon is the standard fire-breathing variety common to European mythology. If you want to use different types of dragons in your game, the Variant Dragons sidebar (p113) contains some ideas on how to make them different.",
		attributes: {
			agility: "d8",
			smarts: "d8",
			spirit: "d10",
			strength: "d12+9",
			vigor: "d12"
		},
		skills: {
			 'Fighting' : "d10",
			 'Intimidation' : "d12",
			 'Notice' : "d12"
		},
		charisma: "",
		pace: "8",
		parry: "7",
		toughness: "20",
		treasure: "Three Treasure Troves in lair",
		armor: "4",
		abilities: Array(
			{
				name: "Armor+4",
				description: "Scaly hide."
			},
			{
				name: "Claws/Bite",
				description: "Str+d8."
			},
			{
				name: "Fear-2",
				description: "Anyone who sees a mighty dragon must make a Fear check at –2."
			},
			{
				name: "Fiery Breath",
				description: "Dragons breathe fire using the Cone Template. Every target within this cone may make an Agility roll at –2 to avoid the attack. Those who fail suffer 2d10 damage and must check to see if they catch fire. A dragon may not attack with its claws or bite in the round it breathes fire."
			},
			{
				name: "Flight",
				description: "Dragons have a Flying Pace of 24” and Climb 0."
			},
			{
				name: "Hardy",
				description: "The creature does not suffer a wound from being Shaken twice."
			},
			{
				name: "Huge",
				description: "Attackers add +4 to their Fighting or Shooting rolls when attacking a dragon due to its massive size."
			},
			{
				name: "Improved Frenzy",
				description: "If a dragon does not use its Fiery Breath ability, it may make two Fighting attacks with no penalty."
			},
			{
				name: "Level Headed",
				description: "Act on best of two cards."
			},
			{
				name: "Size +8",
				description: "Dragons are massive creatures. This version is over 40’ long from nose to tail, and weighs well over 30,000 pounds."
			},
			{
				name: "Tail Lash",
				description: "The dragon can sweep all opponents in its rear facing in a 3” long by 6” wide square. This is a standard Fighting attack, and damage is equal to the dragon’s Strength –2."
			}
		),
		book: currentBook,

		page: "p112-p113"
	},
	{
		name: "Dragon Man Soldier",
		tags: "dragon,dragon men,",
		wildcard: 0,
		image: "http://suptg.thisisnotatrueending.com/archive/10417239/images/1276223355554.jpg",
		blurb: Array(
			"Dragon men are bipedal dragons, slightly taller than an average human. Scholars have long debated whether they are a natural species, a mutated dragon embryo, or the result of some ancient arcane experiment. The race consists of two castes—warriors and sorcerers.",
			"They are sometimes found working with true dragons, and it seems beyond coincidence that the color of their scales usually matches that of their dragon lord. If you are using the Variant Dragon options (p113), dragon men can also have different breath weapons ."
		),
		attributes: {
			agility: "d8",
			smarts: "d8",
			spirit: "d6",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Notice' : "d8",
			'Shooting' : "d8",
			'Stealth' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "8",
		treasure: "Meager.",
		gear: "Scimitar (Str+d8)",
		edges: "Brave, Combat Reflexes, Frenzy",
		armor: "2",
		abilities: Array(
			{
				name: "Armor+2",
				description: "Scaly hide."
			},
			{
				name: "Bite/Claws",
				description: "Str+d4."
			},

			{
				name: "Fiery Breath",
				description: "Dragon men can spit balls of fire. This works as the bolt power using Shooting to aim the fireballs. The Ability is innate rather than magical. Dragon men have 15 Power Points for this purpose only."
			},
			{
				name: "Flight",
				description: "Dragon men have leathery wings with a Flying Pace of 8\" and a Climb of 4\""
			}
		),
		book: currentBook,

		page: "p114"
	},
	{
		name: "Dragon Man Sorcerer",
		tags: "dragon,dragon men,",
		wildcard: 1,
		image: "http://i42.tinypic.com/2qjayk5.png",
		blurb: Array(
			"Dragon men are bipedal dragons, slightly taller than an average human. Scholars have long debated whether they are a natural species, a mutated dragon embryo, or the result of some ancient arcane experiment. The race consists of two castes—warriors and sorcerers.",
			"They are sometimes found working with true dragons, and it seems beyond coincidence that the color of their scales usually matches that of their dragon lord. If you are using the Variant Dragon options (p113), dragon men can also have different breath weapons."
		),
		attributes: {
			agility: "d8",
			smarts: "d10",
			spirit: "d10",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d6",
			'Intimidation' : "d8",
			'Notice' : "d8",
			'Shooting' : "d8",
			'Spellweaving' : "d10",
			'Stealth' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "8",
		treasure: "Meager.",
		gear: "Scimitar (Str+d8)",
		edges: "Combat Reflexes, Frenzy",
		armor: "2",
		abilities: Array(
			{
				name: "Armor+2",
				description: "Scaly hide."
			},
			{
				name: "Bite/Claws",
				description: "Str+d4."
			},

			{
				name: "Fiery Breath",
				description: "Dragon men can spit balls of fire. This works as the bolt power using Shooting to aim the fireballs. The Ability is innate rather than magical. Dragon men have 15 Power Points for this purpose only."
			},
			{
				name: "Flight",
				description: "Dragon men have leathery wings with a Flying Pace of 8\" and a Climb of 4\""
			},
			{
				name: "Powers",
				description: "Dragon men sorcerers have 30 Power Points and know the following powers: armor, blast, deflection, detect/conceal arcana, dispel, fear, healing, obscure, shape change, smite, and speak language."
			}
		),
		book: currentBook,

		page: "p114"
	},
	{
		name: "Drake",
		wildcard: 1,
		image: "http://img2.wikia.nocookie.net/__cb20080714125534/finalfantasy/images/5/52/Greater_Drake_ffx-2.jpg",
		blurb: "Drakes are non-flying dragons with animal intelligence (rather than the more human-like sentience of true dragons). They are much more aggressive in direct combat than their distant cousins, however.",
		attributes: {
			agility: "d6",
			smarts: "d6 (A)",
			spirit: "d10",
			strength: "d12+6",
			vigor: "d12"
		},
		skills: {
			 'Fighting' : "d10",
			 'Intimidation' : "d12",
			 'Notice' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "7",
		toughness: "17",
		armor: "4",
		abilities: Array(
			{
				name: "Armor+4",
				description: "Scaly hide."
			},
			{
				name: "Claws/Bite",
				description: "Str+d8."
			},
			{
				name: "Fear",
				description: "Drakes are frightening creatures to behold."
			},
			{
				name: "Fiery Breath",
				description: "Drakes breathe fire using the Cone Template. Every target within this cone may make an Agility roll at –2 to avoid the attack. Those who fail suffer 2d10 damage and must check to see if they catch fire (see Fire). A drake may not attack with its claws or bite in the round it breathes fire."
			},
			{
				name: "Large",
				description: "Attackers add +2 to their attack rolls when attacking a drake due to its large size."
			},
			{
				name: "Size +5",
				description: "Drakes are over 20’ long from snout to tail, and weigh in at over 3000 pounds."
			},
			{
				name: "Tail Lash",
				description: "A drake can sweep all opponents in its rear facing in a 3” long by 6” wide rectangle. This is a standard Fighting attack, and damage is equal to the creature’s Strength –2."
			}
		),
		book: currentBook,

		page: "p114"
	},
	{
		name: "Dryad",
		wildcard: 0,
		image: "",
		blurb: Array (
			"Dryads are nature spirits, specifically those of the woodlands. Shy by nature, they prefer to watch intruders, only making their presence felt if the need arises. They get along well with elves and other woodland folk of good character.",
			"Though they are usually reluctant to deal with outsiders dryads, have been known to administer aid to kind souls in great need."
		),
		attributes: {
			agility: "d8",
			smarts: "d10",
			spirit: "d10",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d4",
			'Notice' : "d10",
			'Persuasion' : "d8",
			'Spellcasting' : "d10",
			'Stealth' : "d10"
		},
		charisma: "+2",
		pace: "6",
		parry: "4",
		treasure: "None.",
		toughness: "5",
		armor: "",
		abilities: Array(
			{
				name: "Animate Tree",
				description: "A dryad may animate her tree as a war tree (see War Tree). This costs 20 Power Points and has a fixed duration of one hour."
			},
			{
				name: "Attractive",
				description: "Dryads resemble attractive human females, but often have a green or brown tint to their skin."
			},
			{
				name: "Magic",
				description: "Dryads have 30 Power Points and know the following powers: armor (bark), barrier (wall of thorns), beast friend, deflection (tree branches get in the way), entangle, healing, shape change, and stun."
			},
			{
				name: "Tree Bond",
				description: "Dryads share their soul with a particular tree. They must remain within 36” of the tree or their magic does not work. If the tree dies or becomes unhealthy, so does the dryad (and vice versa)."
			}
		),
		book: currentBook,

		page: "p115"
	},
	{
		name: "Dwarf",
		wildcard: 0,
		image: "",
		blurb: Array (
			"Dwarves are common in mountains, where they live in vast underground cities. The statistics presented here are for a typical dwarf warrior."
		),
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d6",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d8",
			'Knowledge (Stonecraft)' : "d6",
			'Intimidation' : "d6",
			'Notice' : "d6",
			'Stealth' : "d6",
			'Thowing' : "d8"
		},
		charisma: "",
		pace: "5",
		parry: "7",
		toughness: "8",
		treasure: "Meager.",
		gear: "Chain mail (+2), open helm (+3), battle axe (Str+d8), medium shield (+1 Parry), throwing axes (Range: 3/6/12, Damage: Str+d6)",
		armor: "2",
		abilities: Array(
			{
				name: "Low Light Vision",
				description: "Dwarves penalties for Dim and Dark lighting."
			}
		),
		book: currentBook,

		page: "p115"
	},
	{
		name: "Earth Elemental",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Elementals are living spirits of earth, fire, water, and air. These are average examples of such creatures. They may be more or less powerful in specific settings.",
			"Earth elementals manifest as five-foot tall, vaguely man-shaped collections of earth and stone. Though amazingly strong, they are also quite slow and ponderous."
		),
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d6",
			strength: "d12+3",
			vigor: "d10"
		},
		skills: {
			 'Fighting' : "d8",
			 'Notice' : "d4"
		},
		charisma: "",
		pace: "4",
		parry: "6",
		toughness: "11",
		treasure: "None",
		armor: "4",
		abilities: Array(
			{
				name: "Armor +4",
				description: "Rocky hide."
			},
			{
				name: "Bash",
				description: "Str+d6"
			},
			{
				name: "Elemental",
				description: "No additional damage from called shots;Fearless; Immune to disease and poison."
			}
		),
		book: currentBook,

		page: "p116"
	},
	{
		name: "Fire Elemental",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Elementals are living spirits of earth, fire, water, and air. These are average examples of such creatures. They may be more or less powerful in specific settings.",
			"Fire elementals appear as man-shaped flame."
		),
		attributes: {
			agility: "d12+1",
			smarts: "d8",
			spirit: "d8",
			strength: "d4",
			vigor: "d6"
		},
		skills: {
			'Climbing' : "d8",
			'Fighting' : "d10",
			'Notice' : "d6",
			'Shooting' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "7",
		toughness: "5",
		treasure: "None",
		armor: "0",
		abilities: Array(
			{
				name: "Elemental",
				description: "No additional damage from called shots;Fearless; Immune to disease and poison."
			},
			{
				name: "Invulnerability",
				description: "Fire Elementals are immune to all non-magical attacks, but suffer 1d6 damage when doused in at least a gallon of water, +2 per additional gallon."
			},
			{
				name: "Fiery Touch",
				description: "Str+d6; chance of catching fire."
			},

			{
				name: "Flame Strike",
				description: "Fire elementals can project a searing blast of flame using the Cone Template. Characters within the cone must beat the spirit’s Shooting roll with Agility or suffer 2d10 damage, plus the chance of catching fire."
			}

		),
		book: currentBook,

		page: "p116"
	},
	{
		name: "Water Elemental",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Elementals are living spirits of earth, fire, water, and air. These are average examples of such creatures. They may be more or less powerful in specific settings.",
			"Water spirits are frothing, man-shaped creatures of water and sea-foam."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d6",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d6",
			'Shooting' : "d8",
			'Swimming' : "d12+2"
		},
		charisma: "",
		pace: "6",
		treasure: "None",
		parry: "6",
		toughness: "7",
		armor: "0",
		abilities: Array(
			{
				name: "Aquatic",
				description: "Pace 12"
			},
			{
				name: "Elemental",
				description: "No additional damage from called shots;Fearless; Immune to disease and poison."
			},
			{
				name: "Invulnerability",
				description: "Water elementals are immune to all non-magical attacks except fire. A torch or lantern causes them 1d6 damage but is instantly put out if it hits."
			},
			{
				name: "Seep",
				description: "Water elementals can squeeze through any porous gap as if it were Difficult Ground."
			},
			{
				name: "Slam",
				description: "Str+d6; nonleathal damage."
			},

			{
				name: "Waterspout",
				description: "Water spirits can project a torrent of water using the Cone Template. Those in the area may make an Agility roll opposed by the spirit’s Shooting to avoid it or suffer 2d8 nonlethal damage. This puts out any normal fires."
			}

		),
		book: currentBook,

		page: "p116-117"
	},
	{
		name: "Air Elemental",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Elementals are living spirits of earth, fire, water, and air. These are average examples of such creatures. They may be more or less powerful in specific settings.",
			"Air elementals manifest as sentient whirlwinds."
		),
		attributes: {
			agility: "d12",
			smarts: "d6",
			spirit: "d6",
			strength: "d8",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d8",
			'Shooting' : "d6"
		},
		charisma: "",
		pace: "-",
		parry: "6",
		treasure: "None",
		toughness: "5",
		armor: "0",
		abilities: Array(
			{
				name: "Elemental",
				description: "No additional damage from called shots;Fearless; Immune to disease and poison."
			},
			{
				name: "Ethereal",
				description: "Air Elementals can maneuver through any non-solid surface. They can seep through the cracks in doors, bubble through water, and rush through sails."
			},
			{
				name: "Flight",
				description: "Air Elementals fly at a rate of 6” with a Climb of 3. They may not run."
			},
			{
				name: "Invulnerability",
				description: " Immune to all non-magical attacks except fire."
			},
			{
				name: "Push",
				description: "The air elemental can use an action to push a single adjacent target 1d6” directly away with a concentrated blast of air. The victim makes a Strength roll, with each success and raise reducing the amount moved by 1” (to a minimum of 0)."
			},
			{
				name: "Wind Blast",
				description: "Air Elementals can send directed blasts of air at foes using the Cone Template and a Shooting roll. Foes may make an opposed Agility roll to avoid the blast. The damage is 2d6 points of nonlethal damage."
			},
			{
				name: "Whirlwind",
				description: "As long as the air elemental does not move that turn it may attempt to pick up a foe. Make an opposed Strength check and if the air elemental wins then its foe is pulled into the swirling maelstrom of its body. While trapped, the target is at –2 on all rolls including damage, to hit and Strength rolls to free himself. The air elemental cannot move as long as it wants to keep foes trapped inside its form."
			}

		),
		book: currentBook,

		page: "p115-p116"
	},
	{
		name: "Elephant, War",
		wildcard: 0,
		image: "",
		blurb: Array(
			"War elephants are larger than standard bull elephants and are bred purely for battle. In war, they carry a wooden platform on their back, housing the steersman and three soldiers."
		),
		attributes: {
			agility: "d6",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d12+8",
			vigor: "d12"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d4"
		},
		charisma: "",
		pace: "-",
		parry: "6",
		treasure: "None",
		toughness: "5",
		armor: "0",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Thick Hide"
			},
			{
				name: "Hardy",
				description: "War elephants do not suffer a wound from being Shaken twice."
			},
			{
				name: "Headbutt",
				description: "Str+d6. Heavy Weapon. A war elephant cannot headbutt anything of Size +3 or smaller."
			},
			{
				name: "Huge",
				description: "Attackers have +4 to attack rolls against these beasts due to their size."
			},
			{
				name: "Platform",
				description: "The wooden platform provides Light Cover to anyone riding in it and grants +2 Armor."
			},
			{
				name: "Size +8",
				description: "War elephants weigh over 20,000 pounds."
			},
			{
				name: "Trample",
				description: "As long as the air elemental does not move that turn it may attempt to pick up a foe. Make an opposed Strength check and if the air elemental wins then its foe is pulled into the swirling maelstrom of its body. While trapped, the target is at –2 on all rolls including damage, to hit and Strength rolls to free himself. The air elemental cannot move as long as it wants to keep foes trapped inside its form."
			},
			{
				name: "Tusks",
				description: "Str+d10. The tusks of a war elephant are fitted with spiked, metal caps."
			}

		),
		book: currentBook,

		page: "p117"
	},
	{
		name: "Elf",
		wildcard: 0,
		image: "",
		blurb: Array (
			"Elves commonly inhabit forests, living in tune with nature. The statistics presented here are for a typical elf warrior."
		),
		attributes: {
			agility: "d10",
			smarts: "d6",
			spirit: "d6",
			strength: "d6",
			vigor: "d8"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d8",
			'Notice' : "d8",
			'Shooting' : "d10",
			'Stealth' : "d8",
			'Survival' : "d8",
			'Tracking' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "6",
		treasure: "Meager per 3 warriors.",
		gear: "Leather armor (+1), long sword (Str+d8), long bow (Range: 15/30/60, Damage: 2d6)",
		armor: "1",
		hindrances: "All Thumbs, Cautious",
		edges: "Combat Reflexes, Marksman, Woodsman",
		abilities: Array(
			{
				name: "Low Light Vision",
				description: "Elves ignore penalties for Dim and Dark lighting."
			}
		),
		book: currentBook,

		page: "p117"
	},
	{
		name: "Fire Salamander",
		wildcard: 0,
		image: "",
		blurb: Array (
			"These bright orange creatures live in volcanic areas or baking-hot deserts. They can survive in moderate temperatures for several hours before needing to return to their infernal pits."
		),
		attributes: {
			agility: "d10",
			smarts: "d6",
			spirit: "d8",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			'Climbing' : "d10",
			'Fighting' : "d10",
			'Intimidation' : "d10",
			'Notice' : "d8",
			'Stealth' : "d10"
		},
		charisma: "",
		pace: "8",
		parry: "7",
		toughness: "7",
		treasure: "Worthwhile, in lair",
		gear: "Two flaming scimitars (Str+d10)",
		armor: "0",
		hindrances: "",
		edges: "",
		abilities: Array(
			{
				name: "Fiery Body",
				description: "Fire attacks cause no damage. Nonmagical attacks “melt” as they impact the salamander’s body. The creature has 4 points of armor against such attacks and the attacker must roll a d6. On a 5–6, wooden weapons catch fire. On a 6, metal weapons melt slightly and cause 1 less die of damage until repaired by a blacksmith. Anyone who attacks a fire salamander with their bare hands and hits suffers an automatic 2d6 damage. Salamanders often grapple their foes to scorch them in this manner."
			},
			{
				name: "Weakness (Water)",
				description: "Magical water-based attacks cause +4 damage. Nonmagical water has no additional effect."
			}
		),
		book: currentBook,

		page: "p117-p118"
	},
	{
		name: "Frost Wolf",
		wildcard: 0,
		image: "",
		blurb: Array (
			"Frost wolves haunt arctic climes, roaming the tundra in packs. Their thick fur is pure white, allowing them to blend in with the snow and ice."
		),
		attributes: {
			agility: "d8",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d10",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d10",
			'Stealth' : "d10"
		},
		charisma: "",
		pace: "8",
		parry: "5",
		toughness: "7",
		treasure: "None.",
		gear: "",
		armor: "0",
		hindrances: "",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d6"
			},
			{
				name: "Chill Bite",
				description: "The icy bite of a frost wolf can paralyze prey. Anyone Shaken or wounded must make a Vigor roll or be paralyzed for 1d6 rounds."
			},
			{
				name: "Fleet Footed",
				description: "Frost wolves have a d10 running die."
			},
			{
				name: "Go for the Throat",
				description: "If a frost wolf gets a raise on its attack roll, it strikes its opponent’s least armored location."
			},
			{
				name: "Immunity (Cold)",
				description: "Frost wolves take no damage from cold."
			},
			{
				name: "Size +1",
				description: "Frost wolves stand 5’ tall and are over 7’ long."
			}
		),
		book: currentBook,

		page: "p118"
	},
	{
		name: "Fury",
		wildcard: 0,
		image: "",
		blurb: Array (
			"Furies are savage, bestial creatures sent by the gods to punish worshippers for major transgressions. The exact form of a fury varies by deity, but all have sharp claws and wings of some description."
		),
		attributes: {
			agility: "d8",
			smarts: "d6 (A)",
			spirit: "d10",
			strength: "d10",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d6",
			'Persuasion' : "d6",
			'Taunt' : "d8",
			'Throwing' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "7",
		treasure: "None.",
		gear: "",
		armor: "1",
		hindrances: "",
		abilities: Array(
			{
				name: "Arcane Resistance",
				description: "+2 Armor against damage-causing powers and +2 on trait rolls to resist opposed powers."
			},
			{
				name: "Armor +1",
				description: "Hide"
			},
			{
				name: "Berserk",
				description: "Furies can become Berserk at will."
			},
			{
				name: "Claws",
				description: "Str+d4"
			},
			{
				name: "Flight",
				description: "Furies have a Flying Pace of 6\" and a Climb of 3\"."
			}
		),
		book: currentBook,

		page: "p118"
	},
	{
		name: "Natural Gargoyle",
		wildcard: 0,
		image: "",
		blurb: Array (
			"The little-known natural gargoyle is the base for the stone figures. They fly on leathery wings that fold flush with the body to prevent damage on jagged rocks. They perch on craggy rock faces waiting for prey, a tireless vigil that prompted their use in architecture."
		),
		attributes: {
			agility: "d8",
			smarts: "d4",
			spirit: "d6",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d10",
			'Intimidation' : "d8",
			'Notice' : "d6",
			'Stealth' : "d8"
		},
		charisma: "",
		pace: "4",
		parry: "7",
		toughness: "9",
		treasure: "Meager in nest",
		gear: "",
		armor: "2",
		hindrances: "",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Thick, leathery skin."
			},
			{
				name: "Bite/Claws",
				description: "Str+d6."
			},
			{
				name: "Camouflage",
				description: "Natural gargoyles receive +2 to Stealth rolls in rocky terrain due to their skin color."
			},
			{
				name: "Flight",
				description: "Furies have a Flying Pace of 10\" and a Climb of 4\"."
			}
		),
		book: currentBook,

		page: "p118"
	},
	{
		name: "Stone Gargoyle",
		wildcard: 0,
		image: "",
		blurb: Array (
			"Most gargoyles are lifeless statues used to impress or decorate, but some have been given magical life to serve as guardians. Whether they serve good or evil depends upon their controller’s whim."
		),
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d6",
			strength: "d12",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d10",
			'Intimidation' : "d8",
			'Notice' : "d6",
			'Stealth' : "d8"
		},
		charisma: "",
		pace: "3",
		parry: "7",
		toughness: "11",
		treasure: "None.",
		gear: "",
		armor: "4",
		hindrances: "",
		abilities: Array(
			{
				name: "Armor +4",
				description: "Body of stone.."
			},
			{
				name: "Construct",
				description: "+2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease."
			},
			{
				name: "Fearless",
				description: "Stone gargoyles are immune to fear and Intimidation."
			},
			{
				name: "Bite/Claws",
				description: "Str+d6."
			},
			{
				name: "Camouflage",
				description: "Stone gargoyles receive +2 to Stealth rolls to blend in with normal, decorative gargoyles on buildings."
			},
			{
				name: "Flight",
				description: "Furies have a Flying Pace of 10\" and a Climb of 4\"."
			},
			{
				name: "Plunge",
				description: "Gargoyles can literally drop like a rock. Any gargoyle that falls at least 4\" to attack may add +4 to its damage."
			}
		),
		book: currentBook,

		page: "p118-p119"
	},
	{
		name: "Ghost Blade",
		wildcard: 1,
		image: "",
		blurb: Array (
			"Ghost blades take the form of spectral warriors clutching a great sword. The ghostly figure is, in fact, a manifestation of the true creature—the blade.",
			"Ghost blades are created by swords used by great heroes fallen in battle. The memories of the former wielder become burned into the blade, which then creates a ghostly figure to carry it into battle. Ghost blades seek only to kill, not caring if their victims are helpless children or mighty dragons.",
			"The attributes are for the ghostly form, which cannot be harmed by any means so long as the sword is intact. Attacks against the sword are conducted as normal."
		),
		attributes: {
			agility: "d8",
			smarts: "d8 (A)",
			spirit: "d6",
			strength: "d10",
			vigor: "d4"
		},
		skills: {
			'Fighting' : "d12"
		},
		charisma: "",
		pace: "6",
		parry: "10",
		toughness: "12",
		treasure: "None.",
		gear: "",
		armor: "",
		hindrances: "",
		abilities: Array(
			{
				name: "Fearless",
				description: "Stone gargoyles are immune to fear and Intimidation."
			},
			{
				name: "Ghost Warrior",
				description: "The ghostly figure cannot be harmed or dispelled by any means. The sword, however, can be damaged as a regular character. The sword breaks when Incapacitated. Because the ghostly warrior is a figment of the sword’s memory and not a real being, it cannot be disarmed."
			},
			{
				name: "Great Sword",
				description: "Str+d10. Toughness: 12."
			},
			{
				name: "Improved Block",
				description: "+2 Parry"
			}
		),
		book: currentBook,

		page: "p119"
	},
	{
		name: "Ghoul",
		alternate_names: "undead,",
		wildcard: 0,
		image: "http://fc06.deviantart.net/fs70/f/2010/276/7/d/ghoul_by_kelsm-d300tgr.jpg",
		blurb: Array (
			"Ghouls are vile scavengers, feasting off carrion and unfortunate victims who cross their path."
		),
		attributes: {
			agility: "d10",
			smarts: "d6",
			spirit: "d6",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d8",
			'Notice' : "d8",
			'Stealth' : "d10",
			'Tracking' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "8",
		treasure: "Meager per 3 ghouls",
		gear: "",
		armor: "",
		hindrances: "",
		abilities: Array(
			{
				name: "Claws",
				description: "Str+d4."
			},
			{
				name: "Infravision",
				description: "Ghouls halve penalties (round down) for bad lighting when attacking living targets."
			},
			{
				name: "Keen Nose",
				description: "Ghouls get +2 to Notice and Tracking rolls against living targets."
			},
			{
				name: "Paralysis",
				description: "Victims of a ghoul’s claw attacks must make a Vigor roll at –2 or be paralyzed for 1d6 rounds."
			},
			{
				name: "Undead",
				description: "+2 Toughness; +2 to recover from being Shaken; No additional damage from called shots; Immune to disease and poison."
			}
		),
		book: currentBook,

		page: "p119-p120"
	},
	{
		name: "Common Giant",
		wildcard: 0,
		image: "",
		blurb: Array (
			"Giants come in several forms, but all share two common features—they are tall and they enjoy human flesh. Fortunately, they are also rather stupid.",
			"Depending on where they are found, these hulking brutes are known as forest giants, hill giants, mountain giants, or simply as giants. There are slight differences between the breeds, but not enough to separate them."
		),
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d6",
			strength: "d12+5",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d10",
			'Notice' : "d6",
			'Throwing' : "d8"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "13",
		treasure: "Worthwhile, in lair",
		gear: "Skins or furs (+1), Large maul or tree trunk (Str+d10, carried in one hand), thrown rock (Range: 6/12/24, Damage: 3d6)",
		armor: "1",
		hindrances: "",
		abilities: Array(
			{
				name: "Clueless",
				description: "Giants receive a –2 penalty to Common Knowledge rolls."
			},
			{
				name: "Improved Sweep",
				description: "Giants can attack all adjacent foes at no penalty."
			},
			{
				name: "Large",
				description: "Attackers gain +4 to attack rolls against giants due to their size."
			},
			{
				name: "Size +5",
				description: "Giants are over 20' tall."
			}
		),
		book: currentBook,

		page: "p120"
	},
	{
		name: "Fire Giant",
		wildcard: 0,
		image: "http://www.wizards.com/dnd/images/dun200_firegiant.jpg",
		blurb: Array (
			"Giants come in several forms, but all share two common features—they are tall and they enjoy human flesh. Fortunately, they are also rather stupid.",
			"Fire giants prefer to dwell in hot places, such as near volcanoes or in the middle of scorching-hot deserts. Their ruddy complexion and flame-red hair makes them easy to identify."
		),
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d6",
			strength: "d12+4",
			vigor: "d10"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d8",
			'Intimidation' : "d10",
			'Notice' : "d6",
			'Throwing' : "d6"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "14",
		treasure: "Worthwhile, in lair",
		gear: "Chain mail (+2), large great axe (Str+d12, carried in one hand), heated thrown rock (Range: 5/10/20, Damage: 3d6+2)",
		armor: "2",
		hindrances: "",
		abilities: Array(
			{
				name: "Fire Aura",
				description: "Fire giants radiate fearsome heat. At the end of movement, all adjacent foes suffer 2d6 damage."
			},
			{
				name: "Immunity (Heat)",
				description: "Fire giants take no damage from fire, including arcane powers with a fire or heat trapping."
			},
			{
				name: "Improved Sweep",
				description: "Fire giants can attack all adjacent foes at no penalty."
			},
			{
				name: "Large",
				description: "Attackers gain +4 to attack rolls against fire giants due to their size."
			},
			{
				name: "Size +5",
				description: "Fire giants are over 20' tall."
			},
			{
				name: "Weakness (Cold)",
				description: "Magical cold and ice attacks cause +4 damage. Nonmagical cold has no additional effect."
			}
		),
		book: currentBook,

		page: "p120"
	},
	{
		name: "Frost Giant",
		wildcard: 0,
		image: "http://img1.wikia.nocookie.net/__cb20110621041734/forgottenrealms/images/7/74/Frost_giant.png",
		blurb: Array (
			"Giants come in several forms, but all share two common features—they are tall and they enjoy human flesh. Fortunately, they are also rather stupid.",
			"Frost giants live in high mountains, above the snow line, or in the frozen reaches of the world. They build vast stone forts, from which they rule over lesser races, such as orcs and goblins, as veritable gods. Their skin is pale blue, and their hair as white as snow."
		),
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d8",
			strength: "d12+3",
			vigor: "d10"
		},
		skills: {
			'Climbing' : "d8",
			'Fighting' : "d8",
			'Intimidation' : "d10",
			'Notice' : "d6",
			'Throwing' : "d8"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "12",
		treasure: "Worthwhile, in lair",
		gear: "Thick furs (+1), large maul (Str+d10, carried in one hand), thrown rock (Range: 5/10/20, Damage: 3d6)",
		armor: "1",
		hindrances: "",
		abilities: Array(
			{
				name: "Icy Aura",
				description: "Frost giants radiate deadly cold. At the end of movement, all adjacent foes suffer 2d6 damage."
			},
			{
				name: "Immunity (Cold)",
				description: "Frost giants take no damage from arcane powers with a cold or ice trapping."
			},
			{
				name: "Improved Sweep",
				description: "Frost giants can attack all adjacent foes at no penalty."
			},
			{
				name: "Large",
				description: "Attackers gain +4 to attack rolls against frost giants due to their size."
			},
			{
				name: "Size +4",
				description: "Frost giants are over 15' tall."
			},
			{
				name: "Weakness (Fire)",
				description: "Magical heat and flame attacks cause +4 damage. Nonmagical heat has no additional effect."
			}
		),
		book: currentBook,

		page: "p121"
	},
	{
		name: "Sea Giant",
		wildcard: 0,
		image: "",
		blurb: Array (
			"Giants come in several forms, but all share two common features—they are tall and they enjoy human flesh. Fortunately, they are also rather stupid.",
			"Sea giants dwell in caves beneath the ocean. For the most part they eat marine animals, but sometimes they rise to the surface to swipe unsuspecting sailors from passing ships."
		),
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d6",
			strength: "d12+7",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d10",
			'Notice' : "d6",
			'Swimming' : "d8"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "15",
		treasure: "Worthwhile, in lair",
		gear: "Large maul (Str+d10, carried in one hand)",
		armor: "",
		hindrances: "",
		abilities: Array(
			{
				name: "Aquatic",
				description: "Sea giants have a Pace of 8 underwater."
			},
			{
				name: "Improved Sweep",
				description: "Sea giants can attack all adjacent foes at no penalty."
			},
			{
				name: "Huge",
				description: "Attackers gain +4 to attack rolls against sea giants due to their size."
			},
			{
				name: "Size +8",
				description: "Sea giants are over 35’ tall."
			}
		),
		book: currentBook,

		page: "p121"
	},
	{
		name: "Glide Monkeys",
		wildcard: 0,
		image: "",
		blurb: Array (
			"Glide monkeys resemble large baboons with leathery flaps stretching from their wrists to their ankles. They live in the highest treetops, and travel from tree to tree by leaping or gliding, thus avoiding ground- based predators."
		),
		attributes: {
			agility: "d10",
			smarts: "d8 (A)",
			spirit: "d8",
			strength: "d6",
			vigor: "d8"
		},
		skills: {
			'Climbing' : "d8",
			'Fighting' : "d6",
			'Notice' : "d6",
			'Swim' : "d6",
			'Throwing' : "d10"
		},
		charisma: "",
		pace: "4",
		parry: "5",
		toughness: "5",
		treasure: "Meager per 5 glide monkeys",
		gear: "",
		armor: "",
		hindrances: "",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d4."
			},
			{
				name: "Gliders",
				description: "These monkeys can glide descending 1\" vertically for every 2\" moved horizontally."
			},
			{
				name: "Hurl",
				description: "Glide monkeys hurl hard nuts or stones from the high branches of their homes before gliding down to snatch stunned prey. These cause Str+d6 damage if they are above a victim, or Str if the monkey does not have a significant altitude advantage. Range is 5/10/20."
			},
			{
				name: "Size -1",
				description: "Glide monkeys are the size of small children."
			}
		),
		book: currentBook,

		page: "p121"
	},
	{
		name: "Goblin",
		wildcard: 0,
		image: "http://cdn.obsidianportal.com/assets/62147/goblins2.jpg",
		blurb: Array (
			"Goblins of myth and legend are far more sinister creatures than some games and fiction portray. In the original tales, they were terrifying creatures that stole into homes in the middle of the night to steal and eat unruly children. The statistics here work for both dark “fairy tale” goblins as well as those found alongside orcs in contemporary roleplaying games."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d6",
			strength: "d4",
			vigor: "d8"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d6",
			'Notice' : "d6",
			'Taunt' : "d6",
			'Shooting' : "d8",
			'Stealth' : "d10",
			'Throwing' : "d6",
			'Swim' : "d6"
		},
		charisma: "",
		pace: "5",
		parry: "5",
		toughness: "4",
		treasure: "Meager, per 3 goblins",
		gear: "Short spears (Str+d4)",
		armor: "",
		hindrances: "",
		abilities: Array(
			{
				name: "Infravision",
				description: "Goblins halve penalties for dark lighting against living targets (round down)"
			},
			{
				name: "Size -1",
				description: "Goblins stand 3-4’ tall."
			}
		),
		book: currentBook,

		page: "p121-p122"
	},
	{
		name: "Goblin Shaman",
		wildcard: 0,
		image: "http://fc01.deviantart.net/fs71/f/2010/107/4/f/wow_goblin_shaman_concept_art_by_nightlybrian212.jpg",
		blurb: Array (
			"Goblins of myth and legend are far more sinister creatures than some games and fiction portray. In the original tales, they were terrifying creatures that stole into homes in the middle of the night to steal and eat unruly children. The statistics here work for both dark “fairy tale” goblins as well as those found alongside orcs in contemporary roleplaying games.",
			"Goblin shamans serve as advisors to goblin lords. Their arcane talents give them a position of respect within the tribe."
		),
		attributes: {
			agility: "d8",
			smarts: "d8",
			spirit: "d6",
			strength: "d4",
			vigor: "d6"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d6",
			'Notice' : "d6",
			'Taunt' : "d6",
			'Shooting' : "d8",
			'Spellcasting' : "d8",
			'Stealth' : "d10",
			'Throwing' : "d6"
		},
		charisma: "",
		pace: "5",
		parry: "5",
		toughness: "4",
		treasure: "Meager",
		gear: "Short spear (Str+d4)",
		armor: "",
		hindrances: "",
		abilities: Array(
			{
				name: "Infravision",
				description: "Goblins halve penalties for dark lighting against living targets (round down)"
			},
			{
				name: "Size -1",
				description: "Goblins stand 3-4’ tall."
			},
			{
				name: "Spells",
				description: "Shamans have 15 Power Points, and typically know bolt, fear, obscure, and smite."
			}
		),
		book: currentBook,

		page: "p122"
	},
	{
		name: "Golden Ram",
		wildcard: 0,
		image: "",
		blurb: Array (
			"Golden ram are large beasts, living in remote mountainous regions. Their fleece is actually made of fine gold threads, which makes them popular with hunters and trappers."
		),
		attributes: {
			agility: "d8",
			smarts: "d6 (A)",
			spirit: "d8",
			strength: "d12+1",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d6"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "9",
		treasure: "Fleece is Worthwhile, but never any relics",
		gear: "",
		armor: "",
		hindrances: "",
		abilities: Array(
			{
				name: "Gore",
				description: "Rams use the charge maneuver to gore their opponents with their long horns. If they can move at least 6” before attacking, they add +4 to their damage total."
			},
			{
				name: "Horns",
				description: "Str+d6."
			},
			{
				name: "Mountain Beast",
				description: "Golden rams ignore penalties for Difficult Terrain in mountainous regions."
			},
			{
				name: "Size +2",
				description: "Golden rams weight over 800 pounds."
			}
		),
		book: currentBook,

		page: "p122"
	},
	{
		name: "Corpse Golem",
		wildcard: 0,
		image: "http://img4.wikia.nocookie.net/__cb20100814131953/dragonage/images/4/4b/Harvester_golem.png",
		blurb: Array (
			"Golems are magical constructs, given life through the imprisonment of a spirit within the golem’s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.",
			"The vilest golems are those crafted from the body parts of corpses. Depending on the creator, the golem may be stitched together from the parts of one species or multiple species. Some corpse golems utilize animal parts."
		),
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d10",
			strength: "d12",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d10",
			'Notice' : "d6",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "4",
		parry: "6",
		toughness: "8",
		treasure: "None.",
		gear: "Typically a long sword (Str+d8)",
		armor: "1",
		hindrances: "",
		abilities: Array(
			{
				name: "Arcane Resistance",
				description: "+2 Armor against damage-causing arcane powers and +2 on trait rolls to resist opposed powers."
			},
			{
				name: "Armor +1",
				description: "Hard skin and muscle."
			},
			{
				name: "Berserk",
				description: "Corpse golems have the Berserk Edge."
			},
			{
				name: "Construct",
				description: "+2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease."
			},
			{
				name: "Fear",
				description: "Characters seeing a corpse golem must make a Fear check. "
			},
			{
				name: "Fearless",
				description: "Golems are immune to Fear and Intimidation."
			},
			{
				name: "Slow",
				description: "Corpse golems have a Pace of 4 and roll a d4 for their running die."
			}
		),
		book: currentBook,

		page: "p123"
	},
	{
		name: "Glass Golem",
		wildcard: 0,
		image: "http://940ee6dce6677fa01d25-0f55c9129972ac85d6b1f4e703468e6b.r99.cf2.rackcdn.com/products/pictures/1013449.jpg",
		blurb: Array (
			"Golems are magical constructs, given life through the imprisonment of a spirit within the golem’s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.",
			"These unusual constructs are crafted to resemble a stained glass warrior and are most often used as guardians in temples. Unlike other golems, they are almost two- dimensional, being no thicker than a pane of glass."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d8",
			strength: "d12",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d10",
			'Intimidation' : "d8",
			'Notice' : "d8",
			'Stealth' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "8",
		toughness: "11",
		treasure: "None.",
		gear: "",
		armor: "3",
		hindrances: "",
		abilities: Array(
			{
				name: "Arcane Resistance",
				description: "+2 Armor against damage-causing arcane powers and +2 on trait rolls to resist opposed powers."
			},
			{
				name: "Armor +3",
				description: "Glass golems are depicted wearing plate armor. Despite being glass, it is magically hardened and acts as metal armor."
			},
			{
				name: "Camouflage",
				description: "When guarding a temple, glass golems stand motionless in stained glass windows, appearing to be part of the scene. When in this environment, detecting them requires an opposed Notice roll at –4 against their Stealth."
			},
			{
				name: "Construct",
				description: "+2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease."
			},
			{
				name: "Fearless",
				description: "Golems are immune to Fear and Intimidation."
			},
			{
				name: "Glass Shield",
				description: "Glass golems normally carry magically-hardened glass shields. +1 Parry; +2 Armor to ranged attacks that hit."
			},
			{
				name: "Glass Sword",
				description: "Str+d10. The edge is razor sharp and never dulls."
			},
			{
				name: "Size +1",
				description: "Glass golems average 8’ tall."
			},
			{
				name: "Weakness",
				description: "Glass golems take double damage from blunt weapons, such as clubs and hammers."
			}
		),
		book: currentBook,

		page: "p123"
	},
	{
		name: "Lava Golem",
		wildcard: 0,
		image: "http://fc02.deviantart.net/fs49/f/2009/168/0/5/Lava_Golem_by_Vij_8.jpg",
		blurb: Array (
			"Golems are magical constructs, given life through the imprisonment of a spirit within the golem’s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.",
			"Although superficially similar to stone golems, lava golems have fiery ichor running through their rock bodies. Their eyes glow red and their fists are superheated."
		),
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d6",
			strength: "d12",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d10",
			'Notice' : "d6",
			'Shooting' : "d8",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "8",
		toughness: "11",
		treasure: "None.",
		gear: "",
		armor: "3",
		hindrances: "",
		abilities: Array(
			{
				name: "Armor +3",
				description: "Magically hardened stone."
			},
			{
				name: "Construct",
				description: "+2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease."
			},
			{
				name: "Fearless",
				description: "Golems are immune to Fear and Intimidation."
			},
			{
				name: "Improved Arcane Resistance",
				description: "+4 Armor against damage-causing arcane powers and +4 on trait rolls to resist opposed powers."
			},
			{
				name: "Size +1",
				description: "Lava golems stand over 8’ high and weigh 2,000 pounds."
			},
			{
				name: "Spit Lava",
				description: "Lava golems can spew a glob of molten lava. Range 6/12/24, Damage: 2d10, Medium Burst Template. Targets under the Template may make an Agility roll at –2 to escape the glob. Victims have a chance of catching fire."
			},
			{
				name: "Superheated Fists",
				description: "Str+d10"
			}
		),
		book: currentBook,

		page: "p123-p124"
	},
	{
		name: "Metal Golem",
		wildcard: 0,
		image: "http://th02.deviantart.net/fs7/PRE/i/2005/159/2/5/iron_golem_by_muninsnape.jpg",
		blurb: Array (
			"Golems are magical constructs, given life through the imprisonment of a spirit within the golem’s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.",
			"Typically crafted in humanoid form from iron or bronze, metal golems are among the most powerful golems. Some creators give their iron golems long swords instead of hands, allowing them to attack more often."
		),
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d8",
			strength: "d12+3",
			vigor: "d12+1"
		},
		skills: {
			'Fighting' : "d10",
			'Intimidation' : "d10",
			'Notice' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "15",
		treasure: "None.",
		gear: "Great axe (Str+d10, –1 Parry, requires 2 hands)",
		armor: "5",
		hindrances: "",
		abilities: Array(
			{
				name: "Armor +5",
				description: "Magically hardened metal."
			},
			{
				name: "Construct",
				description: "+2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease."
			},
			{
				name: "Fearless",
				description: "Golems are immune to Fear and Intimidation."
			},
			{
				name: "Improved Arcane Resistance",
				description: "+4 Armor against damage-causing arcane powers and +4 on trait rolls to resist opposed powers."
			},
			{
				name: "Improved Sweep",
				description: "Metal golems may attack all adjacent creatures at no penalty."
			},
			{
				name: "Size +2",
				description: "Metal golems stand over 10’ high and weigh 6,000 pounds."
			}
		),
		book: currentBook,

		page: "p124"
	},
	{
		name: "Stone Golem",
		wildcard: 0,
		image: "http://4.bp.blogspot.com/-OM8U5jk53ao/TlqKIELs8qI/AAAAAAAAAKQ/QKcOvwxuTRk/s1600/stonegolem.jpg",
		blurb: Array (
			"Golems are magical constructs, given life through the imprisonment of a spirit within the golem’s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.",
			"Stone golems are the traditional animated statue. As with most golems, they are shaped in the form of warriors and serve as guardians."
		),
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d8",
			strength: "d12+2",
			vigor: "d12"
		},
		skills: {
			'Fighting' : "d10",
			'Intimidation' : "d10",
			'Notice' : "d6"
		},
		charisma: "",
		pace: "5",
		parry: "6",
		toughness: "13",
		treasure: "None.",
		gear: "",
		armor: "4",
		hindrances: "",
		abilities: Array(
			{
				name: "Armor +4",
				description: "Magically hardened stone."
			},
			{
				name: "Construct",
				description: "+2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease."
			},
			{
				name: "Fearless",
				description: "Golems are immune to Fear and Intimidation."
			},
			{
				name: "Improved Arcane Resistance",
				description: "+4 Armor against damage-causing arcane powers and +4 on trait rolls to resist opposed powers."
			},
			{
				name: "Size +1",
				description: "Stone golems stand over 8’ high and weigh 4,000 pounds."
			},
			{
				name: "Stone Fists",
				description: "Str+d6"
			}
		),
		book: currentBook,

		page: "p124"
	},
	{
		name: "Straw Golem",
		wildcard: 0,
		image: "http://www.entertainmentearth.com/images/AUTOIMAGES/MS019lg.jpg",
		blurb: Array (
			"Golems are magical constructs, given life through the imprisonment of a spirit within the golem’s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.",
			"Straw golems are most often designed to resemble scarecrows. As well as scaring off birds and natural predators such as wolves, they can bolster a village’s militia in times of invasion."
		),
		attributes: {
			agility: "d10",
			smarts: "d6",
			spirit: "d8",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d6",
			'Notice' : "d8",
			'Stealth' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "6",
		treasure: "None.",
		gear: "Pitchfork (Str+d6, Reach 1, requires 2 hands) or scythe (Str+d10, –1 Parry, requires 2 hands)",
		armor: "",
		hindrances: "",
		abilities: Array(
			{
				name: "Arcane Resistance",
				description: "+2 Armor against damage-causing arcane powers and +2 on trait rolls to resist opposed powers."
			},
			{
				name: "Construct",
				description: "+2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease."
			},
			{
				name: "Fearless",
				description: "Golems are immune to Fear and Intimidation."
			},
			{
				name: "Weaknes (Fire)",
				description: "Straw golems take double damage from fire."
			}
		),
		book: currentBook,

		page: "p124"
	},
	{
		name: "Grave Guardian",
		wildcard: 0,
		image: "http://gerezon.se/wp-content/uploads/2013/11/spit-tombguardian.jpg",
		blurb: Array (
			"Grave guardians are placed in tombs to watch over the valuables entombed with the deceased. They resemble blackened corpses, with long talons and yellow eyes. Their orders are simple—destroy any creature entering the tomb, and hunt down and retrieve any stolen items."
		),
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d10",
			strength: "d12",
			vigor: "d12"
		},
		skills: {
			'Climbing' : "d8",
			'Fighting' : "d10",
			'Intimidation' : "d10",
			'Notice' : "d8",
			'Spellcasting' : "d8",
			'Stealth' : "d8",
			'Tracking' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "7",
		toughness: "10",
		treasure: "None, but they usually guard a Treasure Trove",
		gear: "",
		armor: "",
		hindrances: "",
		abilities: Array(
			{
				name: "Arcane Resistance",
				description: "+2 Armor against damage-causing arcane powers and +2 on trait rolls to resist opposed powers."
			},
			{
				name: "Claws",
				description: "Str+d6"
			},
			{
				name: "Fear -2",
				description: "Anyone seeing a grave guardian must make a Fear roll at –2."
			},
			{
				name: "Powers",
				description: "Grave guardians are not true spellcasters, but can use the following powers: armor, burrow, detect/conceal arcana, environmental protection, fear, and obscure. They have 15PP."
			},
			{
				name: "Regeneration",
				description: "Grave Vigor roll every round to heal all damage, except that caused by cold iron weapons."
			},
			{
				name: "Undead",
				description: "+2 Toughness, +2 to recover from being Shaken; No additional damage from called shots; Immune to disease and poison."
			},
			{
				name: "Weakness (Cold Iron)",
				description: "Grave guardians cannot Regenerate wounds inflicted by cold iron weapons, but may heal them through natural Healing."
			}
		),
		book: currentBook,

		page: "p124-p125"
	},
	{
		name: "Griffin",
		wildcard: 0,
		image: "http://img4.wikia.nocookie.net/__cb20120819183320/mythology/images/f/f1/Griffin.jpg",
		blurb: Array (
			"Griffins have the body of a lion and the head and wings of an eagle. They are fierce predators, swooping down on their foes to pin them. Once their prey is trapped and helpless, they tear them open with their sharp beaks."
		),
		attributes: {
			agility: "d8",
			smarts: "d6 (A)",
			spirit: "d8",
			strength: "d12",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Notice' : "d12",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "9",
		treasure: "Meager, in lair",
		gear: "",
		armor: "",
		hindrances: "",
		abilities: Array(
			{
				name: "Bite/Claws",
				description: "Str+d6"
			},
			{
				name: "Flight",
				description: "Griffins have a Flying Pace of 12\" and a Climb of 6\"."
			},
			{
				name: "Grapple",
				description: "If a griffin gets a raise while performing a grapple, it has knocked its foe to the ground and pinned it with its paws. Bite attacks against a pinned foe are made at +2."
			},
			{
				name: "Horse Terror",
				description: "Griffins’ favorite prey is horse flesh. Horses seeing a griffin must make a Fear check or become Panicked."
			},
			{
				name: "Improved Frenzy",
				description: "Griffins may make two Fighting attacks each action at no penalty."
			},
			{
				name: "Size +2",
				description: "Griffins weigh over 500 pounds."
			},
			{
				name: "Swoop",
				description: "Griffins often swoop on their prey to pin it to the ground. It gains +4 to its attack and damage for this action . Its Parry is reduced by –2 until its next action when performing the maneuver, however."
			}
		),
		book: currentBook,

		page: "p125"
	},
	{
		name: "Hag",
		wildcard: 0,
		image: "",
		blurb: Array (
			"These cannibalistic ogres have powerful magical abilities. They are fond of eating children, but are not picky and eat nearly anything made of meat."
		),
		attributes: {
			agility: "d4",
			smarts: "d10",
			spirit: "d8",
			strength: "d10",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d8",
			'Knowledge (Arcana)' : "d6",
			'Notice' : "d6",
			'Persuasion' : "d12",
			'Spellcasting' : "d10",
			'Taunt' : "d6"
		},
		charisma: "-2",
		pace: "5",
		parry: "5",
		toughness: "6",
		treasure: "Worthwhile, in lair",
		gear: "",
		armor: "",
		hindrances: "",
		abilities: Array(
			{
				name: "Claws",
				description: "Str+d6"
			},
			{
				name: "Fear",
				description: "Anyone seeing a hag must make a Fear check."
			},
			{
				name: "Spells",
				description: "Hags have 20 Power Points and typically know the following spells: armor (iron skin), boost/lower trait (blessing/curse), fear (hideous visage), obscure (dark cloud), puppet (persuasive words), and quickness (superhuman reflexes)."
			}
		),
		book: currentBook,

		page: "p125-p126"
	},
	{
		name: "Half-Folk",
		tags: "halfling,halflings,hobbit,hobbits,",
		wildcard: 0,
		image: "",
		blurb: Array (
			"Half-folk try to avoid trouble, but sometimes trouble comes to them. The statistics are for a typical militiaman."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d8",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d6",
			'Intimidation' : "d6",
			'Shooting' : "d8",
			'Stealth' : "d8",
			'Taunt' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "6",
		treasure: "Meager per 5 half-folk",
		gear: "Leather armor (+1), short sword (Str+d6), sling (Range: 4/8/16, Damage: Str+d4)",
		armor: "1",
		edges: "Luck, Marksman",
		hindrances: "Small",
		abilities: Array(

		),
		book: currentBook,

		page: "p126"
	},
	{
		name: "Harpy",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array (
			"Harpies have the lower body, wings, and claws of a vulture and the head and chest of an ugly woman. In mythology, they were created by the gods, but in your setting they may be a natural species, capable of breeding and forming a rudimentary society."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d6",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d6",
			'Notice' : "d6",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "2",
		parry: "5",
		toughness: "5",
		treasure: "Meager, in lair",
		gear: "",
		armor: "",
		edges: "",
		hindrances: "",
		abilities: Array(
			{
				name: "Claws",
				description: "Str+d4"
			},
			{
				name: "Flight",
				description: "Harpies have a Flying Pace of 8\" and a Climb of 4\""
			},
			{
				name: "Poison -2",
				description: "Harpies live in unsanitary habitats, and their claws are caked in filth. Any victim wounded or Shaken by a claw attack must make a Vigor roll or the wound becomes infected. Each day, the victim must make a Vigor roll or gain a level of Fatigue. A successful Healing roll, also at –2, cleans out the infection. Fatigue levels are recovered at the rate of one per day once the infection is stopped."
			}

		),
		book: currentBook,

		page: "p126"
	},
	{
		name: "Hellhound",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array (
			"Hellhounds are monstrous dogs, often with black skin which steams from the heat of the beast’s demonic blood. Their eyes burn with demonic fire and their teeth are oversized, protruding from their jaw at all angles. Certain demons often keep them as pets, though they may also be found in the company of necromancers and other evil wizards."
		),
		attributes: {
			agility: "d8",
			smarts: "d6 (A)",
			spirit: "d8",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d10",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "8",
		parry: "5",
		toughness: "7",
		treasure: "None.",
		gear: "",
		armor: "",
		edges: "",
		hindrances: "",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d6"
			},
			{
				name: "Fear",
				description: "Anyone who sees a hellhound must make a Fear check."
			},
			{
				name: "Fleet Footed",
				description: "Hellhounds have a d10 running die"
			},
			{
				name: "Go for the Throat",
				description: "If a hellhound gets a raise on its attack roll, it strikes its opponent’s least armored location."
			},
			{
				name: "Immunity (Fire)",
				description: "Hellhounds take no damage from fire"
			},
			{
				name: "Terrible Wounds",
				description: "The jagged teeth of a hellhound inflict terrible wounds, which do not heal quickly. Healing rolls, including magical and natural healing, are subject to a –2 penalty on top of any wound penalties."
			}

		),
		book: currentBook,

		page: "p126-p127"
	},
	{
		name: "Hippogriff",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array (
			"A hippogriff has the body and hindquarters of a horse and the head, wings, and forelimbs of a giant eagle. They are natural enemies of griffins, but are no less fond of flesh than their rivals."
		),
		attributes: {
			agility: "d8",
			smarts: "d8 (A)",
			spirit: "d6",
			strength: "d12+2",
			vigor: "d12"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Notice' : "d12"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "11",
		treasure: "Meager, in lair",
		gear: "",
		armor: "",
		edges: "",
		hindrances: "",
		abilities: Array(
			{
				name: "Bite/Claws",
				description: "Str+d6"
			},
			{
				name: "Flight",
				description: "Hippogriffs have a Flying Pace of 8\" and a Climb of 4\"."
			},
			{
				name: "Improved Frenzy",
				description: "Hippogriffs may make two Fighting attacks each action at no penalty."
			},
			{
				name: "Size+3",
				description: "Hippogriffs are comparable in size to a war horse."
			}

		),
		book: currentBook,

		page: "p127"
	},
	{
		name: "Hobgoblin",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array (
			"Hobgoblins are large goblins. They can be found in their own communities, as well as lording over their lesser kin."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d6",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Climb' : "d6",
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Notice' : "d6",
			'Taunt' : "d6",
			'Stealth' : "d8",
			'Shooting' : "d8",
			'Throwing' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "7",
		treasure: "Meager, in lair",
		gear: "Leather armor (+1), long swords (Str+d8)",
		armor: "1",
		edges: "",
		hindrances: "",
		abilities: Array(
			{
				name: "Infravision",
				description: "Hobgoblins halve penalties for dark lighting against living targets (round down)."
			}

		),
		book: currentBook,

		page: "p127"
	},
	{
		name: "Horse, Elven",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: "Elven horses are slightly smaller than riding horses but are considerably faster and can cross broken ground as if it were a smooth road. Elves never sell them and only rarely give them as gifts to non-elves who have done their people a great service.",
		attributes: {
			agility: "d10",
			smarts: "d10 (A)",
			spirit: "d8",
			strength: "d12",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d4",
			'Notice' : "d8"
		},
		charisma: "",
		pace: "10",
		parry: "4",
		toughness: "9",
		armor: "0",
		treasure: "None.",
		abilities: Array(
			{
				name: "Fleet-Footed",
				description: "Elven horses roll a d12 for their running die. Elven horses do not suffer movement penalties for Difficult Terrain."
			},
			{
				name: "Kick",
				description: "Str+d6."
			},
			{
				name: "Rider Empathy",
				description: "Elves gain +2 to Riding rolls on an elven horse."
			},
			{
				name: "Size +2",
				description: "Elven horses weigh between 600 and 800 pounds."
			}

		),
		book: currentBook,

		page: "p127"
	},
	{
		name: "Hydra",
		tags: "",
		wildcard: 0,
		image: "http://www.pantheon.org/areas/gallery/mythology/europe/greek_people/hydra.gif",
		blurb: Array(
			"Hydra are multi-headed beasts, akin to dragons. Some breathe fire, others can grow new heads to replace ones lost in combat, and others are more mundane. The number of heads varies.",
			"The stats below include fire breathing and regenerating heads. Whether you choose to use one, both, or none depends on how powerful a hydra you want."
		),
		attributes: {
			agility: "d6",
			smarts: "d4 (A)",
			spirit: "d8",
			strength: "d10",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d10",
			'Notice' : "d6"
		},
		charisma: "",
		pace: "5",
		parry: "5",
		toughness: "13",
		treasure: "Worthwhile, in lair.",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Scaly Hide."
			},
			{
				name: "Bite",
				description: "Str+d6, Reach 1."
			},
			{
				name: "Fierty Breath",
				description: "Some hydras breathe fire using the Cone Template. Every target within this cone may make an Agility roll at –2 to avoid the attack. Those who fail suffer 2d10 damage and must check to see if they catch fire. Individual heads may not attack with bite in the round they breathe fire."
			},
			{
				name: "Multiple Heads",
				description: "Hydras have between four and ten heads. Each head may make a Fighting roll in a round without incurring a multi-action penalty, though no more than four heads may attack a single target, regardless of its size. Every head has 1 wound and is severed if it is Incapacitated. Damage caused to heads does not affect the hydra, though it dies when the last head is severed."
			},
			{
				name: "Regeneration",
				description: "Each round after a head is severed, the hydra makes a Vigor roll. On a success, any severed heads are replaced by two new ones. Damage caused by fire prevents regeneration, as does cauterizing the wound before a new heads grow. This requires a successful Fighting roll with a torch or other flaming object."
			},
			{
				name: "Size +5",
				description: "Hydra are large creatures. Most weigh over 10,000 pounds."
			}

		),
		book: currentBook,

		page: "p128"
	},
	{
		name: "Jabber Birds",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Jabber birds are cowardly forest-dwelling scavengers. Their high-pitched jabbering, for which they are named, serves two purposes—it disorients potential prey and alerts predators that there is an easy meal waiting. Once the predators have killed the prey and taken their fill, the jabber birds feed on the remains.",
			"Jabber birds hunt in small flocks, surrounding prey and preventing it from escaping before the nearest predator arrives."
		),
		attributes: {
			agility: "d10",
			smarts: "d6 (A)",
			spirit: "d6",
			strength: "d4",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d4",
			'Notice' : "d6"
		},
		charisma: "",
		pace: "-",
		parry: "4",
		toughness: "3",
		treasure: "Meager, per 5 birds",
		armor: "",
		abilities: Array(
			{
				name: "Flight",
				description: "Pace 6\", Climb 4\"",
			},
			{
				name: "Jabber",
				description: "The jabbering of these birds fills a Medium Burst Template centered on the bird. Characters within the Template must make as Spirit roll, –1 for each additional Template they are caught in, or become disoriented. Disoriented characters suffer a –2 penalty to trait rolls and Pace so long as they remain within at least one Template and for 3 rounds after they leave."
			},
			{
				name: "Size -2",
				description: "Jabber birds are 1’ tall."
			}
		),
		book: currentBook,

		page: "p128-p129"
	},
	{
		name: "Jinni",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Jinn (singular: jinni) are grouped into five categories. Marids are the most powerful, then efrit, shaitan, jinn, and finally the jann. All five are powerful, corporeal beings with the power to disappear at will. Some jinn are good, but the majority are evil—all are masters of trickery. The Westernized spelling is genie. The stats presented here are for a typical jinni."
		),
		attributes: {
			agility: "d8",
			smarts: "d8",
			spirit: "d8",
			strength: "d12",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d10",
			'Notice' : "d8",
			'Spellcasting' : "d10",
			'Taunt' : "d10"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "7",
		treasure: "None, but can often bestow wealth upon their patrons",
		armor: "",
		abilities: Array(
			{
				name: "Immunity (Fire)",
				description: "Jinn from fire or heat, being born of such material.",
			},
			{
				name: "Invisibility",
				description: "Jinn can become completely invisible with a successful Smarts roll and can remain that way indefinitely."
			},
			{
				name: "Magic",
				description: "In addition to their other abilities, jinn have 20 Power Points and know the following powers: blast (fire trapping), bolt (fire trapping), fear, and shape change."
			},
			{
				name: "Servitude",
				description: "A jinni Incapacitated by violent means will seek to make a bargain with its opponent. The jinni offers service for a year and a day in return for sparing its life. During the period of servitude, the jinni is gracious and obedient (though not suicidal), but once the period elapses it strives to destroy the one who forced its enslavement."
			},
			{
				name: "Smoky Form",
				description: "A jinni can assume a smoky form with a successful Smarts roll. While in this form, the jinni cannot be harmed by any means, but it cannot affect the world in any way. As smoke, they can fit into small containers, such as lamps."
			},
			{
				name: "Teleport",
				description: "Jinn can teleport anywhere in the world. A Smarts roll is required for teleporting to an unseen location as normal."
			},
			{
				name: "Variable Size",
				description: "Jinn can vary their size from that of a man (their base form) to over 100’ high. The base statistics assume they are human-sized. Each point of Size they gain gives them +1 Toughness and Strength. At Size +4 they become Large creatures, at Size +8 they are Huge, and at Size +12 and over they are Gargantuan. Changing Size requires a Smarts roll, with the jinni gaining or losing 1 level of Size per success and raise. The roll may be made once per round."
			},
			{
				name: "Weakness (Earth)",
				description: "Jinn were born of fire, but man, who the gods favor over jinn, was born of clay. Attacks involving earth, whether thrown rocks or magical trappings, inflict double damage."
			}
		),
		book: currentBook,

		page: "p129"
	},
	{
		name: "Khazok",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Khazok is a dwarven word meaning “rock monster.” Khazoks are carnivorous creatures with sharp mandibles and a rocky shell and are found in mountainous terrain and deep underground. Their favorite tactic is to curl into a ball, which resembles a small boulder, then spring to attack unwary passersby."
		),
		attributes: {
			agility: "d6",
			smarts: "d6 (A)",
			spirit: "d6",
			strength: "d8",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d6",
			'Stealth' : "d10"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "7",
		treasure: "Meager, per every 5 khazoks",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Rocky shell.",
			},
			{
				name: "Bite",
				description: "Str+d6."
			},
			{
				name: "Camouflage",
				description: "While not moving, khazoks resemble small boulders. Characters actively searching for danger suffer –4 to their Notice rolls. Khazoks which aren’t detected strike with surprise, getting the Drop on their unsuspecting foes."
			}
		),
		book: currentBook,

		page: "p129"
	},
	{
		name: "Knight",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Knights are the fantasy equivalent of tanks—heavily armored and highly mobile. They differ from regular cavalry troops in that they are usually minor nobles, often with a fortified manor as their fief. Knights may be chivalric champions out to save princesses and slay dragons or despicable curs interested only in throwing their weight around."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d8",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d6",
			'Knowledge (Battle)' : "d6",
			'Notice' : "d6",
			'Riding' : "d8"
		},
		charisma: "+2",
		pace: "6",
		parry: "7",
		hindrances: "Code of Honor",
		edges: "Command, Noble",
		toughness: "9",
		treasure: "Meager, Worthwhile in castle",
		armor: "3",
		gear: "Corselet (+3), chain arms and legs (+2), closed helm (+3), long sword (Str+d8), medium shield (+1 Parry), lance (Str+d8, Reach 2, AP2 when charging), war horse",
		abilities: Array(

		),
		book: currentBook,

		page: "p130"
	},
	{
		name: "Veteran Knight",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Knights are the fantasy equivalent of tanks—heavily armored and highly mobile. They differ from regular cavalry troops in that they are usually minor nobles, often with a fortified manor as their fief. Knights may be chivalric champions out to save princesses and slay dragons or despicable curs interested only in throwing their weight around.",
			"These knights are the elite of a kingdom, having survived several battles. Most own a small castle and control 100 soldiers."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d10",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d10",
			'Intimidation' : "d6",
			'Knowledge (Battle)' : "d8",
			'Notice' : "d6",
			'Riding' : "d10"
		},
		charisma: "+2",
		pace: "6",
		parry: "10",
		hindrances: "Code of Honor",
		edges: "Command, Noble",
		toughness: "10",
		treasure: "Worthwhile, Treasure trove in castle",
		armor: "3",
		gear: "Corselet (+3), chain arms and legs (+2), closed helm (+3), long sword (Str+d8), medium shield (+1 Parry), lance (Str+d8, Reach 2, AP2 when charging), war horse",
		abilities: Array(

		),
		book: currentBook,

		page: "p130"
	},
	{
		name: "Holy/Unholy Knight",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Knights are the fantasy equivalent of tanks—heavily armored and highly mobile. They differ from regular cavalry troops in that they are usually minor nobles, often with a fortified manor as their fief. Knights may be chivalric champions out to save princesses and slay dragons or despicable curs interested only in throwing their weight around.",
			"Religious knights are champions of faith, acting as the military wing of a religion. Some serve good gods, defending the weak and fighting evil. Others follow dark gods, promoting their evil agendas."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d10",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Healing' : "d6",
			'Intimidation' : "d6",
			'Notice' : "d6",
			'Persuasion' : "d8",
			'Riding' : "d8"
		},
		charisma: "+2",
		pace: "6",
		parry: "7",
		toughness: "10",
		hindrances: "Code of Honor, Vow",
		edges: "Command, Holy/Unholy Warrior, Noble",
		treasure: "Meager, Worthwhile in castle",
		armor: "3",
		gear: "Corselet (+3), plates arms and legs (+3), closed helm (+3), long sword (Str+d8), medium shield (+1 Parry), lance (Str+d8, Reach 2, AP2 when charging), war horse",
		abilities: Array(

		),
		book: currentBook,

		page: "p130"
	},
	{
		name: "Knowledge Eater",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Knowledge eaters resemble large spiders but have an extendable proboscis and a grey, pulsating, membranous body. They feed on the knowledge of their victims, literally sucking away intelligence. It seems unlikely that such a beast could have evolved naturally, but so far no race has uncovered any knowledge regarding their creation."
		),
		attributes: {
			agility: "d8",
			smarts: "d8 (A)",
			spirit: "d6",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d6",
			'Stealth' : "d10"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "4",
		treasure: "None",
		armor: "",
		abilities: Array(
			{
				name: "Ambush",
				description: "Knowledge eaters lurk above ground level. When prey passes beneath, they attempt to drop onto its head. If a character passes beneath an undetected knowledge eater, it has the Drop. Its first attack is always a Called Shot to the head.",
			},
			{
				name: "Infravision",
				description: "Halve darkness penalties against living targets (round down)."
			},
			{
				name: "Potion",
				description: "The membranous body of a knowledge eater can be boiled to make a thick, grey sludge. Successfully creating the potion requires a Smarts roll. When drunk, the imbiber gains a +1 step increase in his Smarts and all linked skills for one hour."
			},
			{
				name: "Proboscis",
				description: "Str+d4. If the victim of a Called Shot to the head is Shaken or wounded, the beast sinks its proboscis into his brain. Each round it remains attached, the victim suffers a permanent 1 die reduction in Smarts and all linked skills. If Smarts reaches zero, the victim is left a gibbering idiot."
			},
			{
				name: "Size -1",
				description: "Knowledge eaters are the size of small dogs.",
			}
		),
		book: currentBook,

		page: "p130-p131"
	},
	{
		name: "Liche",
		tags: "undead,zombie,",
		wildcard: 1,
		image: "",
		blurb: Array(
			"Perhaps the most diabolical creature in any fantasy land is the liche—a necromancer so consumed with the black arts that he eventually becomes undead himself."
		),
		attributes: {
			agility: "d6",
			smarts: "d12+2",
			spirit: "d10",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d12",
			'Knowledge (Occult)' : "d12+2",
			'Notice' : "d10",
			'Spellcasting' : "d12"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "15",
		treasure: "Treasure Trove",
		gear: "Magical armor (+6), other magical items",
		armor: "6",
		abilities: Array(
			{
				name: "Death Touch",
				description: "Liches drain the lives of those around them with a touch. Instead of a normal attack, a liche may make a touch attack. Every raise on its Fighting roll automatically inflicts one wound to its target.",
			},
			{
				name: "Spells",
				description: "Liches have 50 Power Points and know most every spell available."
			},
			{
				name: "Undead",
				description: "+2 Toughness; +2 to recover from being Shaken; Called shots do no extra damage."
			},
			{
				name: "Zombie",
				description: "Liches are necromancers first and foremost. The undead they raise through the zombie spell are permanent, so they are usually surrounded by 4d10 skeletons or zombies as they choose. Some liches have entire armies of the undead at their disposal."
			}
		),
		book: currentBook,

		page: "p131"
	},
	{
		name: "Lizard Men",
		tags: "lizard man,",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Lizard men are aggressive bipedal lizards with a fondness for warm flesh. Most live in marshy terrain, where they hunt fish and water fowl. Their society is extremely primitive. They have never developed metalworking, but prize metal tools and weapons looted from the corpses of those who intrude in their realms."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d8",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d8",
			'Notice' : "d8",
			'Stealth' : "d6",
			'Swimming' : "d8",
			'Throwing' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "7",
		toughness: "7",
		treasure: "Meager per 5 Lizard men",
		gear: "Leather armor (+1), stiff hide shield (+1 Parry), flint battle axe (Str+d8), flint throwing axe (Range: 3/6/12, Damage: Str+d6)",
		armor: "1",
		abilities: Array(
			{
				name: "Keen Senses",
				description: "Lizard men “taste” the air, giving them +2 to all Notice rolls. This ever- present advantage means they are always considered “Active” when consulting the Stealth results table.",
			},
			{
				name: "Natural Swimmers",
				description: "Lizard men’s tails make them powerful swimmers, giving them +2 on all Swimming rolls and increasing their swimming Pace to equal their Swimming skill."
			}
		),
		book: currentBook,

		page: "p131"
	},
	{
		name: "Mage",
		tags: "magic user,wizard,seer,sorcerer,warlock,conjurer,illusionist,caster,",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Mages range from lowly apprentices armed with a handful of spells to arch mages, whose great power is often political as well as arcane. The stats here are for typical adventuring mages, but they need to be adjusted to fit whatever role they are found in. A court mage is very different from a magic item crafter, for example. Feel free to add new powers to suit your particular needs."
		),
		attributes: {
			agility: "d6",
			smarts: "d10",
			spirit: "d8",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d8",
			'Knowledge (Arcana)' : "d8",
			'Notice' : "d8",
			'Shooting' : "d6",
			'Spellcasting' : "d8",
			'Stealth' : "d6",
			'Taunt' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "5",
		hindrances: "Varies",
		edges: "Arcane Background (Magic), New Power, Power Points, Wizard",
		treasure: "Meager",
		gear: "Various",
		armor: "0",
		abilities: Array(
			{
				name: "Spells",
				description: "Novice mages have 15 Power Points and typically know armor, bolt, detect/conceal arcana, and light.",
			}
		),
		book: currentBook,

		page: "p132"
	},
	{
		name: "Mage",
		tags: "magic user,wizard,seer,sorcerer,warlock,conjurer,illusionist,caster,",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Mages range from lowly apprentices armed with a handful of spells to arch mages, whose great power is often political as well as arcane. The stats here are for typical adventuring mages, but they need to be adjusted to fit whatever role they are found in. A court mage is very different from a magic item crafter, for example. Feel free to add new powers to suit your particular needs."
		),
		attributes: {
			agility: "d6",
			smarts: "d12",
			spirit: "d8",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d8",
			'Knowledge (Arcana)' : "d10",
			'Notice' : "d8",
			'Persuasion' : "d8",
			'Shooting' : "d8",
			'Spellcasting' : "d12",
			'Stealth' : "d6",
			'Streetwise' : "d8",
			'Taunt' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "5",
		hindrances: "Varies",
		edges: "Arcane Background (Magic), New Power, Power Points, Rapid Recharge, Wizard",
		treasure: "Meager",
		gear: "Various, but at least one magic item",
		armor: "0",
		abilities: Array(
			{
				name: "Spells",
				description: "Veteran mages have 25 Power Points and typically know armor, bolt, detect/conceal arcana, dispel, fly, and light.",
			}
		),
		book: currentBook,

		page: "p132"
	},
	{
		name: "Archmage",
		tags: "magic user,wizard,seer,sorcerer,warlock,conjurer,illusionist,caster,mage,",
		wildcard: 1,
		image: "",
		blurb: Array(
			"Mages range from lowly apprentices armed with a handful of spells to arch mages, whose great power is often political as well as arcane. The stats here are for typical adventuring mages, but they need to be adjusted to fit whatever role they are found in. A court mage is very different from a magic item crafter, for example. Feel free to add new powers to suit your particular needs."
		),
		attributes: {
			agility: "d6",
			smarts: "d12",
			spirit: "d10",
			strength: "d6",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d10",
			'Knowledge (Arcana)' : "d12",
			'Notice' : "d8",
			'Shooting' : "d10",
			'Spellcasting' : "d12+2",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "6",
		hindrances: "Varies",
		edges: "Arcane Background (Magic), Connections, Improved Rapid Recharge, New Power, Power Points, Wizard",
		treasure: "Worthwhile",
		gear: "Various, but at least three magic items",
		armor: "0",
		abilities: Array(
			{
				name: "Spells",
				description: "Archmages have 40 Power Points and typically know armor, blast, bolt, detect/ conceal arcana, dispel, fly, light, puppet, and teleport.",
			}
		),
		book: currentBook,

		page: "p132"
	},
	{
		name: "Mage Bane",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Many stories exist about how mage banes came to be. Some say they are the spirits of mages who never fulfilled their potential in life. Others claim they are the result of magical backlash. A few even say they are elementals, drawn from the realm of magic. Whatever the truth, they detest mages (but not priests or other Miracle workers). They appear as black, faceless humanoids."
		),
		attributes: {
			agility: "d10",
			smarts: "d12",
			spirit: "d10",
			strength: "d6",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6",
			'Spellcasting' : "d12"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "6",
		treasure: "One relic",
		armor: "0",
		abilities: Array(
			{
				name: "Elemental",
				description: "No additional damage from called shots; Fearless; Immune to disease and poison."
			},
			{
				name: "Improved Arcane Resistance",
				description: "+4 Armor against damage-causing powers and +4 on trait rolls to resist opposed powers."
			},
			{
				name: "Invulnerability",
				description: "Mage banes take no damage from non-magical attacks."
			},
			{
				name: "Magic Drain",
				description: "On a successful Touch Attack the mage bane drains 1d6 Power Points from a victim unless the victim succeeds in an opposed Spirit roll. Drained points are added to the mage bane’s own pool. It cannot exceed its starting level, however."
			},
			{
				name: "Magic Sense",
				description: "Mage banes can detect arcana as a natural sense."
			},
			{
				name: "Powers",
				description: "Mage banes have 40 Power Points and know the following powers: bolt, deflection, dispel, entangle, fear, obscure, telekinesis, and teleport."
			}
		),
		book: currentBook,

		page: "p133"
	},
	{
		name: "Frost Mammoth",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Mammoths are large elephants with long, curling tusks and thick, woolly coats. They are found only in cold climates.",
			"Frost mammoths resemble small mammoths. Unlike regular mammoths, however, their breath can freeze a man to death."
		),
		attributes: {
			agility: "d6",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d12+4",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d4"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "14",
		treasure: "None",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Thick hide and fur."
			},
			{
				name: "Icy Breath",
				description: "Frost mammoths breathe an icy blast using the Cone Template. Every target within this cone may make an Agility roll at –2 to avoid the attack. Those who fail suffer 2d8. A frost mammoth may not attack with its tusks or trample in the round it breathes fire."
			},
			{
				name: "Immunity (Cold)",
				description: "Mammoths take no damage from cold, including magical attacks."
			},
			{
				name: "Large",
				description: "Attackers have +2 to attack rolls against these beasts due to their size"
			},
			{
				name: "Size +5",
				description: "Frost mammoths weigh over 4,000 pounds."
			},
			{
				name: "Trample",
				description: "Str."
			},
			{
				name: "Tusks",
				description: "Str+d6"
			}
		),
		book: currentBook,

		page: "p133"
	},
	{
		name: "Woolly Mammoth",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Mammoths are large elephants with long, curling tusks and thick, woolly coats. They are found only in cold climates."
		),
		attributes: {
			agility: "d6",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d12+6",
			vigor: "d12"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d4"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "16",
		treasure: "None",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Thick hide and fur."
			},
			{
				name: "Immunity (Cold)",
				description: "Mammoths take no damage from cold, including magical attacks."
			},
			{
				name: "Large",
				description: "Attackers have +2 to attack rolls against these beasts due to their size"
			},
			{
				name: "Size +6",
				description: "Mammoths weigh over 5,000 pounds."
			},
			{
				name: "Trample",
				description: "Str."
			},
			{
				name: "Tusks",
				description: "Str+d6"
			}
		),
		book: currentBook,

		page: "p133"
	},
	{
		name: "Manticore",
		tags: "",
		wildcard: 0,
		image: "http://images.wikia.com/olympians/images/4/45/Percy_Jackson_Manticore.jpg",
		blurb: Array(
			"A manticore has the body of a lion and a vaguely human head. Its mouth contains three rows of razor sharp teeth and its tail ends in a ball of darts or spines. Manticores are fierce predators and devour every part of their victims, including their gear."
		),
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d8",
			strength: "d12+2",
			vigor: "d10"
		},
		skills: {
			'Climbing' : "d8",
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Notice' : "d8",
			'Shooting' : "d8",
			'Stealth' : "d8",
			'Tracking' : "d6"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "9",
		treasure: "None",
		armor: "",
		abilities: Array(
			{
				name: "Bite/Claw",
				description: "Str+d6"
			},
			{
				name: "Defensive Volley",
				description: "Rather than fire its tail darts at one target, the manticore may launch them in a circular pattern. The manticore makes a single Shooting roll against all target within range. Victims suffer 2d6 damage. The manticore may take no other actions in the round it uses this ability, including movement. This ability may be used only once per day and uses all the darts in the tail. There must be at least 3 volleys of darts left for this ability to work."
			},
			{
				name: "Improved Frenzy",
				description: "Manticores may make two Fighting attacks each action at no penalty."
			},
			{
				name: "Tail Darts",
				description: "Each round, a manticore may fire a volley of darts at one target (Range: 4/8/16, Damage: 2d6). It may not fire its darts at the same target it attacks with its claws or bite during the same round. A manticore can only fire 10 volleys in a single day."
			},
			{
				name: "Size +2",
				description: "Manticores weigh over 600 pounds."
			}
		),
		book: currentBook,

		page: "p134"
	},
	{
		name: "Medusa",
		tags: "",
		wildcard: 0,
		image: "http://deyoung.famsf.org/files/imagecache/exhibition_preview_large/blog/MedusaFace.JPG",
		blurb: Array(
			"The legendary medusa was a unique creature—a former maiden of beauty cursed by the gods for her vanity. In fantasy settings, the creature may be unique or part of a race of the same name. Medusas are found in most terrains. They lair is usually decorated with numerous \"statues.\""
		),
		attributes: {
			agility: "d8",
			smarts: "d8",
			spirit: "d8",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d10",
			'Notice' : "d8",
			'Shooting' : "d8",
			'Stealth' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "6",
		gear: "Short sword (Str+d6), bow (Range: 12/24/48, Damage: 2d6)",
		treasure: "Worthwhile, in lair",
		armor: "",
		abilities: Array(
			{
				name: "Petrify",
				description: "The visage of a medusa is deadly to behold. In combat, a character may avert his eyes by taking a penalty to his attack roll. The attacker may take a –1, –2, –4, or –6 penalty to his attack roll (his choice). Whether the attack is successful or not, he must then make a Spirit roll with a bonus equal to the penalty he took to his attack roll. On a failure, he catches sight of the medusa’s face and is turned to stone— permanently. A character Surprised by a medusa may make an Agility roll at –4 to avert his gaze."
			},
			{
				name: "Snake Hair",
				description: "The writhing snake hair of a medusa can attack all adjacent foes with no multi-action penalty. The bite inflicts d4+2 damage, and also delivers poison. Victim must make a Vigor roll at –2. With success, the bite area swells and becomes numb. The victim becomes Exhausted until healed. With a failure, the victim becomes Incapacitated and must make a second Vigor roll or die."
			},
			{
				name: "Poison Arrow",
				description: "As an action, a medusa may drip venom from a snake onto an arrow. The poison is good for one shot and functions as described in Snake Hair."
			}
		),
		book: currentBook,

		page: "p134"
	},
	{
		name: "Common Mercenary",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Mercenaries are hired soldiers. Some belong to respectable units, with a history of integrity and loyalty to their paymaster. Others happily switch sides if a better offer is made. Groups of mercenaries are often armed with the same weapons. Thus, one finds mercenary pikemen, cavalrymen, skirmishers, archers, and so on."
		),
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d6",
			strength: "d6",
			vigor: "d8"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d6",
			'Notice' : "d6",
			'Shooting' : "d6",
			'Stealth' : "d6",
			'Throwing': "d6"
		},
		charisma: "",
		pace: "6",
		hindrances: "Various",
		parry: "5",
		toughness: "7",
		gear: "Leather armor (+1), various weapons",
		treasure: "Meager per 5 soldiers",
		armor: "1",
		edges: "-",
		abilities: Array(
		),
		book: currentBook,

		page: "p134"
	},
	{
		name: "Common Mercenary",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Mercenaries are hired soldiers. Some belong to respectable units, with a history of integrity and loyalty to their paymaster. Others happily switch sides if a better offer is made. Groups of mercenaries are often armed with the same weapons. Thus, one finds mercenary pikemen, cavalrymen, skirmishers, archers, and so on.",
			"Hardened by battle, these tough combatants charge more for their services. As with common mercenaries, their reputation and weapons vary considerably."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d8",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d10",
			'Intimidation' : "d8",
			'Notice' : "d6",
			'Shooting' : "d10",
			'Stealth' : "d6",
			'Throwing': "d8"
		},
		charisma: "",
		pace: "6",
		hindrances: "Various",
		parry: "7",
		toughness: "8",
		gear: "Chain mail (+2), open helm (+3), various weapons",
		treasure: "Meager per 3 soldiers",
		armor: "2",
		edges: "-",
		abilities: Array(
		),
		book: currentBook,

		page: "p135"
	},
	{
		name: "Mercenary Captain",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Mercenaries are hired soldiers. Some belong to respectable units, with a history of integrity and loyalty to their paymaster. Others happily switch sides if a better offer is made. Groups of mercenaries are often armed with the same weapons. Thus, one finds mercenary pikemen, cavalrymen, skirmishers, archers, and so on.",
			"Captains are experienced soldiers commanding a mercenary unit. They typically carry the same weapons as their men but are mounted."
		),
		attributes: {
			agility: "d8",
			smarts: "d8",
			spirit: "d8",
			strength: "d10",
			vigor: "d8"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d12",
			'Knowledge (Battle)' : "d10",
			'Intimidation' : "d10",
			'Notice' : "d8",
			'Riding' : "d8",
			'Shooting' : "d10",
			'Stealth' : "d6",
			'Throwing': "d10"
		},
		charisma: "",
		pace: "6",
		hindrances: "Various",
		parry: "9",
		toughness: "9",
		gear: "Plate corselet (+3), chain limbs (+2), open helm (+3), various weapons, war horse",
		treasure: "Worthwhile",
		armor: "3",
		edges: "-",
		abilities: Array(
		),
		book: currentBook,

		page: "p135"
	},
	{
		name: "Mermaid",
		tags: "",
		wildcard: 0,
		image: "http://cdn2-b.examiner.com/sites/default/files/styles/article_large/hash/17/bc/17bcc3eff2b01dec93b7cc32dae4e7d2.jpg?itok=8-GDWrLu",
		blurb: Array(
			"Mermaids appear as beautiful, naked young women from the waist up with glistening fish tales for their lower torso. Once underwater, their true form is revealed. They are hideous monsters with jagged teeth, blood-red fish eyes, and green scaly skin covered in slime.",
			"Once sailors are in the water, they attempt to hold them there and drown the unfortunate souls."
		),
		attributes: {
			agility: "d8",
			smarts: "d8",
			spirit: "d8",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d6",
			'Persuasion' : "d10",
			'Stealth' : "d8",
			'Taunt' : "d8",
			'Throwing': "d6"
		},
		charisma: "+4",
		pace: "0",
		parry: "5",
		toughness: "6",
		treasure: "Worthwhile per 5 mermaids",
		armor: "0",

		abilities: Array(
			{
				name: "Aquatic",
				description: "Pace 6"
			},
			{
				name: "Claws",
				description: "Str+d6"
			},
			{
				name: "Siren Song",
				description: "The mermaid’s song is like a narcotic for men. When first heard, male characters of all species must make Spirit rolls. Those who fail stumble into the sea and become completely complacent, believing they’re cavorting with the beautiful sea nymphs. In truth, the victims are drowning. Every time the victim suffers a wound or a Fatigue level from any source, he gets a Spirit roll at –2 (plus the Fatigue penalty) to realize his peril and break the spell. Those who do are quickly savaged by the watching mermaids. Aquatic races may fall victim to the mermaids as well, but since they can’t drown, they’ll simply be ripped to shreds."
			}
		),
		book: currentBook,

		page: "p135"
	},
	{
		name: "Methusaleh Tree",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Methusaleh trees look like oaks, spruces, and other mundane trees, but are always healthy specimens unbothered by nesting birds or tree-dwelling mammals. There is good reason why animals do not bother the tree—it feeds on their life-force.",
			"As well as regular foliage, a Methusaleh tree has four sharpened branches which it uses to impale prey, draining and sucking out their vitality, thus rejuvenating itself."
		),
		attributes: {
			agility: "d6",
			smarts: "d4 (A)",
			spirit: "d10",
			strength: "d12+4",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d8"
		},
		charisma: "",
		pace: "-",
		parry: "6",
		toughness: "17",
		treasure: "Meager, scattered around base",
		armor: "2",

		abilities: Array(
			{
				name: "Armor +2",
				description: "Bark"
			},
			{
				name: "Branches",
				description: "Str+d6. A Methusaleh tree may make up to four attacks each round. On a raise, the creature impales the victim. The victim must make a Vigor roll or gain a level of Fatigue (recover one level per 24 hours). Every round a connected branch stays impaled, the victim must make another Vigor roll. Removing the branch requires an opposed Strength roll to pull it free. For each Fatigue level drained, the tree heals 1 wound. The branches have Toughness 10 and one wound. Severing them does not affect the tree’s overall health. Severed branches regenerate after 1d6 days."
			},
			{
				name: "Canopy",
				description: "A Methusaleh tree spreads wide for sun and prey. Branches have Reach 3."
			},
			{
				name: "Huge",
				description: "Attackers are +4 to attack rolls due to the tree’s size."
			},
			{
				name: "Plant",
				description: " Plants are not subject to Fear and Tests of Will."
			},
			{
				name: "Size +8",
				description: "Methusaleh trees stands over 60’ tall."
			}
		),
		book: currentBook,

		page: "p136"
	},
	{
		name: "Moss Man",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Moss men are mobile, semi-intelligent humanoid plants composed of tightly packed moss, vines, and grass. They have a mouth tipped with sharp thorns which function as teeth and glowing yellow eyes."
		),
		attributes: {
			agility: "d6",
			smarts: "d6 (A)",
			spirit: "d8",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d6",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "5",
		parry: "5",
		toughness: "6",
		treasure: "None",
		armor: "",

		abilities: Array(
			{
				name: "Bite",
				description: "Str+d4"
			},
			{
				name: "Camouflage",
				description: "Moss men gain +2 to Stealth rolls in forest and jungle because of their appearance."
			},
			{
				name: "Spores",
				description: "Moss men can release a cloud of choking spores. The cloud fills a Medium Burst Template centered on the moss man. Creatures within the Template must make a Vigor roll or be Shaken. Each cloud costs 2 Power Points and the moss man has 10 available for this purpose only."
			}
		),
		book: currentBook,

		page: "p136"
	},
	{
		name: "Guardian Mummies",
		tags: "guardian mummy,mummy,undead",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Mummies are undead whose bodies have been dried and preserved. The spirit is bound to the corpse through powerful necromantic rituals known only to a select few priests. In your setting, you may allow a more powerful version of the zombie power to create these horrors.",
			"The most common type of mummy, these creatures were servants and soldiers placed in tombs to guard them for all eternity."
		),
		attributes: {
			agility: "d4",
			smarts: "d6",
			spirit: "d10",
			strength: "d12+2",
			vigor: "d12"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d8"
		},
		charisma: "",
		pace: "4",
		parry: "6",
		toughness: "10",
		treasure: "Meager",
		armor: "",

		abilities: Array(
			{
				name: "Arcane Resistance",
				description: "+2 Armor versus magic, and +2 to rolls made to resist magical effects."
			},
			{
				name: "Fear",
				description: "Anyone seeing a guardian mummy must make a Fear check."
			},
			{
				name: "Fist",
				description: "Str+d6"
			},
			{
				name: "Mummy Rot",
				description: "Anyone touched by a mummy, whether he is damaged or not, must make a Vigor roll. Failure means the character has “mummy rot” and suffers an immediate wound."
			},
			{
				name: "Shuffling Gait",
				description: "Guardian mummies roll a d4 running die."
			},
			{
				name: "Undead",
				description: "+2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called"
			},
			{
				name: "Weakness (Fire)",
				description: "Mummies take +4 damage from fire."
			}
		),
		book: currentBook,

		page: "p136"
	},
	{
		name: "Mummy Lord",
		tags: "mummies,mummy,undead",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Mummies are undead whose bodies have been dried and preserved. The spirit is bound to the corpse through powerful necromantic rituals known only to a select few priests. In your setting, you may allow a more powerful version of the zombie power to create these horrors.",
			"Mummy lords were priests and mages preserved for eternity and granted an unearthly life through arcane rituals."
		),
		attributes: {
			agility: "d4",
			smarts: "d10",
			spirit: "d12",
			strength: "d12+4",
			vigor: "d12"
		},
		skills: {
			'Fighting' : "d10",
			'Intimidation' : "d10",
			'Notice' : "d8",
			'Spellcasting' : "d10"
		},
		charisma: "",
		pace: "4",
		parry: "7",
		toughness: "13",
		treasure: "Rich",
		armor: "3",

		abilities: Array(
			{
				name: "Arcane Background (Magic)",
				description: "A mummy typically has 30 Power Points and knows barrier (wall of darkness), bolt (swarm of tiny skulls), deflection (shield of swirling skulls), fear (unearthly cry), obscurement (area of darkness), and zombie (ritual preparation)."
			},
			{
				name: "Fearless",
				description: "Mummy lords are immune to Fear and Intimidation."
			},
			{
				name: "Fist",
				description: "Str+d6"
			},
			{
				name: "Improved Arcane Resistance",
				description: "+4 Armor versus magic, and +4 to rolls made to resist magic effects."
			},
			{
				name: "Mummy Rot",
				description: "Anyone touched by a mummy, whether he is damaged or not, must make a Vigor roll. Failure means the character has “mummy rot” and suffers an immediate wound."
			},
			{
				name: "Shuffling Gait",
				description: "Guardian mummies roll a d4 running die."
			},
			{
				name: "Undead",
				description: "+2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called"
			},
			{
				name: "Weakness (Fire)",
				description: "Mummies take +4 damage from fire."
			}
		),
		book: currentBook,

		page: "p137"
	},
	{
		name: "Guardian Naga",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Naga are giant snakes with the head of women. In Buddhist mythology, the naga tried to follow Buddha’s teaching and become a monk, transforming into human form to nfiltrate the monks. Buddha discovered the ploy and told the naga it was a beast, not a human, and therefore could not be ordained. Still loyal to the Buddhist faith, the naga became a temple guardian. In a fantasy campaign, nagas serve as guardians of temples to the gods of good."
		),
		attributes: {
			agility: "d8",
			smarts: "d10",
			spirit: "d10",
			strength: "d12",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Notice' : "d10",
			'Persuasion' : "d10",
			'Stealth' : "d4",
			'Taunt' : "d8"
		},
		charisma: "",
		pace: "7",
		parry: "6",
		toughness: "10",
		treasure: "Worthwhile",
		armor: "0",

		abilities: Array(
			{
				name: "Bite",
				description: "Str+d4"
			},
			{
				name: "Constrict",
				description: "A naga may choose to constrict a foe in her coils by making a Fighting attack. The round it entangles and each round thereafter it causes Str+d8 damage. The prey may attempt to escape by getting a raise on an opposed Strength roll. Given its large size, a naga may constrict one foe and bite another, suffering the standard multi- action penalty."
			},
			{
				name: "Hypnotic Gaze",
				description: "The naga can use the puppet power using her Smarts instead of an arcane skill. She can use and maintain the power indefinitely, but may only affect one target at a time."
			},
			{
				name: "Quick",
				description: "A naga is frighteningly quick for its size, and redraws cards of 5 or less."
			},
			{
				name: "Shape Change",
				description: "As an action, a naga can change into female human form with a Smarts roll at –2. Changing back into naga form requires a Smarts roll."
			},
			{
				name: "Size+3",
				description: "A naga is 15’ long and about a foot in diameter."
			},
			{
				name: "Strong Willed",
				description: "A naga cannot be swayed by threats or taunts. She receives a +2 bonus to defend against Tests of Will."
			}
		),
		book: currentBook,

		page: "p137"
	},
	{
		name: "Corrupt Naga",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Naga are giant snakes with the head of women. In Buddhist mythology, the naga tried to follow Buddha’s teaching and become a monk, transforming into human form to nfiltrate the monks. Buddha discovered the ploy and told the naga it was a beast, not a human, and therefore could not be ordained. Still loyal to the Buddhist faith, the naga became a temple guardian. In a fantasy campaign, nagas serve as guardians of temples to the gods of good.",
			"In a fantasy setting, there is no reason why a naga cannot follow the gods of evil. Unlike guardian naga, who are forbidden from joining the priesthood and learning magic, corrupt naga are powerful spellcasters. Some even go so far as to form their own cults, with the naga as living gods."
		),
		attributes: {
			agility: "d8",
			smarts: "d10",
			spirit: "d10",
			strength: "d12",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d12",
			'Notice' : "d10",
			'Stealth' : "d4",
			'Taunt' : "d8"
		},
		charisma: "",
		pace: "7",
		parry: "6",
		toughness: "10",
		treasure: "Worthwhile",
		armor: "0",

		abilities: Array(
			{
				name: "Bite",
				description: "Str+d4"
			},
			{
				name: "Constrict",
				description: "A naga may choose to constrict a foe in her coils by making a Fighting attack. The round it entangles and each round thereafter it causes Str+d8 damage. The prey may attempt to escape by getting a raise on an opposed Strength roll. Given its large size, a naga may constrict one foe and bite another, suffering the standard multi- action penalty."
			},
			{
				name: "Hypnotic Gaze",
				description: "The naga can use the puppet power using her Smarts instead of an arcane skill. She can use and maintain the power indefinitely, but may only affect one target at a time."
			},
			{
				name: "Magic",
				description: "Corrupt nagas practice arcane magic. They have 30 Power Points and know the following powers: <em>armor, bolt, boost/lower trait, burrow, deflection, detect/ conceal arcana, dispel, fear, invisibility, obscure, quickness, and speak language</em>. They retain this ability in human form."
			},
			{
				name: "Quick",
				description: "A naga is frighteningly quick for its size, and redraws cards of 5 or less."
			},
			{
				name: "Shape Change",
				description: "As an action, a naga can change into female human form with a Smarts roll at –2. Changing back into naga form requires a Smarts roll."
			},
			{
				name: "Size+3",
				description: "A naga is 15’ long and about a foot in diameter."
			},
			{
				name: "Strong Willed",
				description: "A naga cannot be swayed by threats or taunts. She receives a +2 bonus to defend against Tests of Will."
			}
		),
		book: currentBook,

		page: "p138"
	},
	{
		name: "Naga - Human Form",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Naga are giant snakes with the head of women. In Buddhist mythology, the naga tried to follow Buddha’s teaching and become a monk, transforming into human form to nfiltrate the monks. Buddha discovered the ploy and told the naga it was a beast, not a human, and therefore could not be ordained. Still loyal to the Buddhist faith, the naga became a temple guardian. In a fantasy campaign, nagas serve as guardians of temples to the gods of good."
		),
		attributes: {
			agility: "d8",
			smarts: "d10",
			spirit: "d10",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Notice' : "d6",
			'Persuasion' : "d10",
			'Stealth' : "d6",
			'Taunt' : "d8"
		},
		charisma: "+4",
		pace: "7",
		parry: "6",
		toughness: "10",
		treasure: "",
		armor: "0",

		abilities: Array(
			{
				name: "Hypnotic Gaze",
				description: "The naga can use the puppet power using her Smarts instead of an arcane skill. She can use and maintain the power indefinitely, but may only affect one target at a time."
			},
			{
				name: "Quick",
				description: "A naga is frighteningly quick for its size, and redraws cards of 5 or less."
			},
			{
				name: "Strong Willed",
				description: "A naga cannot be swayed by threats or taunts. She receives a +2 bonus to defend against Tests of Will."
			},
			{
				name: "Very Attractive",
				description: "The human form of the naga is that of a beautiful, dusky-skinned woman."
			}
		),
		book: currentBook,

		page: "p138"
	},
	{
		name: "Naiad",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Naiads are fresh water spirits in the way dryads are tree spirits. Nereids are the salt water equivalent to naiads and use the same stats."
		),
		attributes: {
			agility: "d8",
			smarts: "d10",
			spirit: "d10",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d4",
			'Notice' : "d10",
			'Persuasion' : "d8",
			'Spellcasting' : "d10",
			'Stealth' : "d10",
			'Swimming' : "d10"
		},
		charisma: "+2",
		pace: "6",
		parry: "4",
		toughness: "5",
		treasure: "None",
		armor: "0",

		abilities: Array(
			{
				name: "Aquatic",
				description: "Naiads have a Pace of 10 underwater."
			},
			{
				name: "Attractive",
				description: "Naiads resemble beautiful human females."
			},
			{
				name: "Magic",
				description: "Naiads have 30 Power Points and know the following powers: barrier (wall of water), beast friend (aquatic only), entangle (bound by water ), healing, invisibility (assumes a watery, translucent form), shape change (aquatic only), and stun."
			},
			{
				name: "Pool Bond",
				description: "Naiads share their soul with a particular pool or similar small body of water. They must remain within 36” of the water or their magic does not work. If the pool is polluted, the naiad must make a Vigor roll each day or suffer a Fatigue level until the taint is cleared."
			}
		),
		book: currentBook,

		page: "p138"
	},
	{
		name: "Nightmare",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Nightmares are demonic steeds. They are black as night, with fiery hooves and eyes. They only accept evil riders, throwing off and stomping those of good heart."
		),
		attributes: {
			agility: "d6",
			smarts: "d6 (A)",
			spirit: "d6",
			strength: "d12+4",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d8"
		},
		charisma: "",
		pace: "10",
		parry: "6",
		toughness: "10 or 13 (3)",
		treasure: "None",
		armor: "",
		gear: "Some necromancers give their nightmares barding (+3)",

		abilities: Array(
			{
				name: "Brave",
				description: "Nightmares are not prone to fright and gain +2 to Fear checks."
			},
			{
				name: "Fleet Footed",
				description: "Nightmares roll a d8 for their running die. Nightmares run just above the surface of the ground and do not suffer movement penalties for Difficult Terrain."
			},
			{
				name: "Kick",
				description: "Str+d6"
			},
			{
				name: "Size+3",
				description: "Nightmares weigh between 800 and 1000 pounds."
			}
		),
		book: currentBook,

		page: "p139"
	},
	{
		name: "Courtier",
		tags: "noble",
		wildcard: 0,
		image: "",
		blurb: Array(
			"This entry covers both true nobles and their courtier lackeys, such as seneschals and chancellors. The generic noble is suitable for every noble Rank from baron to emperor.",
			"Courtiers are more than just servants— they are advisors and often hold positions of importance within the court. Unless the characters know a noble personally, most dealings are conducted through a trusted courtier, typically a seneschal."
		),
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d6",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d4",
			'Notice' : "d8",
			'Persuasion' : "d8",
			'Riding' : "d6",
			'Streetwise' : "d8"
		},
		charisma: "+2",
		pace: "6",
		parry: "5",
		toughness: "5",
		treasure: "Meager",
		armor: "",
		gear: "",
		edges: "Charismatic",

		abilities: Array(

		),
		book: currentBook,

		page: "p139"
	},
	{
		name: "Court Jester",
		tags: "noble",
		wildcard: 0,
		image: "",
		blurb: Array(
			"This entry covers both true nobles and their courtier lackeys, such as seneschals and chancellors. The generic noble is suitable for every noble Rank from baron to emperor.",
			"Despite often being dwarves or hunchbacks (or both), jesters are more than just comical entertainment for the nobility. They have their lord’s ear, are privy to his most secret affairs, can get away with insulting powerful guests, and conceal great wisdom in their seemingly nonsensical riddles and japes."
		),
		attributes: {
			agility: "d10",
			smarts: "d8",
			spirit: "d8",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d4",
			'Notice' : "d8",
			'Persuasion' : "d6",
			'Streetwise' : "d8",
			'Taunt': "d12"
		},
		charisma: "",
		pace: "6",
		parry: "4",
		toughness: "5",
		treasure: "Meager",
		armor: "",
		gear: "Stick (Str+d4)",
		edges: "Acrobat, Ambidextrous, Strong Willed",
		hindrances: "Various, but often some sort of physical affliction",

		abilities: Array(
			{
				name: "Knowledgeable",
				description: "Jesters are expected to be well versed in many topics. They get +2 to all Common Knowledge rolls."
			}
		),
		book: currentBook,

		page: "p140"
	},
	{
		name: "Noble",
		tags: "noble",
		wildcard: 0,
		image: "",
		blurb: Array(
			"This entry covers both true nobles and their courtier lackeys, such as seneschals and chancellors. The generic noble is suitable for every noble Rank from baron to emperor.",
			"Some nobles are decadent dandies content with living a life of luxury. Others are rich landowners, skilled in business matters. Other noble types include military commanders, advisors to a higher authority, poverty stricken ones, extremely wealthy ones, and those who dabble in forbidden arts.",
			"This version presents a typical middle-of- the-road noble. A few specific Hindrances and Edges can quickly turn this into any sort of noble you need."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d8",
			strength: "d8",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d8",
			'Notice' : "d6",
			'Persuasion' : "d6",
			'Riding' : "d8"
		},
		charisma: "+2",
		pace: "6",
		parry: "6",
		toughness: "5",
		treasure: "Worthwhile, Rich in castle",
		armor: "",
		gear: "Rapier (Str+d4, +1 Parry) in court; war gear varies with type of noble",
		edges: "Command, Connection, Noble",
		hindrances: "Various",

		abilities: Array(

		),
		book: currentBook,

		page: "p140"
	},

	{
		name: "Octopus, Giant",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"These terrors of the deep are aggressive and always hungry. Alone, they are quite cowardly and attack only what they consider easy prey. Wounded beasts typically emit an ink cloud and attempt to escape.",
			"Characters often try to sever tentacles. A tentacle is severed if it takes the creature’s Toughness in damage in one shot from an edged weapon. Attacking a tentacle that has entangled a friend is somewhat risky—a roll of 1 on the attack die means the ally is hit instead."
		),
		attributes: {
			agility: "d8",
			smarts: "d4(A)",
			spirit: "d6",
			strength: "d12+4",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d6",
			'Stealth' : "d6",
			'Swimming' : "d6"
		},
		charisma: "",
		pace: "0",
		parry: "6",
		toughness: "12",
		treasure: "None",
		armor: "",
		gear: "",
		edges: "",
		hindrances: "",

		abilities: Array(
			{
				name: "Aquatic",
				description: "Pace 6"
			},
			{
				name: "Huge",
				description: "Characters add +4 when attacking a giant octopus due to their great size."
			},
			{
				name: "Ink Cloud",
				description: "A giant octopus can spurt a cloud of black ink once per day. The cloud fills a sphere equal to a Large Burst Template. No sight or smell functions within this putrid stuff, even for the octopus."
			},
			{
				name: "Size+6",
				description: "The body of a giant octopus is as big as a sloop, while each tentacle is over 20’ long."
			},{
				name: "Tentacles",
				description: "A giant octopus may make up to four attacks each round. On a raise, the creature has grappled the victim. An entangled victim may only attempt an opposed Strength roll each round to escape. Once grappled, the octopus does its Strength damage automatically by crushing with its arms and rending with its beak. A victim killed by an octopus’ tentacles is usually ripped in half."
			}
		),
		book: currentBook,

		page: "p140"
	},

	{
		name: "Ogre",
		tags: "ogres",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Ogres are kin to orcs and lesser giants. They are often taken in by orc clans, who respect the dumb brutes for their savagery and strength. Orcs often pit their “pet” ogres in savage combats against their rivals’ ogres."
		),
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d6",
			strength: "d12+3",
			vigor: "d12"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d6",
			'Notice' : "d4",
			'Throwing' : "d6"
		},
		charisma: "",
		pace: "0",
		parry: "7",
		toughness: "11",
		treasure: "Meager",
		armor: "1",
		gear: "Thick hides (+1), massive club (Str+d8)",
		edges: "",
		hindrances: "",

		abilities: Array(
			{
				name: "Size+3",
				description: "Most ogres are over 8’ tall with pot-bellies and massive arms and legs."
			},
			{
				name: "Sweep",
				description: "May attack all adjacent foes at –2."
			}
		),
		book: currentBook,

		page: "p141"
	},
	{
		name: "Orc",
		wildcard: 0,
		image: "https://www.frontlinegaming.org/wp-content/uploads/2013/01/4e_DnD_Orcs_by_RalphHorsley1.jpeg",
		blurb: "Orcs are savage, green-skinned humanoids with pig-like features, including snouts and sometimes even tusks. They have foul temperaments, and rarely take prisoners.",
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d6",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d8",
			'Notice' : "d6",
			'Shooting' : "d6",
			'Stealth' : "d6",
			'Throwing' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "8",
		armor: "1",
		treasure: "Meager, per 3 orcs",
		gear: "Leather armor (+1), scimitar (Str+d8).",
		abilities: Array(
			{
				name: "Infravision",
				description: "Halves penalties for poor light vs. warm targets."
			},
			{
				name: "Size +1",
				description: "Orcs are slightly larger than humans."
			}
		),
		book: currentBook,

		page: "p141"
	},
	{
		name: "Orc Chieftan",
		wildcard: 1,
		image: "http://fc09.deviantart.net/fs71/f/2013/098/0/0/orc_chieftain_final_by_director_16-d60veug.jpg",
		blurb: Array(
			"Orcs are savage, green-skinned humanoids with pig-like features, including snouts and sometimes even tusks. They have foul temperaments, and rarely take prisoners.",
			"The leader of small orc clans is always the most deadly brute in the bunch. Orc chieftains generally have a magical item or two in settings where such things are relatively common (most “swords and sorcery” worlds)."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d6",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d12",
			'Intimidation' : "d10",
			'Notice' : "d6",
			'Shooting' : "d8",
			'Stealth' : "d6",
			'Throwing' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "8",
		toughness: "11",
		armor: "3",
		treasure: "Meager",
		gear: "Plate chest plate (+3), chain arms and legs (+2), battle axe (Str+d10).",
		abilities: Array(
			{
				name: "Infravision",
				description: "Halves penalties for poor light vs. warm targets."
			},
			{
				name: "Size +1",
				description: "Orcs are slightly larger than humans."
			},
			{
				name: "Sweep",
				description: "May attack all adjacent characters at –2 penalty."
			}
		),
		book: currentBook,

		page: "p141"
	},
	{
		name: "Orc Shaman",
		wildcard: 0,
		image: "http://fc09.deviantart.net/fs71/f/2013/098/0/0/orc_chieftain_final_by_director_16-d60veug.jpg",
		blurb: Array(
			"Orcs are savage, green-skinned humanoids with pig-like features, including snouts and sometimes even tusks. They have foul temperaments, and rarely take prisoners.",
			"Orcs worship gods of destruction and slaughter. Their shamans personify this image, and while they are usually the smallest members of a clan, they are often the most savage.",
			"Orc shamans drape themselves in crude fetishes, bones, and other occult trappings to appear more menacing to their foes. Their power is simple hedge magic, however, and is not divinely inspired despite several millennia believing otherwise."
		),
		attributes: {
			agility: "d6",
			smarts: "d8",
			spirit: "d6",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d8",
			'Notice' : "d6",
			'Shooting' : "d6",
			'Spellcasting' : "d8",
			'Stealth' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "6",
		armor: "1",
		treasure: "Meager",
		gear: "Leather armor (+1), spear (Str+d6, Parry +1, Reach 1)",
		abilities: Array(
			{
				name: "Infravision",
				description: "Halves penalties for poor light vs. warm targets."
			},
			{
				name: "Spells",
				description: "Shamans have 15 power points and typically know <em>armor, bolt, fear, and smite.</em>"
			}
		),
		book: currentBook,

		page: "p142"
	},
	{
		name: "Pegasus",
		tags: "pegasi",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Pegasi (singular: pegasus) are horses with great, feathery wings. In Greek myth the animal was unique, but in many fantasy settings they are standard creatures."
		),
		attributes: {
			agility: "d8",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d12",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d6"
		},
		charisma: "",
		pace: "8",
		parry: "5",
		toughness: "8",
		treasure: "None",
		armor: "",
		gear: "",

		abilities: Array(
			{
				name: "Flying",
				description: "Pegasi have a Flying Pace of 12” and a Climb of 6”."
			},
			{
				name: "Kick",
				description: "Str"
			},
			{
				name: "Size+2",
				description: "Pegasi weigh around 800 pounds."
			}
		),
		book: currentBook,

		page: "p142"
	},
	{
		name: "Phoenix",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Clad in fiery feathers of yellow, orange, and red, the immortal phoenix is seen as a representation of the sun god. Many cultures consider the bird sacred, but its feathers contain magical power and thus the bird is often hunted.",
			"The greatest gift a phoenix can bestow is one of its tail feathers. Although the magic in them is temporary, the phoenix forever weakens its life-force with the gift."
		),
		attributes: {
			agility: "d10",
			smarts: "d10 (A)",
			spirit: "d8",
			strength: "d6",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d10",
			"Spellcasting" : "d12"
		},
		charisma: "",
		pace: "2",
		parry: "5",
		toughness: "6",
		treasure: "None",
		armor: "",
		gear: "",

		abilities: Array(
			{
				name: "Flight",
				description: "Phoenix have a Flying Pace of 12” and a Climb of 6”."
			},
			{
				name: "Powers",
				description: "A phoenix has 35 Power Points and knows the following powers: <em>barrier, blast, bolt, burst, and light</em>. All powers have a fire trapping."
			},
			{
				name: "Rebirth",
				description: "If a phoenix is killed, it explodes into flame filling a Medium Burst Template. Creatures within the Template suffer 2d10 damage and have a chance of catching fire. During the explosion, the body of the phoenix transforms into an egg. A new phoenix hatches 2d6 days later."
			},
			{
				name: "Size-1",
				description: "A phoenix is the same size as a large eagle."
			},
			{
				name: "Tail Feathers",
				description: "Every phoenix has 35 magical tail feathers, each acting as a one-shot spell. Each of the thirteen yellow feathers contain bolt (one bolt, 3d6 damage), the twelve orange feathers have burst, and the ten red feathers hold blast (3d6 damage in Medium Burst Template). The powers are cast using the phoenix’s Spellcasting—all the user need do to activate the power is throw the feather at the target (as an action). Removed tail feathers do not grow back. Furthermore, each lost feather permanently reduces the bird’s Power Points by one. When the last feather is removed, the bird explodes (as above) but is not reborn."
			}
		),
		book: currentBook,

		page: "p142"
	},
	{
		name: "Priest of Death",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Priests are the servants of the gods. Each deity has a network of priests, whose duty it is to spread the faith and ensure the tenets of the god are upheld by the faithful. Every priest has equipment and powers appropriate to his faith. A sample of commonly-encountered priests is presented below."
		),
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d10",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Faith' : "d10",
			'Intimidation' : "d8",
			'Notice' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "6",
		treasure: "Meager",
		armor: "1",
		gear: "Leather armor (+1), short sword (Str+d6), holy symbol",
		hindrances: "Various",
		edges: "Arcane Background (Miracles), New Power, Points",

		abilities: Array(
			{
				name: "Spells",
				description: "Death priests typically have 15 Power Points and know armor (bone trapping), fear, and zombie."
			}
		),
		book: currentBook,

		page: "p142-p143"
	},
	{
		name: "Priest of Healing",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Priests are the servants of the gods. Each deity has a network of priests, whose duty it is to spread the faith and ensure the tenets of the god are upheld by the faithful. Every priest has equipment and powers appropriate to his faith. A sample of commonly-encountered priests is presented below."
		),
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d10",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Faith' : "d10",
			'Healing' : "d10",
			'Notice' : "d6",
			'Persuasion' : "d8",
			'Taunt' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "3",
		toughness: "5",
		treasure: "Meager",
		armor: "1",
		gear: "Staff (Str+d4, Parry +1, Reach 1), holy symbol",
		hindrances: "Pacifist (Minor), Vow (care for the sick)",
		edges: "Arcane Background (Miracles), Healer, New Power, Power Points",

		abilities: Array(
			{
				name: "Spells",
				description: "Healing priests typically have 15 Power Points and know deflection, healing, and light."
			}
		),
		book: currentBook,

		page: "p143"
	},
	{
		name: "Priest of War",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Priests are the servants of the gods. Each deity has a network of priests, whose duty it is to spread the faith and ensure the tenets of the god are upheld by the faithful. Every priest has equipment and powers appropriate to his faith. A sample of commonly-encountered priests is presented below."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d8",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d10",
			'Faith' : "d8",
			'Intimidation' : "d8",
			'Knowledge (Battle)' : "d6",
			'Notice' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "8",
		toughness: "8",
		treasure: "Meager",
		armor: "2",
		gear: "Chain mail (+2), battle axe (Str+d8), medium shield (+1 Parry), holy symbol",
		hindrances: "Various",
		edges: "Arcane Background (Miracles), New Power, Power Points",

		abilities: Array(
			{
				name: "Spells",
				description: "War priests typically have 15 Power Points and know armor, boost/lower trait, and smite."
			}
		),
		book: currentBook,

		page: "p143"
	},
	{
		name: "Typical Ranger",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Rangers inhabit wilderness areas, preferring to avoid crowded towns and cities. Some belong to organizations often dedicated to hunting down evil creatures and protecting the wilds. Others are solitary, hiring out their services as guides and trackers."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d8",
			strength: "d6",
			vigor: "d8"
		},
		skills: {
			'Climbing' : "d8",
			'Fighting' : "d8",
			'Healing' : "d6",
			'Intimidation' : "d6",
			'Notice' : "d8",
			'Riding' : "d6",
			'Shooting' : "d8",
			'Stealth' : "d8",
			'Survival' : "d8",
			'Tracking' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "7",
		treasure: "Meager",
		armor: "1",
		gear: "Leather armor (+1), long sword (Str+d8), dagger (Str+d4), long bow (Range: 15/30/60, Damage: 2d6)",
		hindrances: "Various",
		edges: "Beast Master, Woodsman",

		abilities: Array(
		),
		book: currentBook,

		page: "p143"
	},
	{
		name: "Veteran Ranger",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Rangers inhabit wilderness areas, preferring to avoid crowded towns and cities. Some belong to organizations often dedicated to hunting down evil creatures and protecting the wilds. Others are solitary, hiring out their services as guides and trackers."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d8",
			strength: "d8",
			vigor: "d10"
		},
		skills: {
			'Climbing' : "d8",
			'Fighting' : "d10",
			'Healing' : "d6",
			'Intimidation' : "d6",
			'Notice' : "d10",
			'Riding' : "d6",
			'Shooting' : "d10",
			'Stealth' : "d8",
			'Survival' : "d10",
			'Tracking' : "d10"
		},
		charisma: "",
		pace: "6",
		parry: "7",
		toughness: "8",
		treasure: "Meager",
		armor: "1",
		gear: "Leather armor (+1), long sword (Str+d8), dagger (Str+d4), long bow (Range: 15/30/60, Damage: 2d6)",
		hindrances: "Various",
		edges: "Beast Master, Combat Reflexes, Steady Hands, Woodsman",

		abilities: Array(
		),
		book: currentBook,

		page: "p144"
	},
	{
		name: "Rat Men",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Rat men are, as the name implies, a cross between rats and humans. They are bipedal, but otherwise resemble rats. They are not lycanthropes, for they cannot change into a purely human form. Most rat men colonies are found in or beneath cities, where they scavenge for food and dropped coins."
		),
		attributes: {
			agility: "d10",
			smarts: "d6",
			spirit: "d8",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Climbing' : "d8",
			'Fighting' : "d6",
			'Notice' : "d8",
			'Stealth' : "d10",
			'Survival' : "d8",
			'Tracking' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "5",
		treasure: "Meager, per 5 rat men",
		armor: "0",
		gear: "Short sword (Str+d6)",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Bite",
				description: "Str+d4"
			},
			{
				name: "Direction Sense",
				description: "Rat men usually live in sewers or slums. Maneuvering around these mazes has given them a good sense of direction. Rat men never get lost, even in nonnative locales."
			},
			{
				name: "Immunity",
				description: "Rat men are immune to poison and disease."
			},
			{
				name: "Infection",
				description: "Anyone bitten by a rat man must make a Vigor roll or the wound becomes swollen and infected. The victim suffers a level of Fatigue, which is recovered with a successful Healing roll or after 24 hours. Cumulative infections can cause a victim to be Incapacitated, but cannot lead to Death."
			}
		),
		book: currentBook,

		page: "p144"
	},
	{
		name: "Redcap",
		tags: "goblins,goblin",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Redcaps are related to goblins, but are much larger and more ferocious. Their name comes from the woolen hats they wear, which are soaked in the blood of their victims."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d6",
			strength: "d12",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d10",
			'Intimidation' : "d10",
			'Notice' : "d6",
			'Taunt' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "10",
		treasure: "Meager",
		armor: "1",
		gear: "Leather armor (+1), great axe (Str+d10, –1 Parry, requires 2 hands)",
		hindrances: "Bloodthirsty",
		edges: "Berserk, Combat Reflexes, Improved Frenzy, Improved Nerves of Steel, Improved Sweep",

		abilities: Array(
			{
				name: "Fear",
				description: "Characters seeing a redcap must make a Fear check."
			},
			{
				name: "Infravision",
				description: "Redcaps halve penalties for dark lighting against living targets (round down)."
			},
			{
				name: "Size+2",
				description: "Redcaps stand over 8’ tall."
			}
		),
		book: currentBook,

		page: "p144"
	},
	{
		name: "Roc",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"These massive birds are large enough to pick up small ships and whales. The great Sinbad the Sailor had a near-fatal encounter with one. Most roost in isolated aeries, searching for large prey for their feasts. Sailors and city guard have sometimes managed to fend off these beasts with ballistae, but even these weapons rarely penetrate the roc’s lizard-like skin."
		),
		attributes: {
			agility: "d6",
			smarts: "d6(A)",
			spirit: "d6",
			strength: "d12+8",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d10",
			'Notice' : "d8"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "14",
		treasure: "Rich, In Nest",
		armor: "0",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Bash",
				description: "Rocs have incredible lift, and can pick up small ships (those with a base Toughness of 15 or less) to drop them on the rocks. It takes the roc a full round to properly grasp a ship, which is a Fighting attack against a “Parry” of 2. With a raise, the roc lifts the boat in the air and ascends 6” per round afterward. After five full rounds, it drops its prey, automatically destroying any boat it can lift. Characters suffer damage according to the height."
			},
			{
				name: "Flight",
				description: "Rocs have a Flying Pace of 16”, with an Acceleration of 4” and a Climb of 6”."
			},
			{
				name: "Huge",
				description: "Characters add +4 when attacking a roc due to their great size."
			},
			{
				name: "Size+8",
				description: "Rocs are huge creatures with wingspans over 120’."
			},
			{
				name: "Talons",
				description: "Str+d6; AP 4. These claws are large enough to damage ships with Heavy Armor and fortifications."
			}
		),
		book: currentBook,

		page: "p144-p145"
	},
	{
		name: "Sabre-Toothed Tiger",
		tags: "saber,sabertooth",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Sabre-toothed tigers haunt grasslands using their patterned skin to sneak up on unsuspecting prey. Their twin canine teeth can slice through armor and bone as easily as flesh."
		),
		attributes: {
			agility: "d10",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d12",
			vigor: "d10"
		},
		skills: {
			'Climbing' : "d8",
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Stealth' : "d8",
			'Tracking' : "d6"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "10",
		treasure: "Meager, In Lair",
		armor: "0",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Bite",
				description: "Str+d10, AP 1."
			},
			{
				name: "Claws",
				description: "Str+d6."
			},
			{
				name: "Improved Frenzy",
				description: "A sabre-toothed tiger may make two attacks each round with no penalty."
			},
			{
				name: "Pounce",
				description: "Sabre-tooths often pounce on their prey to best bring their mass and teeth to bear. It can leap 1d6” to gain +4 to its attack and damage. Its Parry is reduced by –2 until its next action when performing the maneuver, however."
			},
			{
				name: "Size+3",
				description: "Sabre-tooths weigh over 800 pounds."
			}
		),
		book: currentBook,

		page: "p145"
	},
	{
		name: "Scorpion, Giant",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Giant scorpions are usually found in hot climates. Unlike their normal-size cousins, giant scorpions are fierce predators."
		),
		attributes: {
			agility: "d8",
			smarts: "d4(A)",
			spirit: "d8",
			strength: "d12+1",
			vigor: "d10"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Notice' : "d6",
			'Stealth' : "d8"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "11",
		treasure: "Meager, In Lair",
		armor: "3",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Armor +3",
				description: " Chitinous skin."
			},
			{
				name: "Grapple",
				description: "A scorpion may grapple a foe with one or both pincers. If it uses both, each must make a successful opposed Strength roll. Escaping from a double grapple gives the prey a –4 penalty to his Strength roll to escape. A stinger attack against a grappled foe is made at +2, +4 if the victim is held in both pincers."
			},
			{
				name: "Improved Frenzy",
				description: "A sabre-toothed tiger may make two attacks each round with no penalty."
			},
			{
				name: "Pincers",
				description: "Str+d4."
			},
			{
				name: "Poison",
				description: "Anyone wounded or Shaken by a stinger attack must make a Vigor roll or immediately become Incapacitated. Death follows in 2d6 rounds."
			},
			{
				name: "Stinger",
				description: "Str+d6."
			},
			{
				name: "Size+1",
				description: "Giant scorpions measure 7’ in length."
			}
		),
		book: currentBook,

		page: "p145"
	},
	{
		name: "Scorpion Man",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Scorpion men have the upper bodies of humans and the lower bodies of scorpions. They prefer hot, dusty environments, but can survive in temperate conditions. They guard their lairs with deadly force."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d6",
			strength: "d10",
			vigor: "d8"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Shooting' : "d10",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "8",
		treasure: "Meager, per 3 scorpion men",
		armor: "2",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Armor +2",
				description: " Chitinous skin."
			},
			{
				name: "Fleet Footed",
				description: "Scorpion Men roll a d8 for their running die, instead of a d6."
			},
			{
				name: "Marksman",
				description: "Scorpion men are expert archers. If they do not move in a turn, they may fire as if they took the aim maneuver."
			},
			{
				name: "Poison",
				description: "Anyone wounded or Shaken by a stinger attack must make a Vigor roll or become Incapacitated. Death follows in 2d6 minutes. A Healing roll at –2 prevents death"
			},
			{
				name: "Stinger",
				description: "Str+d6."
			}
		),
		book: currentBook,

		page: "p146"
	},
	{
		name: "Sea Serpent",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Sea serpents are monstrous beasts, capable of crushing ships into kindling. Even ship- mounted artillery can do little to hurt these nightmarish beasts."
		),
		attributes: {
			agility: "d8",
			smarts: "d4(A)",
			spirit: "d8",
			strength: "d12+8",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d10",
			'Notice' : "d6",
			'Swimming' : "d8"
		},
		charisma: "",
		pace: "-",
		parry: "6",
		toughness: "19",
		treasure: "None",
		armor: "0",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Aquatic",
				description: "Pace 12"
			},
			{
				name: "Bite",
				description: "Str+d6, Reach 2, Heavy Weapon."
			},
			{
				name: "Crush",
				description: "A sea serpent may wrap itsserpentine body around a ship (or large sea creature) as a grapple. Victims suffer damage each round the grapple is maintained. A sea serpent may crush and bite in the same round without incurring a multi-action penalty."
			},
			{
				name: "Gargantuan",
				description: "Heavy Armor. Creatures add +4 when attacking the body of a sea serpent due to its great size. Add Size to damage when crushing but subtract Size of victim. This attack ignores any Armor value of a ship."
			},
			{
				name: "Long Neck",
				description: "A sea serpent’s long neck gives it a Reach of 2."
			},
			{
				name: "Quick",
				description: "Sea serpents possess fast reflexes, able to turn in an instant and whip their long necks to attack passing prey. They redraw action cards of 5 or lower."
			},
			{
				name: "Size +12",
				description: "Sea serpents measure over 150’ long."
			}
		),
		book: currentBook,

		page: "p146"
	},
	{
		name: "Siren Bush",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Siren bushes are carnivorous plants. When they detect living prey, they emit a hypnotic hum which lures the victim into the web of roots. Once close enough, the thorny roots rip into the target’s flesh, saturating the surrounding ground in blood, which the roots then absorb."
		),
		attributes: {
			agility: "d6",
			smarts: "d4(A)",
			spirit: "d6",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d6"
		},
		charisma: "",
		pace: "-",
		parry: "5",
		toughness: "5",
		treasure: "Meager, around base",
		armor: "0",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Plant",
				description: "Plants are not subject to Fear and Tests of Will."
			},
			{
				name: "Roots",
				description: "Str. Extending from the siren bush to a range of 3” is a tangle of surface roots, each covered in sharp thorns. The roots are mobile and can attack everything within range with no multi-action penalty."
			},
			{
				name: "Siren Song",
				description: "Siren bushes emit a low, hypnotic hum when a living creatures approaches within 12”. All creatures in range must make an opposed Spirit roll. Those who fail are subject to the puppet power. Normally the tree uses the power to draw its prey close enough for its roots to attach themselves, though if the need arises it can order them to defend it from attackers."
			}
		),
		book: currentBook,

		page: "p146"
	},
	{
		name: "Skeleton",
		tags: "undead,",
		wildcard: 0,
		image: "http://img2.wikia.nocookie.net/__cb20130516203624/warriorsofmyth/images/4/4a/640x747_16373_Skeleton_2d_fantasy_creature_dark_darkness_skeleton_warrior_picture_image_digital_art.jpg",
		blurb: Array(
			"The skin has already rotted from these risen dead, leaving them slightly quicker than their flesh-laden zombie counterparts."
		),
		attributes: {
			agility: "d8",
			smarts: "d4",
			spirit: "d4",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d6",
			'Notice' : "d4",
			'Shooting' : "d6"
		},
		charisma: "",
		pace: "7",
		parry: "5",
		toughness: "7",
		treasure: "none",
		armor: "0",
		gear: "Varies",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Bony Claws",
				description: "Str+d4"
			},
			{
				name: "Fearless",
				description: "Skeletons are immune to Fear and Intimidation."
			},
			{
				name: "Undead",
				description: "+2 Toughness; +2 to recover from being Shaken; No additional damage from Called Shots; Immune to disease and poison."
			}
		),
		book: currentBook,

		page: "p147"
	},
	{
		name: "Sphinx",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"An sphinx has the body of a lion, the head of a human (often female), and feathered wings. They are extremely clever, enjoy riddles, and savor the taste of human flesh."
		),
		attributes: {
			agility: "d8",
			smarts: "d12+1",
			spirit: "d10",
			strength: "d10",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Notice' : "d6",
			'Persuasion' : "d10",
			'Stealth' : "d8",
			'Taunt' : "d12"
		},
		charisma: "",
		pace: "8",
		parry: "7",
		toughness: "8",
		treasure: "Rich, in lair",
		armor: "0",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Bite/Claw",
				description: "Str+d6"
			},
			{
				name: "Flight",
				description: "Sphinxes have a Flying pace of 12” and a Climb of 6”."
			},
			{
				name: "Riddles",
				description: "Rather than immediately attack sentient prey, sphinxes prefer to enter into riddle contests. If the prey loses, it gets eaten. Riddle contests are conducted as an opposed Smarts roll."
			},
			{
				name: "Size+2",
				description: "Sphinxes are the same size as lions."
			},
			{
				name: "Strong Willed",
				description: "As masters of trickery, sphinxes gets a +2 bonus on Tests of Will."
			},
			{
				name: "Wise",
				description: "Sphinxes are renowned for their wisdom. They get +2 to all Common Knowledge rolls and roll a d8 for all Knowledge skills."
			}
		),
		book: currentBook,

		page: "p147"
	},
	{
		name: "Thief",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Thieves earn a living from stealing from others. Some may be allies of the characters, other are antagonists. In a city or town, thieves often assemble into a guild. Despite being tricky customers, thieves’ guilds are often excellent sources of information—if you can find them."
		),
		attributes: {
			agility: "d10",
			smarts: "d6",
			spirit: "d6",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Climbing' : "d8",
			'Fighting' : "d6",
			'Lockpicking' : "d8",
			'Notice' : "d8",
			'Stealth' : "d8",
			'Streetwise' : "d6",
			'Taunt' : "d6",
			'Throwing' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "6",
		treasure: "Meager, Worthwhile in lair",
		armor: "1",
		gear: "Leather armor (+1), short sword (Str+d6), throwing knives (Range: 3/6/12, Damage: Str+d4)",
		hindrances: "Various",
		edges: "Thief",

		abilities: Array(

		),
		book: currentBook,

		page: "p147"
	},
	{
		name: "Master Thief",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Thieves earn a living from stealing from others. Some may be allies of the characters, other are antagonists. In a city or town, thieves often assemble into a guild. Despite being tricky customers, thieves’ guilds are often excellent sources of information—if you can find them."
		),
		attributes: {
			agility: "d12",
			smarts: "d8",
			spirit: "d8",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Climbing' : "d8",
			'Fighting' : "d6",
			'Lockpicking' : "d12",
			'Notice' : "d10",
			'Stealth' : "d12",
			'Streetwise' : "d8",
			'Taunt' : "d8",
			'Throwing' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "6",
		treasure: "Worthwhile, Rich in lair",
		armor: "1",
		gear: "Leather armor (+1), short sword (Str+d6), throwing knives (Range: 3/6/12, Damage: Str+d4)",
		hindrances: "Various",
		edges: "Acrobat, Dodge, Level Headed, Thief",

		abilities: Array(

		),
		book: currentBook,

		page: "p147"
	},
	{
		name: "Toad, Giant",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Giant toads are monstrous, bloated amphibians, capable of swallowing a riding horse in one gulp."
		),
		attributes: {
			agility: "d8",
			smarts: "d4(A)",
			spirit: "d6",
			strength: "d10",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d10",
			'Stealth' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "10",
		treasure: "Meager, in lair",
		armor: "0",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Bite",
				description: "Str+d6"
			},
			{
				name: "Engulf",
				description: "Giant toads can swallow prey as large as Size +2 whole. While engulfed, the target is grappled as per the core rulebook with a –4 penalty to Strength rolls to escape and suffers 2d6 damage per round from digestive juices. Armor offers no protection"
			},
			{
				name: "Large",
				description: "Attackers are +2 to attack rolls against the toad due to its size."
			},
			{
				name: "Size+4",
				description: "Giant toads weigh over 4000 pounds."
			},
			{
				name: "Tongue",
				description: "Reach 3. The tongue is coated in sticky saliva. If the toad scores a success on its Fighting roll, it has grappled its prey. Unless the foe can escape, it Engulfs him on its next action. On a raise, the victim is grappled and Engulfed in the same action."
			}
		),
		book: currentBook,

		page: "p148"
	},
	{
		name: "Watch",
		tags: "guard,police,guards,soldier,soldiers,",
		wildcard: 0,
		image: "http://www.oocities.org/televisioncity/4766/film/hg/frenchsn.jpg",
		blurb: Array(
			"The watch are charged with maintaining law and order within the settlement and defending it in time of attack. Depending on the settlement, the watch may be a full-time professional body led by officers or local farmers."
		),
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d6",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Notice' : "d6",
			'Shooting' : "d6",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "7",
		toughness: "7",
		treasure: "Meager for every 3 soldiers",
		armor: "2",
		gear: "Chain mail (+2), long sword (Str+d8), open helm (+3), medium shield (+1 Parry), some are equipped with crossbows (Range: 15/30/60, Damage 2d6)",
		hindrances: "",
		edges: "",

		abilities: Array(

		),
		book: currentBook,

		page: "p148"
	},
	{
		name: "Veteran Watch",
		tags: "guard,police,guards,soldier,soldiers,",
		wildcard: 0,
		image: "http://blogs-images.forbes.com/erikkain/files/2012/05/holy-grail-guard.jpg",
		blurb: Array(
			"These fellows are well-trained, well- equipped, and well-led. They are veterans of many scrapes and know how to handle themselves."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d8",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d10",
			'Intimidation' : "d8",
			'Notice' : "d8",
			'Shooting' : "d8",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "8",
		toughness: "9",
		treasure: "Meager",
		armor: "3",
		gear: "Corselet (+3), chain arms and legs (+2), open helm (+3), long sword (Str+d8), dagger (Str+d4), medium shield (+1 Parry), some are equipped with crossbows (Range: 15/30/60, Damage 2d6)",
		hindrances: "",
		edges: "Combat Reflexes",

		abilities: Array(

		),
		book: currentBook,

		page: "p148"
	},
	{
		name: "Watch Captain",
		tags: "guard,police,guards,soldier,soldiers,",
		wildcard: 1,
		image: "http://img114.imageshack.us/img114/2449/hamsterwm3.png",
		blurb: Array(
			"Captains command a squad of town or city guards and answer only to the ruling authority."
		),
		attributes: {
			agility: "d8",
			smarts: "d8",
			spirit: "d8",
			strength: "d10",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d10",
			'Intimidation' : "d10",
			'Notice' : "d8",
			'Riding' : "d8",
			'Shooting' : "d8",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "9",
		toughness: "9",
		treasure: "Worthwhile",
		armor: "3",
		gear: "Corselet (+3), plate arms and legs (+3), open helm (+3), long sword (Str+d8), dagger (Str+d4), medium shield (+1 Parry)",
		hindrances: "",
		edges: "Block, Combat Reflexes, Command",

		abilities: Array(

		),
		book: currentBook,

		page: "p149"
	},
	{
		name: "Town/Village Militia",
		tags: "guard,police,guards,soldier,soldiers,",
		wildcard: 0,
		image: "http://wiki.totalwar.com/images/e/e5/Ven_pike_militia_info.png",
		blurb: Array(
			"Militia are employed in smaller towns and in large villages. Though they are tasked with defending the area in case of emergency, it isn’t their primary job, and they are not particularly skilled."
		),
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d6",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d4",
			'Notice' : "d4",
			'Shooting' : "d6",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "6",
		treasure: "Meager for every 5 soldiers",
		armor: "1",
		gear: "Leather (+1), short sword (Str+d6), dagger (Str+d4), some use slings (Range: 4/8/12, Damage: Str+d4)",
		hindrances: "",
		edges: "",

		abilities: Array(

		),
		book: currentBook,

		page: "p149"
	},
	{
		name: "Tree Man Sapling",
		tags: "",
		wildcard: 0,
		image: "http://digital-art-gallery.com/oid/10/3390x2712_3453_Tree_Man_2d_fantasy_tree_forest_god_picture_image_digital_art.jpg",
		blurb: Array(
			"According to the elves, tree men were present at the beginning of time. They are a sentient species, dedicated to guarding their forests against all forms of attack. They can resemble any form of regular tree, but are always of a type native to the forests in which they live."
		),
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d8",
			strength: "d12+3",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Stealth' : "d8"
		},
		charisma: "",
		pace: "10",
		parry: "6",
		toughness: "15",
		treasure: "None",
		armor: "2",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Armor +2",
				description: "Thick Bark"
			},
			{
				name: "Camouflage",
				description: "When a tree man isn’t moving or attacking it looks just like a normal tree. It adds +4 to Stealth rolls."
			},
			{
				name: "Lashing Branches",
				description: "Str+d10, Reach 3."
			},
			{
				name: "Huge",
				description: "Characters add +4 when attacking a tree man because of its great size."
			},
			{
				name: "Improved Sweep",
				description: "May attack all adjacent foes."
			},
			{
				name: "Powers",
				description: "Tree men are lords of the forest. They have 10 Power Points and know beast friend and entangle."
			},
			{
				name: "Size +6",
				description: "Tree men are over 50’ tall"
			},
			{
				name: "Weakness (Fire)",
				description: "Fire-based attacks do +2 damage and the chance of catching alight is 5–6 on a d6."
			}
		),
		book: currentBook,

		page: "p149"
	},
	{
		name: "Mature Tree Man",
		tags: "",
		wildcard: 0,
		image: "http://digital-art-gallery.com/oid/10/3390x2712_3453_Tree_Man_2d_fantasy_tree_forest_god_picture_image_digital_art.jpg",
		blurb: Array(
			"According to the elves, tree men were present at the beginning of time. They are a sentient species, dedicated to guarding their forests against all forms of attack. They can resemble any form of regular tree, but are always of a type native to the forests in which they live."
		),
		attributes: {
			agility: "d4",
			smarts: "d6",
			spirit: "d8",
			strength: "d12+6",
			vigor: "d12+1"
		},
		skills: {
			'Fighting' : "d10",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "10",
		parry: "7",
		toughness: "21",
		treasure: "None",
		armor: "2",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Armor +2",
				description: "Thick Bark"
			},
			{
				name: "Camouflage",
				description: "When a tree man isn’t moving or attacking it looks just like a normal tree. It adds +4 to Stealth rolls."
			},
			{
				name: "Lashing Branches",
				description: "Str+d10, Reach 6."
			},
			{
				name: "Gargantuan",
				description: "Heavy Armor. Ranged attacks against tree men by man-size creatures are made at +4. His attacks are Heavy Weapons. Add Size to Damage when stomping."
			},
			{
				name: "Huge",
				description: "Characters add +4 when attacking a tree man because of its great size."
			},
			{
				name: "Improved Sweep",
				description: "May attack all adjacent foes."
			},
			{
				name: "Powers",
				description: "Tree men are lords of the forest. They have 25 Power Points and know beast friend and entangle."
			},
			{
				name: "Size +11",
				description: "Tree men are over 100’ tall."
			},
			{
				name: "Weakness (Fire)",
				description: "Fire-based attacks do +2 damage and the chance of catching alight is 5–6 on a d6."
			}
		),
		book: currentBook,

		page: "p149"
	},
	{
		name: "Troll",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Trolls in myths and legends were horrid, flesh-eating creatures who lived in deep woods, beneath bridges, or in hidden mountain caves. In modern games and fiction, the ability to regenerate damage and a weakness to fire have been added. These statistics reflect both backgrounds."
		),
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d6",
			strength: "d12+2",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d10",
			'Notice' : "d6",
			'Swim' : "d6",
			'Throwing' : "d6"
		},
		charisma: "",
		pace: "7",
		parry: "6",
		toughness: "10",
		treasure: "Worthwhile, in lair",
		armor: "1",
		gear: "Spiked clubs (Str+d8)",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Armor +1",
				description: "Rubbery hide"
			},
			{
				name: "Claws",
				description: "Str+d4"
			},
			{
				name: "Infravision",
				description: "Trolls halve penalties for bad lighting when attacking living targets (round down)."
			},
			{
				name: "Regeneration (Fast)",
				description: "Trolls roll to regenerate each round. Fire stops their regeneration, as does cutting off their heads."
			},
			{
				name: "Size +2",
				description: "Trolls are tall, lanky creatures over 8’ tall."
			}
		),
		book: currentBook,

		page: "p150"
	},
	{
		name: "Marsh Troll",
		tags: "swamp troll,swamp,",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Also known as swamp trolls, bog trolls, and marsh fiends, these foul creatures haunt dank marshes. Their skin is black and slimy, matching the murky waters of their home, and they stink like rotting vegetation."
		),
		attributes: {
			agility: "d8",
			smarts: "d4",
			spirit: "d6",
			strength: "d12+1",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d6",
			'Stealth' : "d8",
			'Swimming' : "d6"
		},
		charisma: "",
		pace: "7",
		parry: "6",
		toughness: "9",
		treasure: "Worthwhile, in lair",
		armor: "1",
		gear: "Spiked clubs (Str+d8)",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Armor +1",
				description: "Rubbery hide"
			},
			{
				name: "Claws",
				description: "Str+d4"
			},
			{
				name: "Immunity",
				description: "Immune to poison and disease."
			},
			{
				name: "Infection",
				description: "The claws of a marsh troll are caked in filth. Any creature Shaken or wounded by a claw must make a Vigor roll. On a failure, the wound becomes infected. The victim has a cumulative –1 penalty to trait rolls until the wound is cleaned. This requires a successful Healing roll for each wound."
			},
			{
				name: "Infravision",
				description: "Trolls halve penalties for bad lighting when attacking living targets (round down)."
			},
			{
				name: "Regeneration (Fast)",
				description: "Trolls roll to regenerate each round. Fire stops their regeneration, as does cutting off their heads."
			},
			{
				name: "Size +1",
				description: "Marsh trolls are smaller than regular trolls, being only 7’ tall."
			},
			{
				name: "Stench",
				description: "Any creature adjacent to a marsh troll must make a Vigor roll or become Shaken with nausea."
			}
		),
		book: currentBook,

		page: "p150"
	},
	{
		name: "Sea Troll",
		tags: "skrag,skrags,mane,manes,",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Called sea trolls by some, skrags and manes by others, these flesh-eating fiends haunt areas of rocks and seaweed.",
			"They dress in numerous soft kelps, seashells, and other natural materials that add +2 to their Stealth when they sit quietly in small pools or piles of detritus from the sea."
		),
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d4",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d6",
			'Stealth' : "d6",
			'Swimming' : "d10"
		},
		charisma: "",
		pace: "5",
		parry: "7",
		toughness: "7",
		treasure: "Worthwhile, in lair",
		armor: "1",
		gear: "Coral-tipped spear (Str+d6, Parry +1, Reach 1)",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Aquatic",
				description: "Sea trolls have a Pace of 10 underwater."
			},
			{
				name: "Armor +1",
				description: "Leathery hide"
			},
			{
				name: "Claws",
				description: "Str+d4"
			},
			{
				name: "Infravision",
				description: "Trolls halve penalties for bad lighting when attacking living targets (round down)."
			},
			{
				name: "Regeneration (Fast)",
				description: "Trolls roll to regenerate each round. Fire stops their regeneration, as does cutting off their heads."
			},
			{
				name: "Sea Suit",
				description: "+2 Stealth when hiding."
			}
		),
		book: currentBook,

		page: "p150"
	},
	{
		name: "Sand Troll",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Sand trolls primarily inhabit deserts, though they can sometimes be found on beaches. Their favorite tactic is to burrow just below the surface, then leap out to attack passing prey."
		),
		attributes: {
			agility: "d8",
			smarts: "d4",
			spirit: "d6",
			strength: "d12+1",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d6",
			'Stealth' : "d8"
		},
		charisma: "",
		pace: "7",
		parry: "6",
		toughness: "11",
		treasure: "Worthwhile, in lair",
		armor: "1",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Armor +1",
				description: "Thick hide"
			},
			{
				name: "Burrow",
				description: "Pace 4"
			},
			{
				name: "Claws",
				description: "Str+d4"
			},
			{
				name: "Infravision",
				description: "Trolls halve penalties for bad lighting when attacking living targets (round down)."
			},
			{
				name: "Regeneration (Fast)",
				description: "Trolls roll to regenerate each round. Fire stops their regeneration, as does cutting off their heads."
			},
			{
				name: "Size +3",
				description: "Sand trolls are over 8’ tall."
			}
		),
		book: currentBook,

		page: "p151"
	},
	{
		name: "Tyrannosaurus Rex",
		tags: "dinosaur,",
		wildcard: 0,
		image: "http://www.rareresource.com/photos/dinosaur-gallery/tyrannosaurus-rex.jpg",
		blurb: Array(
			"King of the dinosaurs, the T-rex is a deadly predator, capable of taking on prey much larger than itself. T-rex are poorly suited for mountainous and dense forest terrain, and can most often be found in hilly areas or on plains, where they hunt large herbivores."
		),
		attributes: {
			agility: "d6",
			smarts: "d4 (A)",
			spirit: "d8",
			strength: "d12+4",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d8",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "15",
		treasure: "Worthwhile, in lair",
		armor: "2",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Armor +2",
				description: "Thick hide"
			},
			{
				name: "Bite",
				description: "Str+d8; AP 2."
			},
			{
				name: "Large",
				description: "Creatures add +2 when attacking a T-rex due to their great size."
			},
			{
				name: "Roar",
				description: "As an action a T-rex can emit a terrifying roar. All those who hear the roar—typically anyone within a mile— must make a Spirit roll or be Shaken."
			},
			{
				name: "Size +7",
				description: "These fearsome creatures stand 30’ tall and weigh over 20,000 pounds."
			}
		),
		book: currentBook,

		page: "p151"
	},
	{
		name: "Unicorn",
		tags: "scotland,scottish,",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Often seen as the embodiment of good and purity, unicorns are white horses with a horn growing from their forehead. The horn is said to possess magical properties, which makes them a target for unscrupulous hunters. A unicorn that loses its horn while still alive instantly dies."
		),
		attributes: {
			agility: "d8",
			smarts: "d8 (A)",
			spirit: "d10",
			strength: "d12+2",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d8",
			'Spellcasting' : "d12",
			'Stealth' : "d8"
		},
		charisma: "",
		pace: "10",
		parry: "5",
		toughness: "9",
		treasure: "None",
		armor: "0",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Fleet Footed",
				description: "Unicorns roll a d10 for their running die, rather than a d6."
			},
			{
				name: "Force of Good",
				description: "Unicorns add +2 to damage when attacking supernatural evil foes, and have +2 Toughness when suffering damage from such creatures."
			},
			{
				name: "Healing",
				description: "A unicorn can cast healing and greater healing by touching its horn to a target. It has 40 Power Points. A horn cut from a living unicorn retains these powers. Anyone performing such a foul deed is cursed by the gods of good. The victim’s skin becomes covered in boils and blisters which no magic can heal. He suffers –4 Charisma."
			},
			{
				name: "Kick",
				description: "Str+d6"
			},
			{
				name: "Size +2",
				description: "Unicorns weigh between 600 and 800 pounds."
			}
		),
		book: currentBook,

		page: "p151"
	},
	{
		name: "Velociraptor",
		tags: "dinosaur,",
		wildcard: 0,
		image: "http://velociraptorinmycloset.webstarts.com/uploads/43245373-velociraptors.jpg",
		blurb: Array(
			"These smart, bipedal dinosaurs are pack hunters, and use remarkably well-developed tactics. True velociraptors were the size of turkeys—the larger variety made famous in the movies are actually dinonychus, a related species."
		),
		attributes: {
			agility: "d8",
			smarts: "d8 (A)",
			spirit: "d6",
			strength: "d10",
			vigor: "d8"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d8",
			'Notice' : "d8",
			'Stealth' : "d6",
			'Swim' : "d6"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "9",
		treasure: "Meager, in lair",
		armor: "2",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Armor +2",
				description: "Velociraptors have thick scaly hides."
			},
			{
				name: "Bite or Rake",
				description: "Str+d8"
			},
			{
				name: "Size +1",
				description: "Velociraptors are about 7’ tall."
			}
		),
		book: currentBook,

		page: "p152"
	},
	{
		name: "War tree",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"War trees are regular trees animated through dryad or special elven magic. They are not sentient, but possess animal-like intelligence."
		),
		attributes: {
			agility: "d4",
			smarts: "d4 (A)",
			spirit: "d10",
			strength: "d12+6",
			vigor: "d10"
		},
		skills: {

			'Fighting' : "d8",
			'Notice' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "19",
		treasure: "None",
		armor: "4",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Armor +4",
				description: "Thick bark."
			},
			{
				name: "Branch Swipe",
				description: "Str+d6, Reach 1."
			},
			{
				name: "Huge",
				description: "Attackers are +4 to attack rolls against a war tree due to its siz"
			},
			{
				name: "Plant",
				description: "Plants are not subject to Fear and Tests of Will."
			},
			{
				name: "Size +8",
				description: "An average war tree is over 40’ tall."
			},
			{
				name: "Stomp",
				description: "Str+d10. The creature is naturally adept at using its full weight to smash its foes. Nonrigid armor (leather, chain mail) offers no protection against the stomp."
			},
			{
				name: "Sweep",
				description: "A war tree can attack all adjacent opponents at no penalty."
			},
			{
				name: "Weakness (Fire)",
				description: "Fire attacks cause +4 damage."
			}
		),
		book: currentBook,

		page: "p152"
	},
	{
		name: "Werebear",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Whereas werewolves take delight in using their powers to kill, werebears are generally more refrained. Even in human form, werebears prefer to stay far from civilization. Good werebears, and they do exist, often help elves and rangers patrol the wilderness. Those of evil nature revel in their dark powers, however."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d8",
			strength: "d12+6",
			vigor: "d12+2"
		},
		skills: {
			'Climb' : "d8",
			'Fighting' : "d12+2",
			'Intimidation' : "d10",
			'Notice' : "d12",
			'Swimming' : "d6",
			'Stealth' : "d8",
			'Tracking' : "d8"

		},
		charisma: "",
		pace: "8",
		parry: "9",
		toughness: "11",
		treasure: "Meager, in lair",
		armor: "0",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Bear Hug",
				description: "A werebear that hits with a raise has pinned his foe and attacks at +2 until the foe is freed. The opponent may only attempt to escape the hug on his action, which requires a raise on an opposed Strength roll."
			},
			{
				name: "Bite/Claws",
				description: "Str+d8"
			},
			{
				name: "Infection",
				description: "Anyone slain by a has a 50% chance of rising as a werebear themselves. The character involuntarily transforms every full moon. He gains control of his lycanthropy only after 1d6 years as a wearbear."
			},
			{
				name: "Immunity",
				description: "Werecreatures cannot be wounded by weapons that are not silver, only Shaken"
			},
			{
				name: "Low Light Vision",
				description: "Werebears ignore penalties for Dim and Dark lighting."
			},
			{
				name: "Size +2",
				description: "These creatures stand up to 8’ tall and weigh over 1000 pounds each."
			},
			{
				name: "Weakness (Silver)",
				description: "Wearbears suffer normal damage from silver weapons."
			}
		),
		book: currentBook,

		page: "p153"
	},
	{
		name: "Wight",
		tags: "undead,",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Wights are restless dead, most often noble lords whose greed and earthly desires cause their spirits to remain behind to guard their treasures."
		),
		attributes: {
			agility: "d8",
			smarts: "d8",
			spirit: "d10",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d10",
			'Notice' : "d6",
			'Stealth' : "d10"

		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "11",
		treasure: "Rich, in lair",
		armor: "4",
		gear: "Ancient bronze breastplate (+3), bronze long sword (Str+d8)",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Armor +1",
				description: "Leathery Skin"
			},
			{
				name: "Bony Claws",
				description: "Str+d4"
			},
			{
				name: "Fear -1",
				description: "Anyone who sees a wight must make a Fear check at –1."
			},
			{
				name: "Fearless",
				description: "Wights are immune to Fear and Intimidation."
			},
			{
				name: "Poison",
				description: "Wights’ claws deliver a powerful neurotoxin. A character clawed by a wight must make a Vigor roll at –2. With success, the character gets the “shakes,” suffering –1 to all trait rolls for 24 hours. On a failure, the victim becomes immediately Incapacitated and dies in 2d6 rounds unless treated. A successful Healing roll at –2 prevents this."
			},
			{
				name: "Quick",
				description: "Wights redraw action cards less than 5."
			},
			{
				name: "Undead",
				description: " +2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called shots."
			}
		),
		book: currentBook,

		page: "p153"
	},
	{
		name: "Will-o-the-Wisp",
		tags: "willowisp,will-o-wisp,marsh,phantom,",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Also known as marsh phantoms and ghost lanterns, wisps are malicious spirits resembling glowing balls of light. They captivate victims with their lights, then lead them into quicksand or the lairs of dangerous beasts. They have no combat capabilities and so try to remain a safe distance from their prey."
		),
		attributes: {
			agility: "d10",
			smarts: "d6",
			spirit: "d8",
			strength: "d4",
			vigor: "d6"
		},
		skills: {
			'Notice' : "d10"

		},
		charisma: "",
		pace: "8",
		parry: "2",
		toughness: "3",
		treasure: "None",
		armor: "0",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Charm",
				description: "By swaying from side to side and pulsating, wisps can charm prey into following them. This requires a Spirit roll opposed by the victim’s Smarts. If the victim ever loses sight of the wisp, the charm is broken."
			},
			{
				name: "Size -2",
				description: "Wisps measure 1’ in diameter."
			},
			{
				name: "Small",
				description: "Attackers are –2 to attack wisps because of their size."
			}
		),
		book: currentBook,

		page: "p153"
	},
	{
		name: "Wyvern",
		tags: "",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Wyverns resemble small, two-legged dragons. They have no fiery breath, but possess long necks, sharp teeth, and a poisonous sting in their tail. Some wyverns have wings (Flight: 6”; Climb 3”)."
		),
		attributes: {
			agility: "d8",
			smarts: "d6 (A)",
			spirit: "d8",
			strength: "d12+2",
			vigor: "d10"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Notice' : "d8",

		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "12",
		treasure: "Worthwhile, in lair",
		armor: "2",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Armor +2",
				description: "Thick Scales"
			},
			{
				name: "Bite/Sting",
				description: "Str+d6, Reach 1"
			},
			{
				name: "Improved Frenzy",
				description: "Wyverns may make a bite and sting attack in the same round at no penalty."
			},
			{
				name: "Poison",
				description: "Anyone Shaken or wounded by a sting attack must make a Vigor roll at –2 or be paralyzed for 1d6 rounds."
			},
			{
				name: "Quick",
				description: "Wyverns move with exceptional speed. They redraw action cards of 5 or lower."
			},
			{
				name: "Size +3",
				description: "Wyverns weigh around 1500 points"
			}
		),
		book: currentBook,

		page: "p153"
	},
	{
		name: "Zombie",
		tags: "undead,",
		wildcard: 0,
		image: "",
		blurb: Array(
			"These walking dead are typical groaning fiends looking for fresh meat."
		),
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d4",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d6",
			'Notice' : "d4",
			'Shooting' : "d6"

		},
		charisma: "",
		pace: "4",
		parry: "5",
		toughness: "7",
		treasure: "None",
		armor: "0",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Claws",
				description: "Str+d4"
			},
			{
				name: "Fearless",
				description: "Zombies are immune to Fear and Intimidation."
			},
			{
				name: "Undead",
				description: " +2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called shots."
			},
			{
				name: "Weakness (Head)",
				description: "Shots to a zombie’s head are +2 damage."
			}
		),
		book: currentBook,

		page: "p154"
	},
	{
		name: "Zombie Bear",
		tags: "undead,",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Obviously zombie animals are much more dangerous than regular zombies. You may wish to increase the Power Point cost to raise zombie animals to reflect this. Increasing the cost by 1 Power Point per level of Size is a good place to start, but you could just as easily use the shape change chart as a guideline."
		),
		attributes: {
			agility: "d6",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d12+4",
			vigor: "d12"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d8",
			'Swim' : "d6"

		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "12",
		treasure: "None",
		armor: "0",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Bear Hug",
				description: "Bears don’t actually “hug” their victims, but they do attempt to use their weight to pin their prey and rend it with their claws and teeth. A bear that hits with a raise has pinned his foe and attacks at +2 until the foe is freed. The opponent may only attempt to escape the “hug” on his action, which requires a raise on an opposed Strength roll."
			},
			{
				name: "Claws",
				description: "Str+d6"
			},
			{
				name: "Size+2",
				description: "These creatures stand up to 8’ tall and weigh over 1000 pounds each."
			},
			{
				name: "Undead",
				description: " +2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called shots."
			},
			{
				name: "Weakness (Head)",
				description: "Shots to a zombie’s head are +2 damage."
			}
		),
		book: currentBook,

		page: "p154"
	},
	{
		name: "Zombie Giant Spider",
		tags: "undead,",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Obviously zombie animals are much more dangerous than regular zombies. You may wish to increase the Power Point cost to raise zombie animals to reflect this. Increasing the cost by 1 Power Point per level of Size is a good place to start, but you could just as easily use the shape change chart as a guideline."
		),
		attributes: {
			agility: "d10",
			smarts: "d4(A)",
			spirit: "d6",
			strength: "d10",
			vigor: "d6"
		},
		skills: {
			'Climbing' : "d12+2",
			'Fighting' : "d8",
			'Intimidation' : "d10",
			'Notice' : "d8",
			'Shooting' : "d10",
			'Stealth' : "d10"

		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "7",
		treasure: "None",
		armor: "0",
		gear: "",
		hindrances: "",
		edges: "",

		abilities: Array(
			{
				name: "Bite",
				description: "Str+d4"
			},
			{
				name: "Poison(-4)",
				description: "The bite of the spider causes instant paralysis for those who fail their Vigor roll. It lasts for 1d6 rounds."
			},
			{
				name: "Webbing",
				description: "Spiders can cast webs from their thorax that are the size of Small Burst Templates. This is a Shooting roll with a range of 3/6/12. Anything in the web must cut or break their way free (Toughness 7). Webbed characters can still fight, but all physical actions are at –4."
			},
			{
				name: "Undead",
				description: " +2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called shots."
			},
			{
				name: "Weakness (Head)",
				description: "Shots to a zombie’s head are +2 damage."
			}
		),
		book: currentBook,

		page: "p154"
	}
));