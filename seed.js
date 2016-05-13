/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = mongoose.model('User');
var Recipe = mongoose.model('Recipe');


var wipeCollections = function () {
    var removeUsers = User.remove({});
    return Promise.all([
        removeUsers
    ]);
};

var seedUsers = function () {

    var users = [
        {
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            email: 'obama@gmail.com',
            password: 'potus'
        }
    ];

    return User.create(users);

};

//below seeds recipes
var seedRecipes = function () {

    var recipes = [
        {
            name: 'Black Bean Soup',
            photoUrl:'http://cookforyourlife.org/wp-content/uploads/2015/09/Black-Bean-Soup.jpg',
            ingredients:[
              '⅓ cup olive oil',
              '1½ teaspoons whole cumin seeds',
              '1 medium onion, chopped',
              '1 medium poblano pepper, seeds removed and diced',
              '1 medium red pepper, seeds removed and diced',
              '1 large beefsteak tomato, chopped',
              '4 whole cloves garlic',
              'Salt, to tast',
              '2 tablespoons chopped fresh oregano, plus more for garnish',
              '1 can black beans, rinsed and drained',
              'Yogurt, for garnish',
              'Tortilla Chips, for garnish'
            ],
            directions:[
              '1. Heat the olive oil in a heavy bottomed stockpot, over medium heat. Add the cumin seeds and cook for 10 seconds. Add the onions, poblano, red pepper, and a generous pinch of salt. Cook stirring occasionally, until the onion is translucent and beginning to lightly brown, about 15 minutes.',
              '2. Add the tomato, whole garlic cloves and oregano. Let cook for 5 minutes. Add the black beans (reserving and setting aside ½ cup), and 2 cups of water. Bring to a boil, then simmer for 15 minutes.',
              '3. Puree the soup, then add in the reserved ½ cup of whole beans. Heat through, taste for seasonings and simmer until ready to serve. Top with a dollop of yogurt, tortilla chips and fresh oregano.'
            ],
            notes:['From my mom.','A bit spicy!'],
            rating: 4
        },
        {
            name: 'Mexican Chicken and Rice Salad',
            photoUrl:'https://lh3.googleusercontent.com/Pl63rgkg_6X1kjDDmQLS_uYpj8OddIFgDN8b6Qi56ieL3JdZ-c_7kgE8VCZHNhzWRrQt5WHex16khLLcPkeksA=s730-e365',
            ingredients:[
              '1 tbsp. Olive Oil',
              '2 Chicken breasts, cut into one inch cubes',
              '1 1/2 cups cooked rice',
              '1 Green bell pepper, chopped',
              '1 cup cherry tomatoes, chopped',
              '1 cup frozen corn',
              '1 cup black beans',
              '6 green onions, chopped',
              '1 cup queso duro',
              '1/2 cup cilantro, chopped',
              '3 tbsp taco season',
              'juice from 1 lemon',
              'juice from 1 lime',
              '2 tbsp olive oil',
              '1 avocado'
            ],
            directions:[
            'Heat olive oil in a non stick skillet over medium high heat.', 'Season the chicken with the taco seasoning, add more if you want it spicier',
            'Add chicken to skillet. Cook chicken for about 10 minutes until cooked through and starts to slightly brown.',
             'Remove chicken from skillet.',
             'To the same skillet add the corn and cook over high heat just until it starts to char a little bit, no more than 2 minutes.',
             'Add all ingredients to a large bowl, season with salt and pepper and toss.',
             'Refrigerate leftovers, good for up to 5 days.'
            ],
            notes:['From Karen.','Fast for dinner!'],
            rating: 5
        }
    ];

    return Recipe.create(recipes);

};

connectToDb
    .then(function () {
        return wipeCollections();
    })
    .then(function () {
        return seedUsers();
    })
    .then(function () {
        return seedRecipes();
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    })
    .catch(function (err) {
        console.error(err);
        process.kill(1);
    });
