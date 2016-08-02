restaurants = [
    "All American Steak House",
    "Toltecos",
    "Not Your Average Joe's",
    "Firebird",
    "Bungalow Alehouse",
    "Ornery Brewery",
    "Uncle Julio's",
    "Burger Fi",
    "Nando's Peri Peri",
    "Travinia",
    "Five Guys",
    "Two Brothers",
    "Astoria",
    "Cock and Bowl",
    "Bottle Stop",
    "Secret Garden Cafe",
    "Cheesecake factory",
    "Hemibry",
    "Dixie Bones",
    "Smokey Bones",
    "Taste of Tandoor",
    "Siam Bistro",
    "Chuy's",
    "Matchbox",
    "The Knife",
    "Sakura",
]

var r = restaurants[Math.floor(Math.random() * restaurants.length)];

$("span#restaurant").text(r)