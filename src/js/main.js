import * as users from "./users.js";
import * as ls from "./ls.js";
import {addLoginAction, addRegisterAction} from "./login.js";
import {setUpdateAction} from "./resevations.js";
import {addModalAction} from "./modal.js";
import {headerLoggedAction} from "./header.js";

ls.initUsers();

//Header
headerLoggedAction();

//Login page
addRegisterAction();
addLoginAction();

//Reservations page
setUpdateAction();
addModalAction();