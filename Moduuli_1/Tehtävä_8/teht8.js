let startYear = Number(prompt('Enter the start year:'));
let endYear = Number(prompt('Enter the end year:'));

let listOfYears = document.querySelector('#leapYears');

for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        let leapYear = document.createElement('li');
        leapYear.textContent = String(year);
        listOfYears.appendChild(leapYear);
    }
}

