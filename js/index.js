const loginPage = document.querySelector(".loginPage");
const loginName = document.querySelector(".name");
const loginPass = document.querySelector(".password");
const loginButton = document.querySelector(".loginPage button");
const inputPage = document.querySelector(".aboutPage");
const inputs = document.querySelectorAll(".inputPage input")
const info = document.querySelector(".aboutView")
const infoFields = document.querySelectorAll(".aboutView h3")

const inputValue = {};

loginButton.addEventListener("click", () => {
    if (loginName.value === "admin" && loginPass.value === "admin") {
        inputPage.style.display = "flex"
        loginPage.style.display = "none"
    }
    else {
        alert("Password or Name is Wrong!!!")
    }
})

loginPage.addEventListener("submit", (e) => {
    e.preventDefault();
})

inputs.forEach((input) => {
    input.addEventListener("change", function () {
        const { name: inputName, value } = this;
        inputValue[inputName] = value;
    })
})


let counter = 0;
inputPage.addEventListener("submit", (e) => {
    e.preventDefault();
    infoFields.forEach((infoField) => {
        if (counter < 4 && inputValue[infoField.id] !== undefined) {
            infoField.innerText += "   " + inputValue[infoField.id]
            counter++;
        }

    })
}) 