// const firstName = document.getElementById("firstname");
// const lastName = document.getElementById("lastname");
// const form = document.getElementById("form");
// const errorElement = document.getElementById("error");

// form.addEventListener("submit", (e) => {
//     let messages = [];
//     if (firstName.value === " " || firstName.value === null) {
//         messages.push("First name is required");
//     }

//     if (messages.length > 0) {
//         e.preventDefault();
//         errorElement.innerText = messages.join(", ");
//     }
//     // e.preventDefault()
// })


function checkFirstName() {
    var feedback = document.getElementById("feedback");
    var firstName = document.getElementById("firstname");
    if (firstName.value == " ") {
        feedback.textContent = "First name is required";
    } else {
        feedback.textContent = " ";
    }
}