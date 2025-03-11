document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");

    // Dummy login check (Replace this with real authentication)
    if (username === "admin" && password === "admin") {
        localStorage.setItem("isLoggedIn", "true"); // Store login status
        window.location.href = "../index.html"; // Redirect to index page
    } else {
        alert("Invalid username or password!");
    }
});

// Redirect to login page if already logged in
if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "../index.html";
}
