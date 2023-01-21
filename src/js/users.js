import * as ls from "./ls.js";
export const users = {
  "fernando@tex.com": {
    "name": "Fernando Braga Alves",
    "email": "fernando@tex.com",
    "password": "senha",
    "roles": "ROLE_ADMIN",
    "reservations": []
  }
}

export function addUser(name, email, password) {
  users[email] = {
    "name":name,
    "email": email,
    "password": password,
    "roles": "ROLE_USER",
    "reservations": []
  }

  ls.loadUsers();
}
