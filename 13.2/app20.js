const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

foods.sort();
// console.log(foods);

foods.reverse();
// console.log(foods);


const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
    ];

    foodsWithUpperCase.sort((a,b)=> {
        a=a.toLowerCase();
        b=b.toLowerCase();
        if (a<b) return -1;
        if (a>b) return 1;
        if (a===b) return 0;
     });
        console.log(foodsWithUpperCase);



    const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

        words.sort((a,b)=> 
       b.length - a.length)
       console.log(words);
        