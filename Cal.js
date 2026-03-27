let Answer = document.querySelector(".Full-width")
let Button = document.querySelectorAll(".btn")

let currentCal = "";
let value;

Button.forEach(btn => {
    btn.addEventListener('click', () => {
        value = btn.textContent;

        if (value == 'C') {
            currentCal = '';
            Answer.innerHTML = '';
        }
        else if (value == '=') {
            try {
                currentCal = eval(currentCal);
                currentCal = String(currentCal);
                Answer.innerHTML = currentCal;
            } catch (error) {
                Answer.innerHTML = 'Error Found';
            }
        }
        else if (value == 'x') {
            currentCal = currentCal.slice(0, currentCal.length - 1);
                Answer.innerHTML = currentCal;
        }
        else {

            currentCal += value;
            Answer.innerHTML = currentCal;
        }
    })
})

