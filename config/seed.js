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
		{ name: "Old Republic's Diatium Power Cell", imageURL: '/img/randTest' , description: 'from the old republic', category: categories[0], price: 5.95 },
		{ name: 'Unbalanced Diatium Power Cell', description: 'unknown origin', category: categories[0], price: 5.95 },
		{ name: 'Temple Diatium Power Cell',description: 'From the Jedi Temple',category: categories[0], price: 6.95 },
		{ name: 'Broken Diatium Power Cell', description: 'broken', category: categories[0], price: 0.95 },
		// category[1]
		{ name: 'Focusing crystal', description: 'intact and functional', category: categories[1], price: 14.95 },
		{ name: 'Dual bladed focusing crystal', description: 'for double bladed sabers', category: categories[1], price: 19.95 },
		{ name: '4th sister inquisitor focusing crystal', description: 'enables rotation of the blades', category: categories[1], price: 24.95 },
		// category[2]
		{ name: 'Classic box on switch', description: 'Supposedly designed from the skywalker family', category: categories[2], price: 1.95 },
		{ name: 'Deadmans switch', description: 'turns off open hand release', category: categories[2], price: 4.95 },
		{ name: 'Chromium small on switch', description: 'A clean classic design', category: categories[2], price: 3.95 },
		// category[3]
		{ name: 'Overcharged magnetic energizer', description: 'May cause crackling of blade', category: categories[3], price: 7.95 },
		{ name: 'Balanced cyclic energizer', description: 'Allows for constant blade', category: categories[3], price: 1.95 },
		// category[4]
		{ name: 'Single blade with crossgaurd', description: 'Salvaged from an ancient design', category: categories[4], price: 2.95 },
		{ name: 'High gaurd emitter', description: 'Replicated from a survivor of the clone wars', category: categories[4], price: 3.95 },
		// category[5]
		{ name: 'Dothamirian coating', description: 'Dark matte coating, warm to the touch', category: categories[5], price: 1.95 },
		{ name: 'DuraSteel coating', description: 'A product of Mandolorian engineering', category: categories[5], price: 0.95 },
		// category[6]
		{ name: 'Book: build your first saber', description: 'A guide book, a bit tattered and heavily used', category: categories[6], price: 0.95 },
		{ name: 'Fuzzy tonton', description: 'A delightful drink, numbs the mouth. Origins from planet Batuu, Black Spire outpost', category: categories[6], price: 0.95 },
	]);

	console.log(items);

	process.exit();
})();
