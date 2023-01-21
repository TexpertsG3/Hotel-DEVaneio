import * as users from "./users.js";
import * as ls from "./ls.js";
import {addLoginAction, addRegisterAction} from "./login.js";
import {setUpdateAction} from "./resevations.js";
import {addModalAction} from "./modal.js";

ls.initUsers();
addRegisterAction();
addLoginAction();

setUpdateAction();

addModalAction();