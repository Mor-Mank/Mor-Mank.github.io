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

var saintnicholasepprojDB = firebase.database().ref('saintnicholasepproj')

document.getElementById('saveForm').addEventListener('submit', sumbitForm);

function sumbitForm(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var Chicken = document.getElementById("Chicken").value;
  var phone = document.getElementById("phone").value;
}

const saveMessages = (name,Chicken,phone) => {
  var newContactForm = saintnicholasepprojDB.push();

  newContactForm.set({
    name: name,
    Food: Chicken,
    phone: phone,
  });
};

const getElementById = (id) => {
  return document.getElementById(id).value;
};