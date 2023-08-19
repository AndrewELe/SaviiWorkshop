require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function () {
	await Category.deleteMany({});
	const categories = await Category.create([
		{ name: 'Power components', sortOrder: 10 },
		{ name: 'Crystal components', sortOrder: 20 },
		{ name: 'Switches and Adjustments', sortOrder: 30 },
		{ name: 'Energizer components', sortOrder: 40 },
		{ name: 'Emitters', sortOrder: 50 },
		{ name: 'Coatings', sortOrder: 60 },
		{ name: 'Other', sortOrder: 70 }
	]);

	await Item.deleteMany({});
	const items = await Item.create([
		// category[0]
		//change path of image url to actual path in img folder
		{ name: "Old Republic's Diatium Power Cell", imageURL: '/img/il_794xN.1156119802_nqsd.webp' , description: 'from the old republic', category: categories[0], price: 5.95 },
		{ name: 'Unbalanced Diatium Power Cell', imageURL: "/img/diatiumpowercellpack.915.jpg" ,description: 'unknown origin', category: categories[0], price: 5.95 },
		{ name: 'Temple Diatium Power Cell', imageURL: "/img/diatiumpowercellpack.927.jpg", description: 'From the Jedi Temple',category: categories[0], price: 6.95 },
		{ name: 'Broken Diatium Power Cell', imageURL: "/img/6.png", description: 'broken', category: categories[0], price: 0.95 },
		// category[1]
		{ name: 'Focusing crystal', imageURL: "/img/il_1140xN.4308935404_43vu.webp" , description: 'intact and functional', category: categories[1], price: 14.95 },
		{ name: 'Dual bladed focusing crystal', imageURL: "/img/Diatium_Power_Cell.webp" ,description: 'for double bladed sabers', imageURL: "/img/il_794xN.4932184446_e34y.webp" ,category: categories[1], price: 19.95 },
		{ name: '4th sister inquisitor focusing crystal', imageURL: "/img/il_794xN.3824461120_pdrm.avif" ,description: 'enables rotation of the blades', category: categories[1], price: 24.95 },
		// category[2]
		{ name: 'Classic box on switch', imageURL: "/img/LGT-Lightsaber-Custom-Handles-Parts-Button-Box-For-Obi-Wan-Luke-Skywalker-Light-Saber-Metal-Hilt.jpg", description: 'Supposedly designed from the skywalker family', category: categories[2], price: 1.95 },
		{ name: 'Deadmans switch', imageURL: "/img/7_0cdb13c6-c5d4-445b-84f9-8acc03a71f2f_1024x1024@2x.webp" ,description: 'turns off open hand release', category: categories[2], price: 4.95 },
		{ name: 'Chromium small on switch', imageURL: "/img/GetImage.jpeg" ,description: 'A clean classic design', category: categories[2], price: 3.95 },
		// category[3]
		{ name: 'Overcharged magnetic energizer', imageURL: "/img/30bb4be1000afdf7d821534235de29e1.jpg" ,description: 'May cause crackling of blade', category: categories[3], price: 7.95 },
		{ name: 'Balanced cyclic energizer', imageURL: "/img/fbdadf7543a43092fd0732cac41b7ffe.jpg" ,description: 'Allows for constant blade', category: categories[3], price: 1.95 },
		// category[4]
		{ name: 'Single blade with crossgaurd', imageURL: "/img/TREX-Proffie-Lightsaber-TXQ-Cal-kestis-Fallen-order-SNpixel-12colour-Smooth-Swing-Metal-Force-Heavy-Dueling-3 (1).jpg" ,description: 'Salvaged from an ancient design', category: categories[4], price: 2.95 },
		{ name: 'High gaurd emitter', imageURL: "/img/3f36705ea981a0db8cd99623a02aa3e50bb4f830_hq.jpg" ,description: 'Replicated from a survivor of the clone wars', category: categories[4], price: 3.95 },
		// category[5]
		{ name: 'Dothamirian coating', imageURL: "/img/TaronMalicosSaberJFOArt.webp" ,description: 'Bronzed coating, warm to the feel and stable at high temperatures', category: categories[5], price: 1.95 },
		{ name: 'DuraSteel coating', imageURL: "/img/my4vnabqgzz41.jpg" ,description: 'A product of Mandolorian engineering', category: categories[5], price: 0.95 },
		// category[6]
		{ name: 'Book: build your first saber', imageURL: "/img/Thejedipathcover.webp", description: 'A guide book, a bit tattered and heavily used', category: categories[6], price: 0.95 },
		{ name: 'Fuzzy tonton', imageURL: "/img/Fuzzy-Tauntaun.jpg", description: 'A delightful drink, numbs the mouth. Origins from planet Batuu, Black Spire outpost', category: categories[6], price: 0.95 },
	]);

	console.log(items);

	process.exit();
})();
