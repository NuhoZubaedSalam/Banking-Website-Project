document.getElementById("login-form").addEventListener("submit", (event) => {
    // Prevents the form from resetting when when the submit button is clicked
    event.preventDefault(); 
    
    // Gets the user's email and password from the input fields
    const email = document.getElementById("user-email").value;
    const password = document.getElementById("user-password").value;

    // Redirects to the banking page if the credentials are correct
    // Otherwise it shows an error message
    if (email === "admin@domain.com" && password === "banking")
        window.location.href = "./banking.html";
    else
        return alert("Wrong credentials");

    // Resets the form to its original state
    document.getElementById('login-form').reset();
})