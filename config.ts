// Configuration file for the app. Contains instances and references

import { UserService } from "./backend/services/UserService";
import UserInfo from "./models/UserInfo";

export const userService = new UserService();

const initialUser: UserInfo = new UserInfo(
    '',
    '',
    '',

    0,
    '#fa7a70',
    true,

    0,
    0,
    0
);

export let user = initialUser;

