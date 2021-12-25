const switchBtn = document.getElementById("switch");
switchBtn.addEventListener("click", function(){
    const login = document.getElementById("loginPopup");
    login.style.display = "none";
    const registration = document.getElementById("registrationPopup");
    registration.style.display = "block";
})

