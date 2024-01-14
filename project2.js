const form = document.querySelector("form");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = "Invlaid height, Enter the correct input.";
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Invlaid weight, Enter the correct input.";
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span> ${bmi}</span>`;
        if (bmi < 18.6) {
            result.innerHTML = `<span> ${bmi} <br>
            You are under weight!
            </span>`;
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = `<span> ${bmi} <br>
            Your weight is normal!!
            </span>`;
        }
        else {
            result.innerHTML = `<span> ${bmi} <br>
            You are over weight!
            </span>`;
        }
    }
})