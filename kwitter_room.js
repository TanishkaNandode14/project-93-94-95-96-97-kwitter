var firebaseConfig = {
    apiKey: "AIzaSyBTpGApcuZsYiSN-y4k8a5rH0RfMMVeOt4",
    authDomain: "project-1-10f4d.firebaseapp.com",
    databaseURL: "https://project-1-10f4d-default-rtdb.firebaseio.com",
    projectId: "project-1-10f4d",
    storageBucket: "project-1-10f4d.appspot.com",
    messagingSenderId: "727637542504",
    appId: "1:727637542504:web:b4b1ed3f0aa4d9e7871ddd",
    measurementId: "G-CKPFC21P75"
  };

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}