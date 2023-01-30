function saveForm() {
    var name = document.getElementById("name").value;
    var chicken = document.getElementById("chicken").value;
    var phone = document.getElementById("phone").value;
    
    localStorage.setItem("name", name);
    localStorage.setItem("chicken", chicken);
    localStorage.setItem("phone", phone);
}

var displayName = document.getElementById("displayName");
var displayChicken = document.getElementById("displayChicken");
var displayPhone = document.getElementById("displayPhone");

displayName.innerHTML = localStorage.getItem("name");
displayChicken.innerHTML = localStorage.getItem("Chicken");
displayPhone.innerHTML = localStorage.getItem("phone");
