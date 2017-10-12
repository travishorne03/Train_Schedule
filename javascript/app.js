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
  var trainTime = $("#start-display").val().trim();
  var frequency = $("#frequency-display").val().trim();

//Take the data from the form and pushing it to firebase

  database.ref().push({
    name: trainName,
    destination: destination,
    time:  trainTime,
    freq: frequency
    
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





//var calculation time




//database.ref().on("child_added".function(snapshot) - adds new row to table

dataRef.ref().on("child_added",function(childSnapshot){

console.log(childSnapshot.val().trainName)
console.log(childSnapshot.val().destination)
console.log(childSnapshot.val().trainTime)
console.log(childSnapshot.val().frequency)
console.log(childSnapshot.val().arrival)
console.log(childSnapshot.val().away)




})




//Play some music at the end 
})
