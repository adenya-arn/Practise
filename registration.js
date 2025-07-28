const form = document.getElementById("simpleForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === ""){
        alert("Name is required!!");
        return
    }

    if (!email.includes("@")){
        alert("Enter a valid email!!");
        return
    }

    alert("Formis submitted successfully!!")
    form.reset ();
});
