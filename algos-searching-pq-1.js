var names = ["Albatross", "Great Lakes", "Coyote", "Australian Shepherd", "Mitten", "Boulder"];

function findWord(arr, word) { 
    var low = arr[0];
    var high = arr[arr.length -1];

    while (low <= high) {
        var mid = (arr.indexOf(low) + arr.indexOf(high)) / 2;
        mid = Math.round(mid);
        
        if(arr[mid] > word) { 
            high = arr[mid -1];
        } 
        else if (arr[mid] < word) {
            low = arr[mid + 1];
        }
        else {
            return arr[mid];
        }
    }
    return "The word does not exist.";
}

console.log(findWord(names, "Albatross"));