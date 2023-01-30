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
