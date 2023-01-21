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