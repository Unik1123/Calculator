const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.textContent === "C") {
            display.value = "";
        } else if (e.target.textContent === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else {
            display.value += e.target.textContent;
        }
    });
});
