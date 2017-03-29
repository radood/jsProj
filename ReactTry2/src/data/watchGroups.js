"use strict";

const watchGroups = [
	{
		'id': 'patek-philippe',
		'name': 'Patek Philippe',
		'image': 'patek.png',
		'description': 'Patek Philippe & Co. is a Swiss watch manufacturer founded in 1851, located in Geneva and the Vallée de Joux. It designs and manufactures timepieces and movements, including some of the most complicated mechanical watches. It is considered by many experts and aficionados to be one of the most prestigious watch manufacturers.[3] Past owners of Patek Philippe watches include Pope Pius IX, Queen Victoria, Victor Emanuel III of Italy, Christian IX of Denmark.',
		'models' : [
			{ 'image':'5107.jpg','name': 'Calatrava', 'reference': '5107', 'diameter': '37 mm', 'movement': 'automatic', 'complications': 'time & date'},
			{ 'image':'5110.jpg','name': 'Calatrava', 'reference': '5110', 'diameter': '37 mm', 'movement': 'automatic', 'complications': 'world time'},
			{ 'image':'3940.jpg','name': 'Calatrava', 'reference': '3940', 'diameter': '37 mm', 'movement': 'automatic', 'complications': 'perpetual calendar'},
			{ 'image':'3970.jpg','name': 'Calatrava', 'reference': '3970', 'diameter': '37 mm', 'movement': 'manual', 'complications': 'perpetual calendar chronograph'},
			{ 'image':'5055.jpg','name': 'Calatrava', 'reference': '5055', 'diameter': '37 mm', 'movement': 'automatic', 'complications': 'time, date, moonphase, power reserve'},
			{ 'image':'5070.jpg','name': 'Calatrava', 'reference': '5070', 'diameter': '37 mm', 'movement': 'manual', 'complications': 'chronograph'},
			{ 'image':'5146.jpg','name': 'Calatrava', 'reference': '5146', 'diameter': '37 mm', 'movement': 'automatic', 'complications': 'anual calendar'},
			{ 'image':'5167.jpg','name': 'Aquanaut', 'reference': '5167', 'diameter': '37 mm', 'movement': 'automatic', 'complications': 'time & date'},
			{ 'image':'5205.jpg','name': 'Calatrava', 'reference': '5205', 'diameter': '37 mm', 'movement': 'automatic', 'complications': 'anual calendar'},
			{ 'image':'5396.jpg','name': 'Calatrava', 'reference': '5396', 'diameter': '37 mm', 'movement': 'automatic', 'complications': 'anual calendar'},
			{ 'image':'5711.jpg','name': 'Nautilus', 'reference': '5711', 'diameter': '37 mm', 'movement': 'automatic', 'complications': 'time & date'},
		],
	},
	{
		'id': 'vacheron-constantin',
		'name': 'Vacheron Constantin',
		'image': 'vacheron.png',
		'description': 'Vacheron Constantin is a luxury Swiss manufacture of prestige watches and a brand of the Richemont group. It employs around 1,100 people worldwide, most of whom are based in the manufacturing plants in Geneva and Vallée de Joux. It is an active member of the Federation of the Swiss Watch Industry FH.',
		'models' : [
			{ 'image':'patrimony.jpg','name': 'Patrimony', 'reference': '‎85180', 'diameter': '40 mm', 'movement': 'automatic', 'complications': 'time & date'},
			{ 'image':'traditionelle.jpg','name': 'Traditionelle', 'reference': '‎82172', 'diameter': '40 mm', 'movement': 'automatic', 'complications': 'time & date'},
			{ 'image':'overseas.jpg','name': 'Overseas', 'reference': '‎4500V', 'diameter': '38 mm', 'movement': 'automatic', 'complications': 'time & date'},
			{ 'image':'chronograph.jpeg','name': 'Chronograph', 'reference': '47192', 'diameter': '38 mm', 'movement': 'manual', 'complications': 'chronograph'},
		],
	},
	{
		'id': 'audemars-piguet',
		'name': 'Audemars Piguet',
		'image': 'ap.jpg',
		'description': 'Audemars Piguet (AP) (French pronunciation: ​[odmaʁ piɡɛ]) is a Swiss manufacturer of complicated mechanical watches founded in 1875[2] by watch makers Jules-Louis Audemars and Edward-Auguste Piguet. Audemars Piguet is considered by many experts and aficionados to be one of the most prestigious watch manufacturers and a leader in haute horology.',
		'models' : [
			{ 'image':'royal.jpg','name': 'Royal Oak', 'reference': '14790', 'diameter': '38 mm', 'movement': 'automatic', 'complications': 'time & date'},
			{ 'image':'offshore.jpg','name': 'Royal Oak Offshore', 'reference': '15340', 'diameter': '44 mm', 'movement': 'automatic', 'complications': 'Chronograph'},
			{ 'image':'milenary.jpg','name': 'Milenary', 'reference': '4101', 'diameter': '44 mm', 'movement': 'automatic', 'complications': 'time & date'},
			{ 'image':'jules.jpg','name': 'Jules Audemars', 'reference': '26346', 'diameter': '40 mm', 'movement': 'automatic', 'complications': 'time & date'},
		],
	},
	{
		'id': 'breguet',
		'name': 'Breguet',
		'image': 'breguet.png',
		'description': 'Breguet is a Swiss manufacturer of luxury watches, founded by Abraham-Louis Breguet in Paris in 1775. Currently part of The Swatch Group, its timepieces are now (since 1976) produced in the Vallée de Joux in Switzerland. The company, along with Vacheron Constantin, is one of the oldest surviving watch-making establishments and a pioneer of numerous watch-making technologies, such as the tourbillon, invented by Abraham-Louis Breguet. It also produced the first wrist watch in 1810',
		'models' : [
			{ 'image':'marine.jpeg','name': 'Marine', 'reference': '5817', 'diameter': '39 mm', 'movement': 'automatic', 'complications': 'time & date'},
			{ 'image':'tradition.jpg','name': 'Tradition', 'reference': '7047', 'diameter': '42 mm', 'movement': 'automatic', 'complications': 'time'},
			{ 'image':'classique.jpg','name': 'Classique', 'reference': '7147', 'diameter': '39 mm', 'movement': 'automatic', 'complications': 'time & date'},
			{ 'image':'typexx.jpeg','name': 'Type XX', 'reference': 'Aeronavale', 'diameter': '40 mm', 'movement': 'automatic', 'complications': 'chronograph'},
		],
	},
	{
		'id': 'rolex',
		'name': 'Rolex',
		'image': 'rolex.png',
		'description': 'Rolex SA is a Swiss luxury watchmaker. The company and its subsidiary Montres Tudor SA design, manufacture, distribute and service wristwatches sold under the Rolex and Tudor brands. Founded by Hans Wilsdorf and Alfred Davis in London, England in 1905 as Wilsdorf and Davis, Rolex moved its base of operations to Geneva, Switzerland in 1919.',
		'models' : [
			{ 'image':'submariner.jpeg','name': 'Submariner', 'reference': '11610', 'diameter': '40 mm', 'movement': 'automatic', 'complications': 'time & date'},
			{ 'image':'daytona.jpeg','name': 'Daytona', 'reference': '116520', 'diameter': '40 mm', 'movement': 'automatic', 'complications': 'chronograph'},
			{ 'image':'celini.jpeg','name': 'Celini', 'reference': '6693', 'diameter': '38 mm', 'movement': 'automatic', 'complications': 'time & date'},
			{ 'image':'yachtmaster.jpg','name': 'Yachtmaster', 'reference': '116655', 'diameter': '40 mm', 'movement': 'automatic', 'complications': 'time & date'},
		],
	},
	{
		'id': 'lange-sohne',
		'name': 'A. Lange & Sohne',
		'image': 'lange.jpg',
		'description': 'Lange was founded in 1845 by Ferdinand Adolph Lange in the town of Glashütte, near Dresden, in the state of Saxony. Under Ferdinand, and then, following his death, his sons Emil and Richard, Lange produced quality pocket watches, the companys very best products generally being given the "1A" designation. Under subsequent generations of the Lange family, the company continued to produce pocket watches and, like many German watch makers, produced oversized wrist watches for use by German airmen in World War II',
		'models' : [
			{ 'image':'langeone.jpg','name': 'One', 'reference': 'L941.1', 'diameter': '38 mm', 'movement': 'manual', 'complications': 'time & date'},
			{ 'image':'1815.jpg','name': '1815', 'reference': 'L051.1', 'diameter': '38 mm', 'movement': 'manual', 'complications': 'time & date'},
			{ 'image':'saxonia.jpeg','name': 'Saxonia', 'reference': 'L121.1', 'diameter': '37 mm', 'movement': 'automatic', 'complications': 'time & date'},
			{ 'image':'richard.jpeg','name': 'Richard Lange', 'reference': 'L094.1', 'diameter': '42 mm', 'movement': 'manual', 'complications': 'time'},
			{ 'image':'zeitwerk.jpg','name': 'Zeitwerk', 'reference': 'L043.5', 'diameter': '42 mm', 'movement': 'manual', 'complications': 'Minute repeater'},
		],
	}
];

export default watchGroups;