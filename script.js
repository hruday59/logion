function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "" || pass === "") {
        alert("Please fill all fields 😅");
    } else {
        alert("Login Successful! 🎉");
    }
}
