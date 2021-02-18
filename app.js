const button = document.querySelector("button");
const email = document.querySelector("input");
const form = document.querySelector("form");
const errorDiv = document.querySelector("#errorDiv");

form.addEventListener("submit", event => {
    const emailFormat = /\S+@\S+\.\S+/;
    if (!email.value) {
        event.preventDefault();
        printError("Whoops! It looks like you forgot to add your email...");
    } else if (!email.value.match(emailFormat)) {
        event.preventDefault();
        printError("Please provide a valid email address")
    };
});

email.addEventListener("input", () => {
    email.classList.remove("errorEmail");
    errorDiv.innerHTML = "";
})

const printError = (message) => {
    email.classList.add("errorEmail");
    const errorMessage = document.createElement("p");
    errorMessage.append(message);
    errorDiv.innerHTML = "";
    errorMessage.classList.add("errorMessage0");
    errorDiv.append(errorMessage);
    setTimeout(() => {
        errorMessage.classList.add("errorMessage1");
    }, 0);
    email.focus();
}
