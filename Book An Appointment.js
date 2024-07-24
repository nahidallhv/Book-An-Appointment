document.querySelector(".open-book-an-appointment-button").addEventListener("click", function() {
    document.querySelector(".section-book-an-appointment").style.display = "block";
    this.style.display = "none";
});

document.querySelector(".close-button i").addEventListener("click", function() {
    document.querySelector(".section-book-an-appointment").style.display = "none";
    document.querySelector(".open-book-an-appointment-button").style.display = "inline-block"; 
});

document.querySelector(".button-book-appoinment-confirmed").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var gender = document.getElementById("gender").value;
    var message = document.getElementById("message").value;

    if (name && email && phone && gender && message) {
        document.querySelector(".section-book-an-appointment").style.display = "none";
        document.querySelector(".section-book-an-appointment-confirmed").style.display = "block"; 
    } else {
        alert("Please fill out all fields before submitting the form.");
    }
});

document.querySelector(".button-done").addEventListener("click", function() {
    document.querySelector(".section-book-an-appointment-confirmed").style.display = "none"; 
    document.querySelector(".section-book-an-appointment").style.display = "block";
    document.querySelector("form").reset();
});
