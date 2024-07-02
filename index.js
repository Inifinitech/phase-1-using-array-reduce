const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
//variable which holds the sum of all of the battery amounts
//pass 0 as second argument in reduce to ensure `total` starts from 0
const totalBatteries = batteryBatches.reduce(function (total, element) {
    return total + element;
}, 0)
console.log(totalBatteries);