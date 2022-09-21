import { LOGOUT, SET_AUTH } from "../types/types";


export const login = (data) => ({ type: SET_AUTH, payload: data });
export const logout = (data) => ({ type: LOGOUT, payload: data });

