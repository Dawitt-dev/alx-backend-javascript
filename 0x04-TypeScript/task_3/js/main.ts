/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

const updatedRow: RowElement = { 
    firstName: 'Guillaume', 
    lastName: 'Salva', 
    age: 23 
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

// Displaying the results in the browser
function displayResults() {
    const display = document.createElement('div');

    const insertMessage = `Inserted row ID: ${newRowID}`;
    const updateMessage = `Updated row: ${JSON.stringify(updatedRow)}`;
    const deleteMessage = `Deleted row ID: ${newRowID}`;

    display.innerHTML = `
        <p>${insertMessage}</p>
        <p>${updateMessage}</p>
        <p>${deleteMessage}</p>
    `;

    document.body.appendChild(display);
}

document.addEventListener("DOMContentLoaded", displayResults);
