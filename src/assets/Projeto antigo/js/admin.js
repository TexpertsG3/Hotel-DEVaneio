// import { getUsers } from "./ls.js";
//
// export function tableReservations() {
//   let reservationsTbl = document.getElementById("admin__reservations-tbl");
//
//   if (!reservationsTbl) {
//     return;
//   }
//
//   let users = getUsers();
//
//   for (const user in users) {
//     users[user].reservations.forEach((reservation) => {
//       let row = document.createElement("tr");
//       reservationsTbl.appendChild(row);
//
//       let col = document.createElement("td");
//       col.innerHTML = users[user].name;
//       row.appendChild(col);
//
//       col = document.createElement("td");
//       col.innerHTML = reservation.checkin;
//       row.appendChild(col);
//
//       col = document.createElement("td");
//       col.innerHTML = reservation.checkout;
//       row.appendChild(col);
//
//       col = document.createElement("td");
//       col.innerHTML = reservation.persons;
//       row.appendChild(col);
//
//       col = document.createElement("td");
//       col.innerHTML = reservation.room;
//       row.appendChild(col);
//
//       col = document.createElement("td");
//       col.innerHTML = reservation.services;
//       row.appendChild(col);
//
//       col = document.createElement("td");
//       col.innerHTML = reservation.price;
//       row.appendChild(col);
//     });
//   }
// }
//
// export function tableClientes() {
//   let clientesTbl = document.getElementById("admin__clientes-tbl");
//
//   if (!clientesTbl) {
//     return;
//   }
//
//   let users = getUsers();
//
//   for (const user in users) {
//     let row = document.createElement("tr");
//     clientesTbl.appendChild(row);
//
//     let col = document.createElement("td");
//     row.appendChild(col);
//     col.innerHTML = users[user].name;
//
//     col = document.createElement("td");
//     row.appendChild(col);
//     col.innerHTML = user;
//   }
// }
