    function saveForm() {
        var name = document.getElementById("name").value;
        var Chicken = document.getElementById("Chicken").value;
        var phone = document.getElementById("phone").value;
        
        var data = localStorage.getItem("data");
        if (data == null) {
          data = [];
        } else {
          data = JSON.parse(data);
        }
    
        data.push({name: name, Chicken: Chicken, phone: phone});
        
        localStorage.setItem("data", JSON.stringify(data));
    
        window.location.href = "display.html";
        }

        var data = localStorage.getItem("data");
        if (data != null) {
          data = JSON.parse(data);
          for (var i = 0; i < data.length; i++) {
            var userData = document.createElement("p");
            userData.innerHTML = "ออเดอร์ " + (i+1) + ": ชื่อ: " + data[i].name + " เมนูที่: " + data[i].Chicken + " เบอร์โทร: " + data[i].phone;
            document.getElementById("user-data").appendChild(userData);
          }
        }
    