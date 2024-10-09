let form = document.getElementById("prayerForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let city = document.getElementById("city").value.trim();
    let country = document.getElementById("country").value.trim();

    if (city === "" || country === "") {
        alert("Please fill in both the city and country fields.");
    } else {
        city = document.getElementById("city").value;
        document.getElementById("country").value

        
        window.sessionStorage.setItem("city", city);
        window.sessionStorage.setItem("country", country);

        window.location.href = "second.html";
    }
});
