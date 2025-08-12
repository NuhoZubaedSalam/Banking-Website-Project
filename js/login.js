document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault(); 
    
    const email = document.getElementById("user-email").value;
    const password = document.getElementById("user-password").value;

    if (email === "admin@domain.com" && password === "banking")
        window.location.href = "./banking.html";
    else
        return alert("Wrong credentials");

    document.getElementById('login-form').reset();
})