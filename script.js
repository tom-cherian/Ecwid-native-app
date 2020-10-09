const days = ["Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday", "Sunday"];

const tbody = document.querySelector('tbody')

for( let i = 0 ; i<days.length ; i++) {
    //tr
    const tr = document.createElement('tr');
    tr.setAttribute('id', days[i]);

    //td
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');

    //checkbox
    const checkbox = document.createElement('input');
    checkbox.classList.add('form-check-input');
    checkbox.setAttribute('type', 'checkbox');

    //start time dropdown
    const startTimeSelect = document.createElement('select');
    startTimeSelect.className = 'custom-select custom-select-sm col-6'

    //end time dropdown
    const endTimeSelect = document.createElement('select');
    endTimeSelect.className = 'custom-select custom-select-sm col-6'

    // start Time Options
    const startTimeOptions = document.createElement('option');
    startTimeOptions.textContent = "choose..."

    //options
    const endTimeOptions = document.createElement('option');
    endTimeOptions.textContent = "choose..."

    //label
    const label = document.createElement('label');
    label.classList = 'form-check-label';
    label.textContent = days[i];

    //setting each row
    tbody.appendChild(tr);
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    td1.appendChild(checkbox);
    td2.appendChild(label);
    td3.appendChild(startTimeSelect);
    td4.appendChild(endTimeSelect);
    startTimeSelect.appendChild(startTimeOptions)
    endTimeSelect.appendChild(endTimeOptions)
}
