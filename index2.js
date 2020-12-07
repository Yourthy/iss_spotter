const { nextISSTimesForMyLocation, printPassTimes } = require('./iss_promised');
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("Something went wrong there ....", error.message);
  });