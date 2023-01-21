import {users} from "./users.js";

export function initUsers() {
    if (localStorage.getItem("users") !== null) {
        return;
    }
    localStorage.setItem("users", JSON.stringify(users));
}

export function loadUsers() {
    localStorage.setItem("users", JSON.stringify(users));
}

export function getUsers() {
    return JSON.parse(localStorage.getItem("users"));
}

export function getLogedUser() {
    return localStorage.getItem("loggedUser");
}