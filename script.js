let fruits = ['apple', 'grapes', 'banana'];

function firstFruit() {
    let favFruit = fruits[1];
    console.log(fruits[0]);

    function printFaveFruit() {
        console.log(favFruit);
        let leastFav =fruits[2];
    }
    printFaveFruit();
    //console.log(leastFav);
}

firstFruit();
greetings();

function greetings(){

    console.log('Hello, Darius');
};

let alertText = function(){
    alert('This is an alert')
}

alertText();