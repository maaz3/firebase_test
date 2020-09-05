// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBCmxmajHPZP8x3aq7hy5m543i_X-V41Fs",
    authDomain: "fir-test2-1a5b9.firebaseapp.com",
    databaseURL: "https://fir-test2-1a5b9.firebaseio.com",
    projectId: "fir-test2-1a5b9",
    storageBucket: "fir-test2-1a5b9.appspot.com",
    messagingSenderId: "398458504400",
    appId: "1:398458504400:web:6eeeb02c25dbbff72c4ad5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// //referance message collecton
// var textEnter = document.getElementById('text');
// var dir = textEnter.innerText;
// var database = firebase.database();
// var messageRef = firebase.database().ref(`${dir}`);
// //submit
// function submitbutton(){
//     event.preventDefault();
//     var newmsgref = messageRef;
//     newmsgref.set({
//        submission : textEnter.value,
//        location : "johar"
//     })
//     // messageRef.on("value", function(snapshot) {
//     //     console.log(snapshot.val());
//     //  }, function (error) {
//     //     console.log("Error: " + error.code);
//     //  });
// };