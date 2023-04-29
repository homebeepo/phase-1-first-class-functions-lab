// Code your solution in this file!
const returnFirstTwoDrivers =function (drivers) {
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function (drivers) {
    return [drivers[(drivers.length - 2)], drivers[(drivers.length - 1)]]
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiple) {
    return function FareMultiplier(fare) {
        return (fare * multiple)
    } 
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, selectTwo) {
    return selectTwo(drivers)
}