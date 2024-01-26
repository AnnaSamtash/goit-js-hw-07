const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", correctInput);

function correctInput() {
    let trimmedValue = this.value.trim();

    if (!trimmedValue) {
    output.textContent = "Anonymous";
    } else {
    output.textContent =
        trimmedValue.charAt(0).toUpperCase() +
        trimmedValue.slice(1).toLowerCase();
    }
}
