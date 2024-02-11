// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDd37A-ZCieegV9Zv4owd1F1_vaEBBbxJM",
    authDomain: "lets-chat-web-app-b1353.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-b1353-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-b1353",
    storageBucket: "lets-chat-web-app-b1353.appspot.com",
    messagingSenderId: "388424142643",
    appId: "1:388424142643:web:b360ed44506aa530393846"
  };


  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

  }