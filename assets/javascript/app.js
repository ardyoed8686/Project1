// 1.User input: Job category, location
// 2.github jobs response => job title, location, how to apply (link)
// 3.on next to location of jobs, find housing btn
// 4.by clicking housing btn, another bootstrap card pops up, shows the housing results, average rent ...
// use dummy array for limited api calls
// fallback middle of sanfrancisco address, try to find business address
// looking add header for ajax cors, if it does not solves, use cors anywhere heroku app

var apiKey = "X1-ZWz17l8xablyiz_2ox88";
var queryURLZillow = "https://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id="+ apiKey+ "&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA";

$(".submit-btn").on("click",function(event){
    // Prevent refreshing when clicking submit btn
    event.preventDefault();

    // var description = $("#job-description").val().trim();
    // var loc = $("#input-location").val().trim();
    var queryURLJobs = "https://jobs.github.com/positions.json?description=";
    description = "python";
    var loc = "San Francisco";
    console.log(queryURLJobs+description+"&location="+loc);
    $.ajax({
        url: queryURLJobs+ description + "&location=" +loc,
        method: "GET"
    }).then(function(response){
        console.log(response);
    });

})




