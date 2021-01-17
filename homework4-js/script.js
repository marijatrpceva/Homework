//HOMEWORK #1

function tellStory(array) {
    console.log("This is " + array[0] + ". "+ array[0]+ " loves " + array[2] + ". Today she is "+ array[1] + ", she is " + array[2] + " all day." );
}

tellStory(["Ana", "happy", "swimming"]);


//HOMEWORK #2

// function sum(randomNumbers) {
//     console.log("The sum is", randomNumbers[0]+randomNumbers[1]+randomNumbers[2]+randomNumbers[3]+randomNumbers[4])
// }

// sum([1, 2, 3, 4, 5]);


function validateNumber(numbers) {
//debugger;
let secondSum=0;
let counter=0;
    for (let i=0; i<=numbers.length; i++) {
        if (typeof numbers[i]=="number") {
            secondSum=secondSum+numbers[i]
            counter=counter+1;
        }
    }
        if (counter==numbers.length) {
                console.log("The sum is", secondSum)
        }
        else {
                console.log("Some of the inputs is not a number!")
            }
        
    }


validateNumber([1, 4, 3, 400, 5])