var fishTank = ["neon tetra", "goldfish", "sunrise guppy", "glofish", "kohaku swordtail", "tiger barb", "white-spotted goldfish"];

function netFish(arr, target){
    for(var i = 0; i < arr.length; i++){
        if (arr[i] === target){
            return "You've net the only white-spotted goldfish from the fish tank.";
        }
    }
    return "A white-spotted goldfish isn't in the tank.";
}

console.log(netFish(fishTank, "white-spotted goldfish"));