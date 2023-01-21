import {getLoggedUser, getUsers, loadUsers} from "./ls.js";
import {setAlert} from "./login.js";

export function updateResume() {
    let form = new FormData(document.getElementById("form-reservations"));

    let room = document.getElementById("resume-room");
    let checkin = document.getElementById("resume-checkin");
    let checkout = document.getElementById("resume-checkout");
    let persons = document.getElementById("resume-persons");

    room.innerHTML = form.get("room");

    let date;
    let dateFormated;

    if (form.get("check-in")) {
        date = Date.parse(form.get("check-in"));
        dateFormated = new Intl.DateTimeFormat('pt-BR').format(date);
        checkin.innerHTML = dateFormated;
    }

    if (form.get("check-out")) {
        date = Date.parse(form.get("check-out"));
        dateFormated = new Intl.DateTimeFormat('pt-BR').format(date);
        checkout.innerHTML = dateFormated;
    }


    persons.innerHTML = form.get("persons");
}

export function setUpdateAction() {
    let form = document.getElementById("form-reservations");

    if (!form) {
        return;
    }

    let inputs = form.querySelectorAll("input:not(input[type='submit'])");

    inputs.forEach(el => {
        el.addEventListener("change", e => {
            updateResume();
        })
    })
}

function validationReservation(checkin, checkout, persons, room) {
    if (!checkin) {
        setAlert("Campo Check-in não pode ser vazio", "reservation-alert", "error");
        return false;
    }
    if (!checkout) {
        setAlert("Campo Check-out não pode ser vazio", "reservation-alert", "error");
        return false;
    }

    if (!persons) {
        setAlert("Campo Pessoas não pode ser vazio", "reservation-alert", "error");
        return false;
    }

    if (!room) {
        setAlert("Selecione uma acomodação", "reservation-alert", "error");
        return false;
    }

    return true;
}

function addReservatin() {
    let form = new FormData(document.getElementById("form-reservations"));

    if (!form) {
        return;
    }

    let users = getUsers();
    let loggedUser = getLoggedUser();
    let checkin;
    let checkout;
    let services = [];

    let date;
    let dateFormated;

    if (form.get("check-in")) {
        date = Date.parse(form.get("check-in"));
        dateFormated = new Intl.DateTimeFormat('pt-BR').format(date);
        checkin = dateFormated;
    }

    if (form.get("check-out")) {
        date = Date.parse(form.get("check-out"));
        dateFormated = new Intl.DateTimeFormat('pt-BR').format(date);
        checkout = dateFormated;
    }

    if (form.get("service-1")) {
        services.push(form.get("service-1"))
    }
    if (form.get("service-2")) {
        services.push(form.get("service-2"))
    }
    if (form.get("service-3")) {
        services.push(form.get("service-3"))
    }

    let reservation = {
        "checkin": checkin,
        "checkout": checkout,
        "persons": form.get("persons"),
        "room": form.get("room"),
        "services": services,
    }

    if (!validationReservation(reservation.checkin, reservation.checkout, reservation.persons, reservation.room)) {
        return;
    }

    loggedUser.reservations.push(reservation);
    users[loggedUser.email] = loggedUser;

    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    loadUsers(users);

    setAlert("Reserva realizada com sucesso", "reservation-alert", "success");
}

export function addReservatinAction() {
    let reservationSubmit = document.getElementById("reservation__submit");

    if (!reservationSubmit) {
        return;
    }

    reservationSubmit.addEventListener("click", ev => {
        ev.preventDefault();
        console.log("click");
        addReservatin()
    })
}

