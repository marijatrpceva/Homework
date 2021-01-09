let stringDate=prompt("Enter date of birth MM-DD-YY");
let todayDate="04042021"
// let todayDate=prompt("Enter Today's date MM-DD-YY")
// let numDate = parseInt(stringDate);

let year= (stringDate % 10000);
let a=(stringDate/10000);
var fixed=a.toFixed(0);

let day=(fixed%100);
let b=(fixed/100);
let fixed2=b.toFixed(0);

let month=(fixed2%100);
let c=(fixed2/100);

//Today's date

let todayYear= (todayDate%10000);
let n= (todayDate/10000);
let fixedToday= n.toFixed(0); 

let todayDay= (fixedToday%100);
let l= (fixedToday/100);
let fixedToday2= l.toFixed(0);

let todayMonth=(fixedToday2%100);

var m=todayYear-year;


if (m>=18){
     if ( (month==todayMonth) && (day==todayDay)) {

        console.log ("Srekjen rodenden polnoleten")
    }

   else if ((m>18) || ((m==18) && (month<todayMonth)) || ((m==18) && (month==todayMonth)) && (day<todayDay)) {

        console.log ("polnoleten")  
    }
}

if (m<=18) {
    if ( (m<18) && (month==todayMonth) && (day==todayDay)){
        console.log ("Srekjen rodenden maloleten");
    }

    else if ((m<18) || (m==18) && (month>todayMonth) || (m==18) && (month==todayMonth) && (day>todayDay))  {
        console.log ("maloleten")
    }
}



