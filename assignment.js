//for Feet to mile convert
function feetToMile(feet){
    const mile = feet*0.000189394;
    let outpotMile = mile.toFixed(4);
    return outpotMile;
}
const inputFeet = 10560;    //input feet value here to convert mile.
let resultForFeetToMile = feetToMile(inputFeet);
console.log(inputFeet,"feet = ", resultForFeetToMile, "mile\n");

//This section for wood calculator
function woodCalculator(chair, table, bed){
    const woodForChair =chair * 1; //sft
    const woodForTable =table * 3; //sft
    const woodForBed =bed * 5; //sft
    const totalWood = woodForChair + woodForTable + woodForBed;
    let returnData =[woodForChair, woodForTable, woodForBed, totalWood];
    return returnData;
}
    const quantityOfChair = 14;
    const quantityOfTable = 5;
    const quantityOfBed = 12;
    let fuctionReturn = woodCalculator(quantityOfChair,quantityOfTable,quantityOfBed);
    const woodForChair = fuctionReturn[0];
    const woodForTable = fuctionReturn[1];
    const woodForBed = fuctionReturn[2];
    const totalWood = fuctionReturn[3];

    console.log(woodForChair, "CFT Wood for", quantityOfChair, "Chair");
    console.log(woodForTable, "CFT Wood for", quantityOfTable, "Table");
    console.log(woodForBed, "CFT Wood for", quantityOfBed, "Bed");
    console.log("Total", totalWood, "CFT wood need\n");


//This section for Brick calculator
function brickCalculator(numberOfFloor){
    const brickForPerFeet =1000;
    let totalBrick;

    if(numberOfFloor>0 && numberOfFloor<11){
        return totalBrick = numberOfFloor * 15 *1000;
    }
    else if(numberOfFloor>10 && numberOfFloor<21){
        return totalBrick = numberOfFloor * 12 *1000;
    }
    else if(numberOfFloor>20){
        return totalBrick = numberOfFloor * 10 *1000;
    }
    else {
        return "Yor input data is not valid to calculate brick !!!";
    } 
    return totalBrick;
}
const inputFloorNumber = 21;
let totalNumberOfBrick = brickCalculator(inputFloorNumber);
console.log("Need",totalNumberOfBrick,"brick to build a",inputFloorNumber,"floor building\n");



//This section using to find smaller name;

function tinyFriend(friendName){

    let smallerName = friendName[0];
    for(var i = 0; i<friendName.length; i++){
        let name = friendName[i];
        if(name.length < smallerName.length){
            smallerName = name;
        }       
    }
    return smallerName;
}
const inputFriendName = ["Rayhan","Raju","Rubel", "Shourav", "Mamun"];

let smallerName = tinyFriend(inputFriendName);
console.log("Tiny friends name is:",smallerName);
