const food = ["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"];

const food1 = ["Fries", "Ice-cream", "Pizza",
"Olives", "Hamburgers"];

const foods = function (food, food1){
    if (food.length !== food1.length){
        return false;

    }
    if (food.sort().toString() !== food1.sort().toString()){
        return false;
    }
    foods(food,food1)
    return true;

};

console.log(foods (["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"],["Fries", "Ice-cream", "Pizza",
"Olives", "Hamburgers"]) );


