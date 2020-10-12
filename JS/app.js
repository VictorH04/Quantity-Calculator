let inputFiskVoksen = document.getElementById('inputFiskVoksen');

let inputFiskBarn = document.getElementById('inputFiskBarn');
let inputForm = document.getElementById('inputForm');

let btn = document.querySelector('.btn');
let finalValue = document.querySelector('.kalkulator-item--value');

inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    quantityCalc();
});

inputFiskVoksen.addEventListener('click', (event) => {
    // console.log(event.target);
    quantityCalc();
});

inputFiskBarn.addEventListener('click', (event) => {
    // console.log(event.target);
    quantityCalc();
})

btn.addEventListener('click', () => {
    quantityCalc();
});

function quantityCalc() {
    let inputFiskVoksenValue = inputFiskVoksen.value; 
    let inputFiskBarnValue = inputFiskBarn.value; 
    let sum = `${inputFiskVoksenValue * 200 + inputFiskBarnValue * 100}g`;

    console.log(inputFiskVoksenValue, inputFiskBarnValue);

    finalValue.textContent = `${inputFiskVoksenValue * 200}g + ${inputFiskBarnValue * 100}g = ${sum}`;
}

