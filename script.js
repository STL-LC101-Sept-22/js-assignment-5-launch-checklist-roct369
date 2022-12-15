window.addEventListener("load", function() {
document.addEventListener("submit", function(event){
    
            event.preventDefault()
            let pilot = document.querySelector("input[name=pilotName]");
            let copilot = document.querySelector("input[name=copilotName]");
            let fuelLevel = document.querySelector("input[name=fuelLevel]");
            let cargoLevel = document.querySelector("input[name=cargoMass]");
    
            //function call
            formSubmission(document, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)
        
   


    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        //console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const planet = listedPlanets[pickPlanet()]
        //console.log(planet)
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    })
})
});