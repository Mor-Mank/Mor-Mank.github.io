const firebaseConfig = {
    apiKey: "AIzaSyBWQxsIuOSSgL357neWHQc242TicBw5d3E",
    authDomain: "saintnicholasepproj.firebaseapp.com",
    databaseURL: "https://saintnicholasepproj-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "saintnicholasepproj",
    storageBucket: "saintnicholasepproj.appspot.com",
    messagingSenderId: "947953743836",
    appId: "1:947953743836:web:3284eb88b9abeb442fc119",
    measurementId: "G-YF6FLSH3LC"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref('saintnicholasepproj')

function saveForm() {
  var name = document.getElementById("name").value;
  var chicken = document.getElementById("chicken").value;
  var phone = document.getElementById("phone").value;

  database.ref().push({
    name: name,
    chicken: chicken,
    phone: phone
  });

  window.location.href = "index2.html";
}