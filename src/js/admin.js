import {getUsers} from "./ls.js";

function tableReservations() {
    let reservationsTbl = document.getElementById("admin__reservations-tbl");

    if (!reservationsTbl) {
        return;
    }

    let users = getUsers();

    for (const user in users) {

        users[user].reservations.forEach( reservation => {
           let row = document.createElement("tr");
           reservationsTbl.appendChild(row);

           let col = document.createElement("td");
           col.innerHTML = users[user].name;
           row.appendChild(col);

            col = document.createElement("td");
            col.innerHTML = reservation.checkin;
            row.appendChild(col);

            col = document.createElement("td");
            col.innerHTML = reservation.checkout;
            row.appendChild(col);

            col = document.createElement("td");
            col.innerHTML = reservation.persons;
            row.appendChild(col);

            col = document.createElement("td");
            col.innerHTML = reservation.room;
            row.appendChild(col);

            col = document.createElement("td");
            col.innerHTML = reservation.services;
            row.appendChild(col);
        })
    }
}

export function addTableReservationsAction() {
    tableReservations();
}