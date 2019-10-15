// 1.User input: Job category, location
// 2.github jobs response => job title, location, how to apply (link)
// 3.on next to location of jobs, find housing btn
// 4.by clicking housing btn, another bootstrap card pops up, shows the housing results, average rent ...
// use dummy array for limited api calls
// fallback middle of sanfrancisco address, try to find business address


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
    // console.log(queryURLJobs+description+"&location="+loc+ "&page=1");
    $.ajax({
        url: queryURLJobs+ description + "&location=" +loc +"&page=1",
        method: "GET"
    }).then(function(response){
        console.log(response);
        var len = response.length;
        for (var i = 0; i < len; i++){
            var title = response[i].title;
            var company = response[i].company;
            var locat = response[i].location;
            var descr = response[i].description;
            var limitLength = 300;
            if (descr.length > limitLength){
                descr = descr.substr(0,limitLength-2)+'...';
            }
            var link = response[i].url;
            console.log(link);
            var newDiv = $("<div>");
            newDiv.addClass("row");
            newDiv.addClass("job-list");
            newDiv.append("<h3>"+title+"</h3>");
            newDiv.append("<h4>"+company+"</h4>");
            newDiv.append("<h4>"+locat+"</h4>");
            newDiv.append("<p>"+descr+"</p>");
            newDiv.attr("href",link);
            $(".job-results").append(newDiv);
        }
    });

})


// $(".job-list").on("click",function(event){
//     var link = $(this).attr("href");
//     console.log(link);
//     $(".job-list").load(link);
//     return false;
// })




