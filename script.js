
const studentField = document.querySelector('#name');
const programField = document.querySelector('#program');
const studentForm = document.querySelector('#student-form');
const studentDetailsContainer = document.querySelector('#student-details');

studentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const studentName = studentField.value.trim();
    const programName = programField.value.trim();

    if (studentName === '' || programName === '') {
        alert('Please fill out both fields.');
        return;
    }


    const studentCard = document.createElement('div');
    studentCard.style.border = "1px solid #c2f00c"
    studentCard.style.backgroundColor = "#fcf5f5"
    studentCard.style.padding = "10px"
    studentCard.style.margin = "12px 0"
    studentCard.innerHTML = `
        <p>Name: ${studentName}</p>
        <p>Program: ${programName}</p>
    `;

    studentDetailsContainer.appendChild(studentCard);


    studentForm.reset();
});


