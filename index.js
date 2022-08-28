const returnFirstTwoDrivers=function(drivers){
    return [...drivers].slice(0,2)
}
const returnLastTwoDrivers=function(drivers){
    return [...drivers].slice(-2)
}
const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(distance){
return function(fare){
    return fare*distance

}
}
const fareDoubler=function(fare){
    return 2*fare 
}
createFareMultiplier()

const fareTripler = function (fares){
    return 3 * fares
}
createFareMultiplier()
 
function selectDifferentDrivers(drivers,returnFirstTwoDrivers) {
 return returnFirstTwoDrivers(drivers)
}
