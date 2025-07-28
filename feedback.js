const form = document.getElementById("feedbackForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submit event triggered!");

    document.getElementById("emailError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("messageError").textContent = "";

    const email = document.getElementById("email").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
    }

    if (isNaN(age) || age < 18 || age > 99) {
        document.getElementById("ageError").textContent = "Age must be between 18 and 99.";
        isValid = false;
    }

    const wordCount = message.split(/\s+/).filter(Boolean).length;
    if (wordCount > 100) {
        document.getElementById("messageError").textContent = "Feedback must be 100 words or less.";
        isValid = false;
    } else if (message.length > 5000) {
        document.getElementById("messageError").textContent = "Feedback must be 5000 characters or less.";
        isValid = false;
    }

    if (isValid) {
        alert("Feedback submitted successfully!");
        form.reset();
    }
});