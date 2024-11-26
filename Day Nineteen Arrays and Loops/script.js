// Arrays with items for each list
const freshProduceItems = ['Apples', 'Bananas', 'Carrots', 'Lettuce', 'Tomatoes', `Spinach`, `Potatoes`, `Cilantro`, `Parsley`, `Onions`, `Lemons/Limes`, `Garlic`, `Avocados`, `Strawberries`];
const bakingGoodsItems = ['Flour', 'Sugar', 'Baking Powder', 'Yeast', 'Butter', `Dry Yeast`, `Chocolate Chips`, `Cocoa Powder`, `Powdered Sugar`, `Vanilla`, `Honey`,`Brown Sugar`, `Baking Soda`, ];
const spiceItems = [`Black pepper`, `chilli powder`, `Cinnamon`, `Crushed Red Pepper`, `Cumin`, `Garlic Powder`, `Ketchup`, `Mustard`, `Mayo`, `Nutmeg`, `Paprika`, `Salt`, `Soy Sauce`];
const grainsItems = [`Breadcrumbs`, `Pasta`, `Rice`, `Wheat Bread`, `Flour Tortillas`, `Quinoa`];
const freezerItems = [`Berries`, `Corn`, `Broccoli`, `Pizza :)`, `Beef`, `Chicken`, `Bacon`, `Shrimp`, `Pastry`, `PIe`];
const oilsItems = [`Apple Cider`, `Balsamic Vinegar`, `Coconut oil`, `Olive oil`, `Vegetable Oil`, `Cooking wine`];
const meatItems = [`Chicken`, `Eggs`, `Ground beef`, `Beef`, `Meat`, `Turkey`];
const cannedItems = [`Chicken Broth`, `Salsa`, `Peanut Butter`, `Baked beans`, `Sweet corn`, `Sardine`, `Jelly`, `Red kidney beans`];
const snacksItems = [`Crackers`, `Nuts`, `Quick Oats`, `Popcorn`, `Cereal`, `Biscuits`];
const dairyItems = [`Butter`, `Sliced Cheese`, `Milk`, `Sour Cream`, `Greek Yoghurt`];

// The <ul> elements in the HTML
const produceList = document.querySelector('.produce-list'); // Fresh Produce list
const bakingList = document.querySelector('.baking-list');   // Baking Goods list
const spiceList = document.querySelector('.spice-list'); // Spice List
const grainsList = document.querySelector(`.grains-list`); //Grains List
const freezerList = document.querySelector(`.freezer-list`); //Freezer List
const oilsList = document.querySelector(`.oils-list`); //Vegetables and oils List
const meatList = document.querySelector(`.meat-list`); //Meat/ Protein List
const cannedList = document.querySelector(`.canned-list`); //Canned/ Dried  List
const snacksList = document.querySelector(`.snacks-list`); //Snacks List
const dairyList = document.querySelector(`.dairy-list`); //Dairy List

// Function to add items to a list
function addItemsToList(itemsArray, listElement) {

    for (let i = 0; i < itemsArray.length; i++) {
        const listItem = document.createElement('li'); 
        listItem.textContent = itemsArray[i];          
        listElement.appendChild(listItem);             
    }
}

// Step 4: Use the function to add items to both lists
addItemsToList(freshProduceItems, produceList);
addItemsToList(bakingGoodsItems, bakingList);
addItemsToList(spiceItems, spiceList);
addItemsToList(grainsItems, grainsList);
addItemsToList(freezerItems, freezerList);
addItemsToList(oilsItems, oilsList);
addItemsToList(meatItems, meatList);
addItemsToList(cannedItems, cannedList);
addItemsToList(snacksItems, snacksList);
addItemsToList(dairyItems, dairyList);
