// 1.User input: Job category, location
// 2.github jobs response => job title, location, how to apply (link)
// 3.on next to location of jobs, find housing btn
// 4.by clicking housing btn, another bootstrap card pops up, shows the housing results, average rent ...
// use dummy array for limited api calls
// fallback middle of sanfrancisco address, try to find business address
// looking add header for ajax cors, if it does not solves, use cors anywhere heroku app


// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyCjqbNE-e9ctONlDBQD6LYc_iVlD77_hZ4",
authDomain: "full-stack-bootcamp-1681b.firebaseapp.com",
databaseURL: "https://full-stack-bootcamp-1681b.firebaseio.com",
projectId: "full-stack-bootcamp-1681b",
storageBucket: "full-stack-bootcamp-1681b.appspot.com",
messagingSenderId: "797802791776",
appId: "1:797802791776:web:f435d46a7d541023a4d405",
measurementId: "G-P5RN8G26LN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize database
var database = firebase.database();

var apiKey = "X1-ZWz17l8xablyiz_2ox88";
var queryURLZillow = "https://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id="+ apiKey+ "&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA";


jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

$(".submit-btn").on("click",function(event){
    // Prevent refreshing when clicking submit btn
    // event.preventDefault();
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




