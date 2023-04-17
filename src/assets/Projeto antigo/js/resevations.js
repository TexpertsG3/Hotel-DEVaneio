// import { getLoggedUser, getUsers, loadUsers } from "./ls.js";
// import { setAlert } from "./login.js";
//
// // Preços
// const prices = {
//   "Acomodação C": 99,
//   "Acomodação C#": 199,
//   "Acomodação C++": 299,
// };
//
// export function updateResume() {
//   let form = new FormData(document.getElementById("form-reservations"));
//
//   let room = document.getElementById("resume-room");
//   let checkin = document.getElementById("resume-checkin");
//   let checkout = document.getElementById("resume-checkout");
//   let adults = document.getElementById("resume-adults");
//   let children = document.getElementById("resume-children");
//   let price = document.getElementById("resume-price");
//
//   room.innerHTML = form.get("room");
//
//   let date;
//   let dateFormated;
//
//   if (form.get("check-in")) {
//     date = Date.parse(form.get("check-in"));
//     dateFormated = new Intl.DateTimeFormat("pt-BR").format(date);
//     checkin.innerHTML = dateFormated;
//   }
//
//   if (form.get("check-out")) {
//     date = Date.parse(form.get("check-out"));
//     dateFormated = new Intl.DateTimeFormat("pt-BR").format(date);
//     checkout.innerHTML = dateFormated;
//   }
//
//   adults.innerHTML = form.get("adults");
//   children.innerHTML = form.get("children");
//
//   let one_day = 1000 * 60 * 60 * 24;
//   let days =
//     Date.parse(form.get("check-out")) - Date.parse(form.get("check-in"));
//   days = days / one_day;
//
//   if (isNaN(days) || days < 0) {
//     days = 0;
//   }
//
//   if (isNaN(adults.textContent, children.textContent)) {
//     adults = 1;
//     children = 1;
//   }
//
//   let priceValue;
//
//   let roomPrice = room.textContent ? prices[room.textContent] : 0;
//
//   if (adults.textContent > 1 || children.textContent > 1) {
//     priceValue = roomPrice * adults.textContent * 1.1 * days;
//   } else {
//     priceValue = roomPrice * adults.textContent * days;
//   }
//
//   let priceFormated = priceValue.toLocaleString("pt-BR", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   });
//
//   price.innerHTML = `R$ ${priceFormated}`;
// }
//
// export function setUpdateAction() {
//   let form = document.getElementById("form-reservations");
//
//   if (!form) {
//     return;
//   }
//
//   let inputs = form.querySelectorAll("input:not(input[type='submit'])");
//
//   inputs.forEach((el) => {
//     el.addEventListener("change", () => {
//       updateResume();
//     });
//   });
// }
//
// function validationReservation(checkin, checkout, persons, room, days) {
//   if (!checkin) {
//     setAlert("Campo Check-in não pode ser vazio", "reservation-alert", "error");
//     return false;
//   }
//   if (!checkout) {
//     setAlert(
//       "Campo Check-out não pode ser vazio",
//       "reservation-alert",
//       "error"
//     );
//     return false;
//   }
//
//   if (days < 0) {
//     setAlert(
//       "Campo check-out deve ser dias depois de Check-in",
//       "reservation-alert",
//       "error"
//     );
//     return false;
//   }
//
//   if (!persons) {
//     setAlert("Campo Pessoas não pode ser vazio", "reservation-alert", "error");
//     return false;
//   }
//
//   if (!room) {
//     setAlert("Selecione uma acomodação", "reservation-alert", "error");
//     return false;
//   }
//
//   return true;
// }
//
// function addReservatin() {
//   let form = new FormData(document.getElementById("form-reservations"));
//
//   if (!form) {
//     return;
//   }
//
//   let one_day = 1000 * 60 * 60 * 24;
//
//   let users = getUsers();
//   let loggedUser = getLoggedUser();
//   let checkin;
//   let checkout;
//   let services = [];
//   let price = document.getElementById("resume-price").innerText;
//
//   let date;
//   let dateFormated;
//
//   if (form.get("check-in")) {
//     date = Date.parse(form.get("check-in"));
//
//     if (Math.abs((Date.now() - date) / one_day) >= 1) {
//       setAlert(
//         "Check-in deve ter data a começar do dia atual",
//         "reservation-alert",
//         "error"
//       );
//       return;
//     }
//
//     dateFormated = new Intl.DateTimeFormat("pt-BR").format(date);
//     checkin = dateFormated;
//   }
//
//   if (form.get("check-out")) {
//     date = Date.parse(form.get("check-out"));
//     dateFormated = new Intl.DateTimeFormat("pt-BR").format(date);
//     checkout = dateFormated;
//   }
//
//   let days =
//     Date.parse(form.get("check-out")) - Date.parse(form.get("check-in"));
//   days = days / one_day;
//
//   if (form.get("service-1")) {
//     services.push(form.get("service-1"));
//   }
//   if (form.get("service-2")) {
//     services.push(form.get("service-2"));
//   }
//   if (form.get("service-3")) {
//     services.push(form.get("service-3"));
//   }
//
//   let reservation = {
//     checkin: checkin,
//     checkout: checkout,
//     persons: form.get("persons"),
//     room: form.get("room"),
//     services: services,
//     price: price,
//   };
//
//   if (
//     !validationReservation(
//       reservation.checkin,
//       reservation.checkout,
//       reservation.persons,
//       reservation.room,
//       days
//     )
//   ) {
//     return;
//   }
//
//   loggedUser.reservations.push(reservation);
//   users[loggedUser.email] = loggedUser;
//
//   localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
//   loadUsers(users);
//
//   setAlert("Reserva realizada com sucesso", "reservation-alert", "success");
// }
//
// export function addReservatinAction() {
//   let reservationSubmit = document.getElementById("reservation__submit");
//
//   if (!reservationSubmit) {
//     return;
//   }
//
//   reservationSubmit.addEventListener("click", (ev) => {
//     ev.preventDefault();
//     console.log("click");
//     addReservatin();
//   });
// }
