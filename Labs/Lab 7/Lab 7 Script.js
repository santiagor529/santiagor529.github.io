$(document).ready(function()
{
    $("#cat").click(function()
    {
        var catVotes =  firebase.database().ref('Cats');
        catVotes.once('value', function (snapshot) {
        var votes = snapshot.val();
        votes++;
        catVotes.set(votes);
        $("#catvotes").html("Cat Votes: " + votes)
        });
    });

    $("#dog").click(function()
    {
        var dogVotes =  firebase.database().ref('Dogs');
        dogVotes.once('value', function (snapshot) {
        var votes = snapshot.val();
        votes++;
        dogVotes.set(votes);
        $("#dogvotes").html("Dog Votes: " + votes)
        });
    });

    const firebaseConfig = 
    {
        apiKey: "AIzaSyCePt0TErQcfjretMes0p6jI8wQjmvJOH8",
        authDomain: "lab-7-d58c9.firebaseapp.com",
        projectId: "lab-7-d58c9",
        storageBucket: "lab-7-d58c9.appspot.com",
        messagingSenderId: "1085473745652",
        appId: "1:1085473745652:web:db5462db71fc5e4c134ca1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
});