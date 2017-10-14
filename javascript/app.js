// Doc ready funtion
$(document).ready(function() { 


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDcWjkR3RwRKVn-zDq6QNqP3qKCR9oGeL8",
    authDomain: "train-schedule-8a6a9.firebaseapp.com",
    databaseURL: "https://train-schedule-8a6a9.firebaseio.com",
    projectId: "train-schedule-8a6a9",
    storageBucket: "train-schedule-8a6a9.appspot.com",
    messagingSenderId: "1029285648725"
  };
  firebase.initializeApp(config);  

// Create a variable to reference the database.
var database = firebase.database();
// Onclick event


$("#add-user").on("click",function(event) {
  event.preventDefault();
  var trainName = $("#name-display").val().trim();
  var destination = $("#destination-display").val().trim();
  var trainTime = moment($("#start-display").val().trim(), "HH:mm").format("HH:mm a");
  console.log(trainTime);
  var frequency = moment($("#frequency-display").val().trim(), "mm").format("mm");
  
  //var calculation time
  
  var formated = moment(trainTime, "hh:mm").subtract(1, "years");
  console.log(formated);
  var diff = moment().diff(moment(formated), "minutes");
  console.log(diff);
  var apart = diff % frequency;
  console.log(apart);
  var away = frequency - apart;
  console.log(away)

  var arrival = moment().add(away, "minutes").format("hh:mm");

//Take the data from the form and pushing it to firebase


  database.ref().push({
    name: trainName,
    destination: destination,
    time:  trainTime,
    freq: frequency,
    arrival: arrival,
    away: away
    
  });

  // Submit Button
  $("#name-display").val("");
  $("#destination-display").val("");
  $("#start-display").val("");
  $("#frequency-display").val("");

  console.log(trainName);
  console.log(destination);
  console.log(trainTime);
  console.log(frequency);

});



//database.ref().on("child_added".function(snapshot) - adds new row to table

database.ref().on("child_added",function(childSnapshot, prevChildKey){

  console.log(prevChildKey);

  var trainName= childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().time;
  var frequency = childSnapshot.val().freq;
  var arrival = childSnapshot.val().arrival;
 var away = childSnapshot.val().away;


console.log(childSnapshot.val().name)
console.log(childSnapshot.val().destination)
console.log(childSnapshot.val().time)
console.log(childSnapshot.val().freq)
//console.log(frequency);
console.log(childSnapshot.val().arrival)
console.log(childSnapshot.val().away)

//newRW = $("<tr>")
$("#dispSV" ).append(
"<tr><td>" + trainName + 
"</td><td>" + destination + 
"</td><td>"+ trainTime + 
"</td><td>"+ frequency + 
"</td><td>" + arrival + 
"</td><td>" + away + "</td></tr>"


);




//Play some music at the end 
});

});

