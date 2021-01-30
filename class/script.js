//1. Create a javascript function that will find all numbers divisable by 7 and 3 in a array from 1 to 100.
let arr=[];

for (i=7; i<=100; i++) {
    if ((i%7==0) && (i%3==0)) {
        arr.push(i);
    }
}


//2.


let balance = 100;

function addMoney() {
    let add = Number(prompt("How much money you want to add"))
    balance = balance + add;
    console.log("you have added " + add + "you now have " + balance);
    atm();
}


function takeMoney() {
    let take = Number(prompt("How much money you want to take"));
    balance = balance - take;
    console.log("you have taken " + take + " you now have " + balance);
    atm();
}

function currentBalance() {
    console.log("Your balance is ", balance);
    atm();
}

function close() {
    window.opener= self;
    window.close();

}

function atm() {
    let bank=prompt("What do u want to do (deposit, withdrawl, balance , exit)") 
        if (bank==="deposit") {
            addMoney();
        }
        else if(bank==="withdrawl") {
            takeMoney();
        }
        else if (bank==="balance") {
            currentBalance();
        }
        else if(bank==="exit") {
            close()
        }
}
atm();
