/*HOMEWORK PART 1
Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. 
Try to call the functions 5 times for 5 different types */

function type(x) {
console.log(typeof x);
}

type([2,5])
type(true);
type(5);
type("I am a string");
type();


/* HOMEWORK PART 2 
Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog to human years as well  */

function dogToHuman(age) {
    console.log("The dog is "+ age*7 +" in human years" )
}

function humanToDog(age1) {
    console.log("The human is "+ age1/7 + " in dog years")
}

dogToHuman(3)
humanToDog(50)


/*HOMEWORK PART 3
Write a javascript function for an ATM */

function money(yourCash, request) {
    let moneyLeft
    if (yourCash<request) {
        console.log("Not enough money")
    }

    else {
        moneyLeft= yourCash-request;
        console.log("Ammount withdrawn:", request)
        console.log("Money left:",moneyLeft)
    }
    return moneyLeft;

}

//money(100,50)
yourCash=Number(prompt("How much money do you have?"))
request=Number(prompt("How much money do you want?"))
money(yourCash,request)  // ova probav so promt, ne znam dali moze vaka :)
